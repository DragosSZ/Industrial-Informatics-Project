using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using MongoDB.Driver;
using gym_stats_backend.Models;

namespace gym_stats_backend.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IMongoCollection<User> _users;

        public UserController(IMongoClient client)
        {
            var database = client.GetDatabase("gym-stats");
            _users = database.GetCollection<User>("Users");
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            foreach (var claim in User.Claims)
            {
                Console.WriteLine($"Claim: {claim.Type} = {claim.Value}");
            }

            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier)
                          ?? User.FindFirstValue(JwtRegisteredClaimNames.Sub)
                          ?? User.FindFirstValue("sub");
            if (userId == null)
                return Unauthorized();

            var user = await _users.Find(u => u.id == userId).FirstOrDefaultAsync();
            if (user == null)
                return NotFound();

            return Ok(new
            {
                user.id,
                user.name,
                user.email,
                user.role,
                user.weight,
                user.height,
                user.dateOfBirth,
                user.startDate,
                user.avatarUrl,
                trainer = user.trainer // this assumes `trainer` is a property on your User model
            });
        }
    }
}