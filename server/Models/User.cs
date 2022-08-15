using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApp.Data
{
  [Table("users")]
  public class User
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; init; } = Guid.NewGuid();

    public string Email { get; set; }

    public string Password{ get; set; }

    public bool IsAdm { get; } = false;

    [DataType(DataType.DateTime)]
    public DateTime CreatedAt { get; init; }
  }
}