using PIMS_backend.Models;
using PIMS_backend.Tables;

namespace PIMS_backend.Services
{
    public class ProductsService
    {
        private readonly ProductsModel _productModel;
        public ProductsService(ProductsModel productModel)
        {
            _productModel = productModel;
        }
        public List<Product> GetProducts()
        { 
            return _productModel.FetchProducts();
        }
    }
}
