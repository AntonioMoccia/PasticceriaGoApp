using Microsoft.EntityFrameworkCore;
using Pasticceria.Models;

namespace Pasticceria.Data
{
    public class ApplicationDbContext : DbContext
    {
                public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        
        public DbSet<Dolci> Dolci { get; set; }
    }
}
