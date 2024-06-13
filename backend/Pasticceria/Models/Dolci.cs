using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pasticceria.Models
{
    public class Dolci
    {
        [Key]
        public int Id { get; set; }
        public string nome { get; set; }
        public float prezzo {  get; set; }
        public int quantita { get; set; }
        public DateTime data { get; set; }
        public List<string> ingredienti { get; set; }
    }
}
