using System.ComponentModel.DataAnnotations;

namespace PIMS_backend.Entities
{
    
    public class Product
    {
        
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public required string ProductName { get; set; }

        
        public decimal Price { get; set; }

        public int Quantity { get; set; }
    }
}
