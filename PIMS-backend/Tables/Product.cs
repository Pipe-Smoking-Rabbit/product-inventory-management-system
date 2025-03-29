using System.ComponentModel.DataAnnotations;

namespace PIMS_backend.Tables
{
    
    public class Product
    {
        
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string ProductName { get; set; }

        
        public decimal Price { get; set; }

        public int Quantity { get; set; }
    }
}
