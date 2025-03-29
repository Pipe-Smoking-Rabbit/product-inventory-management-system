using PIMS_backend.DbContexts;
using PIMS_backend.Tables;

namespace PIMS_backend.Models
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
    }
}
