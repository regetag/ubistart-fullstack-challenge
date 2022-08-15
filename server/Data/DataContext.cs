using Microsoft.EntityFrameworkCore;

namespace TodoApp.Data
{
  public class DataContext: DbContext
  {
    public DataContext(DbContextOptions<DataContext> options): base(options) 
    {}

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.UseSerialColumns();

      modelBuilder.Entity<User>()
        .HasIndex(u => u.Email)
        .IsUnique();

      modelBuilder.Entity<User>()
        .Property(u => u.CreatedAt)
        .HasDefaultValueSql("now()");

      // ToDo fields
      modelBuilder.Entity<ToDo>()
        .Property(u => u.CreatedAt)
        .HasDefaultValueSql("now()");

      modelBuilder.Entity<ToDo>()
        .Property(u => u.CreatedAt)
        .ValueGeneratedOnUpdate()
        .HasDefaultValueSql("now()");
    }

    public DbSet<User> Users { get; set; }
    public DbSet<ToDo> ToDos { get; set; }
  }
}