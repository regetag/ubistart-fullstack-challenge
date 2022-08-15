using System.ComponentModel.DataAnnotations;

namespace TodoApp.dto
{
  public class CreateUser
  {
    [Required(ErrorMessage = "The email field is required")]
    [DataType(DataType.EmailAddress, ErrorMessage = "Email invalid!")]
    public string Email { get; set; }

    [Required(ErrorMessage = "The password field is required")]
    [StringLength(maximumLength: 20, MinimumLength=6)]
    [DataType(DataType.Password)]
    public string Password{ get; set; }
  }
}