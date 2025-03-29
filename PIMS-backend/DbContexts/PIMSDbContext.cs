using Microsoft.EntityFrameworkCore;
using PIMS_backend.Tables;

namespace PIMS_backend.DbContexts
{
    public class ProductInventoryManagementDbContext : DbContext
    {
        // Define database tables
        public DbSet<Product> Products { get; set; }

        // Provide required database connection options
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=product_inventory_management;User Id=mitchell;Password=password;TrustServerCertificate=True;");
        }

        public ProductInventoryManagementDbContext(DbContextOptions<ProductInventoryManagementDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, ProductName = "RAM Stick", Price = 39.99m, Quantity = 74 },
                new Product { Id = 2, ProductName = "Graphics Card", Price = 247.99m, Quantity = 0 },
                new Product { Id = 3, ProductName = "Laptop", Price = 535m, Quantity = 2 },
                new Product { Id = 4, ProductName = "SSD", Price = 99.99m, Quantity = 19 }
            );
        }
    }
}
