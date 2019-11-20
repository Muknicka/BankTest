using Microsoft.EntityFrameworkCore;

namespace BankAPI.Models
{
    public class ClientContext : DbContext
    {
        public ClientContext(DbContextOptions<ClientContext> options) : base(options)
        {

        }

        public DbSet<Client> Client { get; set; }
    }
}
