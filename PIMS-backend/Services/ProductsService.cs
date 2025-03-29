using Microsoft.EntityFrameworkCore;
using PIMS_backend.Models;
using PIMS_backend.Tables;

namespace PIMS_backend.Services
{
    public class ProductsService
    {
        private readonly ProductsModel _productsModel;
        public ProductsService(ProductsModel productsModel)
        {
            _productsModel = productsModel;
        }
        public List<Product> GetProducts()
        { 
            return _productsModel.FetchProducts();
        }
        public Product CreateProduct(Product newProduct)
        {
            _productsModel.AddProduct(newProduct);      
            return newProduct;                  
        }
    }
}
