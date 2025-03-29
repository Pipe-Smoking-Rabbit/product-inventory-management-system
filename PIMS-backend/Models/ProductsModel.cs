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
    }
}
