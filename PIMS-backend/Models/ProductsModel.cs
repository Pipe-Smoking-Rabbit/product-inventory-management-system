using PIMS_backend.Entities;

namespace PIMS_backend
{
    public class ProductsModel
    {
        private readonly ProductInventoryManagementDbContext _db;
        public ProductsModel(ProductInventoryManagementDbContext db)
        {
            _db = db;
        }
        public List<Product> FetchProducts()
        {
            return _db.Products.ToList();
        }
        public void AddProduct(Product newProduct)
        {
            _db.Products.Add(newProduct);  
            _db.SaveChanges();                            
        }
        public Product? UpdateProduct(int id, Product newProduct)
        {
            var existingProduct = _db.Products.Find(id);
            if (existingProduct != null)
            {
                existingProduct.ProductName = newProduct.ProductName;
                existingProduct.Price = newProduct.Price;
                existingProduct.Quantity = newProduct.Quantity;
            }
            _db.SaveChanges();
            return existingProduct;
        }
        public bool RemoveProduct(int id)
        {
            var product = _db.Products.Find(id);

            // return false if no product found 
            if (product == null)
            {
                return false;
            }

            // remove product and return true
            _db.Products.Remove(product);
            _db.SaveChanges();
            return true;
        }
    }
}
