using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using WebApiLandingPage3.Enum;

namespace WebApiLandingPage3.Domian
{

    public abstract class Entity
    {
        public Guid Id { get;private set; }

        public Entity()
        {
            Id = Guid.NewGuid();
        }


    }
  public class PessoaEntity : Entity
    {
        [Required]
        [StringLength(100)] 
        public string Nome { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string Celular { get; set; }

        [Required]
        public InteresseEnum Interesse { get; set; }
    }
}