# Product Inventory Management System

## 📌 Overview

The **Product Inventory Management System** is a simple application designed to manage product inventory. It allows users to add, edit, and delete products while keeping track of their quantity and pricing.

## 🛠️ Technologies Used

- **Frontend:** Angular
- **Backend:** C# .NET (Web API)
- **Database:** SQL Server

## 🚀 Features

- Add, update, edit, and delete products
- Store product details including name, quantity, and price
- Responsive UI built with Angular
- API built with C# .NET
- SQL Server used for data persistence

## 🔧 Installation & Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/Pipe-Smoking-Rabbit/product-inventory-management-system.git
cd product-inventory-management-system
```

### **2. Backend Setup (C# .NET API)**

- Open the backend project in **Visual Studio 2022**
- Restore dependencies:
  ```sh
  dotnet restore
  ```
- Run the API:
  ```sh
  dotnet run
  ```
- Ensure SQL Server is running and update the connection string if needed.

### **3. Frontend Setup (Angular)**

- Navigate to the frontend folder:
  ```sh
  cd frontend
  ```
- Install dependencies:
  ```sh
  npm install
  ```
- Start the Angular development server:
  ```sh
  ng serve
  ```
- Open the application in your browser at [**http://localhost:4200**](http://localhost:4200)

## 🛠 Configuration

- Update the **connection string** in `appsettings.json` for SQL Server.