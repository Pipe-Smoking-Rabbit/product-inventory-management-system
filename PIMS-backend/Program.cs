using Microsoft.EntityFrameworkCore;
using PIMS_backend.Services;
using PIMS_backend.Models;
using PIMS_backend.DbContexts;

var builder = WebApplication.CreateBuilder(args);

// Add Controller layer
builder.Services.AddControllers();
builder.Services.AddScoped<ProductsService>();
builder.Services.AddScoped<ProductsModel>();


// Get the connection string from appsettings.json
string connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Add database context, configured to use SQL Server
builder.Services.AddDbContext<ProductInventoryManagementDbContext>(options => options.UseSqlServer(connectionString));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    _ = endpoints.MapControllers();
});

app.Run();
