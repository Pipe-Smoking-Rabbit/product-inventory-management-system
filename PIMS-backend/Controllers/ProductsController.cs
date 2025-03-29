using Microsoft.AspNetCore.Mvc;
using PIMS_backend.Services;

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

        // Creating an action Method
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _productService.GetProducts();
            return Ok(products);
        }
    }
}
