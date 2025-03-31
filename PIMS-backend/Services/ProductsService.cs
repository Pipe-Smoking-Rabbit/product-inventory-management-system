using PIMS_backend.Entities;


namespace PIMS_backend
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
        public Product? UpdateProduct(int id, Product newProduct)
        {
            var updatedProduct = _productsModel.UpdateProduct(id, newProduct);
            return updatedProduct;
        }
        public bool RemoveProduct(int id)
        {
            var isProductRemoved = _productsModel.RemoveProduct(id);
            return isProductRemoved;
        }
    }
}
