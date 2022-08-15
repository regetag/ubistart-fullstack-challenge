using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TodoApp.Data
{
  [Table("todos")]
  public class ToDo
  {
    [Key]
    public Guid Id { get; init; } = Guid.NewGuid();

    [Required]
    public Guid UserId { get; set; }

    [Required]
    public string Title { get; set; }

    public string? Description { get; set; }

    public Nullable<DateTime> CompletedAt { get; set; }

    [Required]
    public DateTime DeadlineAt { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime UpdatedAt { get; set; }
  }
}