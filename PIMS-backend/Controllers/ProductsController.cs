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
        public IActionResult CreateProduct([FromBody] Product newProduct)
        {
            var createdProduct = _productService.CreateProduct(newProduct);
            return CreatedAtAction(nameof(GetProducts), new { id = createdProduct.Id }, createdProduct);
        }
    }
}
