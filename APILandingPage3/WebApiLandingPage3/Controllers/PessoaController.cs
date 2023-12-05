using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiLandingPage3.Context;
using WebApiLandingPage3.Domian;

namespace WebApiLandingPage3.Controllers
{
    [ApiController]
    [Route("api/pessoa")]
    public class PessoaController : ControllerBase
    {
        protected readonly AppDbContext _context;

        public PessoaController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Post(PessoaEntity entity)
        {
            if(entity == null) return NotFound();

            await _context.PessoasEvento.AddAsync(entity);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}