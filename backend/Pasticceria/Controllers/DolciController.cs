using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pasticceria.Data;
using Pasticceria.Models;

namespace Pasticceria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DolciController : ControllerBase
    {
        private ApplicationDbContext _db;

         public DolciController(ApplicationDbContext context)
        {
            _db = context;
        }
        [HttpGet]
        public List<Dolci> GetAllDolci() {
            List<Dolci> dolcis = _db.Dolci.ToList();
            List<Dolci> Filtered = dolcis.Where(dolce =>{
                return (DateTime.UtcNow.Date - dolce.data.Date).TotalDays < 3;
            }).ToList();
            List<Dolci> mappedDolcis = new List<Dolci>();
            Filtered.ForEach(dolce =>
            {

                var tempDolce =dolce;

                if ((DateTime.UtcNow.Date.Subtract(dolce.data.Date)).TotalDays == 1)
                {
                    tempDolce.prezzo = dolce.prezzo - (dolce.prezzo * 20) / 100;
                }
                if ((DateTime.UtcNow.Date.Subtract(dolce.data.Date)).TotalDays == 2)
                {
                    tempDolce.prezzo = dolce.prezzo - (dolce.prezzo * 80) / 100;
                }
                mappedDolcis.Add(tempDolce);
            });

            return mappedDolcis.ToList();
        }

        [HttpGet]
        [Route("{Id?}")]
        public ActionResult<Dolci> GetDolceById(Int32 Id)
        {
            if (Id==null)
            {
                return BadRequest();
            }
            var dolce = _db.Dolci.FirstOrDefault(x=> x.Id == Id);

            if (dolce == null)
            {
                return NotFound();
            }

            return dolce;
        }

        [HttpDelete]
        [Route("{Id?}")]
        public ActionResult<Boolean> RemoveDolce(Int32 Id)
        {
            if (Id == null)
            {
                return BadRequest();
            }
            var dolce = new Dolci { Id = Id };
            _db.Dolci.Attach(dolce);
            _db.Dolci.Remove(dolce);
            _db.SaveChanges();

            if (dolce == null)
            {
                return NotFound();
            }

            return true;
        }

        [HttpPost]
        public ActionResult<Dolci> AddDolce([FromBody] Dolci dolce)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
                
            _db.Dolci.Add(dolce);

            _db.SaveChanges();

            return dolce;

        }
    }
}
