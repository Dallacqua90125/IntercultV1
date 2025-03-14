using IntercultApi.Models;
using Microsoft.EntityFrameworkCore;

namespace IntercultApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }
        public DbSet<Content> Contents { get; set; }
    }
}
