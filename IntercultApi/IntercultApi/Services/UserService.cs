using IntercultApi.Data;
using IntercultApi.Models;

namespace IntercultApi.Services
{
    public class UserService
    {
        private readonly ApplicationDbContext _context;
        private readonly User _user;

        public UserService(ApplicationDbContext context, User user)
        {
            _context = context;
            _user = user;
        }
    }
}
