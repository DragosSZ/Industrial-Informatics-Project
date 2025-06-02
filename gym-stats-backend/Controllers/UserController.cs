using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using MongoDB.Driver;
using gym_stats_backend.Models;

// DTO for user profile updates (exclude startDate and role)
public class UserUpdateDto
{
    public string firstName { get; set; } = string.Empty;
    public string lastName { get; set; } = string.Empty;
    public string email { get; set; } = string.Empty;
    public float weight { get; set; }
    public float height { get; set; }
    public List<string> pictureUrls { get; set; } = new();
    public DateTime dateOfBirth { get; set; }
}

namespace gym_stats_backend.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
       private readonly IMongoCollection<User> _users;

       public UserController(IMongoClient client, IConfiguration config)
       {
           var databaseName = config["MongoDB:DatabaseName"];
           var database = client.GetDatabase(databaseName);
           _users = database.GetCollection<User>("users"); // ⚠️ Also fix case if needed
       }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
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
                firstName = user.firstName,
                lastName = user.lastName,
                user.email,
                user.role,
                user.weight,
                user.height,
                user.dateOfBirth,
                user.startDate,
                pictureUrls = user.pictureUrls,
                trainer = user.trainer
            });
        }

        [Authorize]
        [HttpPut("me")]
        public async Task<IActionResult> UpdateUserProfile([FromBody] UserUpdateDto updatedUser)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier)
                          ?? User.FindFirstValue(JwtRegisteredClaimNames.Sub)
                          ?? User.FindFirstValue("sub");

            if (userId == null) return Unauthorized();

            var update = Builders<User>.Update
                .Set(u => u.firstName, updatedUser.firstName)
                .Set(u => u.lastName, updatedUser.lastName)
                .Set(u => u.email, updatedUser.email)
                .Set(u => u.weight, updatedUser.weight)
                .Set(u => u.height, updatedUser.height)
                .Set(u => u.pictureUrls, updatedUser.pictureUrls)
                .Set(u => u.dateOfBirth, updatedUser.dateOfBirth.ToString("yyyy-MM-dd"));

            var result = await _users.UpdateOneAsync(u => u.id == userId, update);

            if (result.ModifiedCount == 0) return NotFound();

            return NoContent();
        }

        [Authorize]
        [HttpDelete("me")]
        public async Task<IActionResult> DeleteUser()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier)
                          ?? User.FindFirstValue(JwtRegisteredClaimNames.Sub)
                          ?? User.FindFirstValue("sub");

            if (userId == null) return Unauthorized();

            var result = await _users.DeleteOneAsync(u => u.id == userId);

            if (result.DeletedCount == 0) return NotFound();

            return NoContent();
        }
    }
}
