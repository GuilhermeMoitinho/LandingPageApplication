using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiLandingPage3.Domian;

namespace WebApiLandingPage3.Context
{
    public class AppDbContext : DbContext
    { 
        public AppDbContext(DbContextOptions<AppDbContext>  op) : base(op)
        {   
        }

        public DbSet<PessoaEntity> PessoasEvento {get; set;}
    }
}