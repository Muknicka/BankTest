using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BankAPI.Models
{
    public class Client
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Nome { get; set; }
        public string Documento { get; set; }
        public string Endereco { get; set; }
        public string Complemento { get; set; }
        public string Country { get; set; }
    }
}
