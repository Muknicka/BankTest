using System.ComponentModel.DataAnnotations;
namespace BankAPI.Models
{
    public class Country
    {
        [Key]
        public int ID { get; set; }
        public string Pais { get; set; }
        public string Capital { get; set; }
        public string Continente { get; set; }
}
}
