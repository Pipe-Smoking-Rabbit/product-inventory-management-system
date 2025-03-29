using Microsoft.AspNetCore.Mvc;
using PIMS_backend.Services;
using PIMS_backend.Tables;

namespace PIMS_backend.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class ProductsController : ControllerBase
    {
        // Set up instance of ProductService as a dependency
        private readonly ProductsService _productService;
        public ProductsController(ProductsService productService)
        {
            _productService = productService;
        }

        // GET all Products
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _productService.GetProducts();
            return Ok(products);
        }

        // POST a new Product
        [HttpPost]
        public IActionResult PostProduct([FromBody] Product newProduct)
        {
            // Handle 400: Product cannot be null
            if (newProduct == null)
            {
                return BadRequest("Product data is required");
            }
            var createdProduct = _productService.CreateProduct(newProduct);
            return CreatedAtAction(nameof(GetProducts), new { id = createdProduct.Id }, createdProduct);
        }

        // PUT an existing product
        [HttpPut("{id}")]
        public IActionResult PutProduct(int id, [FromBody] Product newProduct)
        {
            // Handle 400: Product cannot be null
            if (newProduct == null)
            {
                return BadRequest("Product data is required");
            }

            var updatedProduct = _productService.UpdateProduct(id, newProduct);

            // Handle 404: Product doesn't exist
            if (updatedProduct == null)
            {
                return NotFound($"Product with ID {id} not found.");
            }

            return Ok(updatedProduct);
        }

        // DELETE an existing product
        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            var isProductRemoved = _productService.RemoveProduct(id);

            // Handle 404: Product doesn't exist
            if (!isProductRemoved)
            {
                return NotFound($"Product with ID {id} not found.");
            }

            return NoContent();
        }
    }
}
