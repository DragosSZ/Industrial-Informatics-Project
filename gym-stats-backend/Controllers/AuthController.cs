using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IMongoCollection<User> _users;

    public AuthController(MongoDbService mongoService)
    {
        _users = mongoService.GetUsersCollection();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        Console.WriteLine("⚡️ Login endpoint was hit");

        if (request == null)
        {
            Console.WriteLine("❌ Request is null");
            return BadRequest("Request body is missing");
        }

        Console.WriteLine($"📩 Email: {request.email}");
        Console.WriteLine($"🔑 Password: {request.password}");

        try
        {
            var user = await _users.Find(u => u.email == request.email).FirstOrDefaultAsync();

            if (user == null)
            {
                Console.WriteLine("❌ No user found with that email");
                return Unauthorized("Invalid email or password");
            }

            Console.WriteLine($"✅ DB Match: {user.email} / {user.password} / {user.role}");

            if (user.password != request.password)
            {
                Console.WriteLine("❌ Password does not match");
                return Unauthorized("Invalid email or password");
            }

            Console.WriteLine("✅ Login successful");
            return Ok(new
            {
                user.id,
                user.email,
                user.role
            });
        }
        catch (Exception ex)
        {
            Console.WriteLine("❌ EXCEPTION: " + ex.Message);
            return StatusCode(500, "Internal error");
        }
    }
}