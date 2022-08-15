using Microsoft.AspNetCore.Mvc;
using TodoApp.Data;
using TodoApp.dto;
using System.Security.Cryptography;

namespace TodoApp.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UserController: ControllerBase
  {

    private readonly DataContext dataContext;

    public UserController( DataContext dataContext)
    {
      this.dataContext = dataContext;
    }
    

    [HttpPost]
    public async Task<IActionResult> createUser([FromBody] CreateUser userData)
    {
      User? doUserExists = this.dataContext.Users.FirstOrDefault(e => e.Email == userData.Email);

      if (doUserExists != null){
        return Conflict("Email already in use.");
      }

      User newUser = new User
      {
        Email=userData.Email,
        Password=userData.Password
      };

      await this.dataContext.Users.AddAsync(newUser);
      await this.dataContext.SaveChangesAsync();

      return Ok(newUser);
    }
  }
}

