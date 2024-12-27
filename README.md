# Node.js + TypeScript Project with MongoDB

This project is a backend application built with **Node.js** and **TypeScript**. It connects to a **MongoDB** database for product management, supporting **CRUD operations** (Create, Read, Update, Delete) with optional filtering for listing products.

## Project Details

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript**: A superset of JavaScript that adds static types, making it easier to manage large codebases.
- **MongoDB**: A NoSQL database for storing product data.
- **Mongoose**: ODM (Object Document Mapping) library for MongoDB and Node.js.

## Packages Used

### Backend Dependencies

- **express**: Web framework for Node.js for creating the API.
- **mongoose**: ODM for MongoDB, used to interact with the MongoDB database.
- **dotenv**: Loads environment variables from a `.env` file to configure the app, such as MongoDB connection strings.
- **typescript**: For static type checking and compiling TypeScript to JavaScript.
- **@types/express**: TypeScript type definitions for Express.js.
- **@types/node**: TypeScript type definitions for Node.js.
- **ts-node**: TypeScript execution environment to run TypeScript files directly.

### Development Dependencies

- **nodemon**: A tool for automatically restarting the server during development when file changes are detected.
- **@types/nodemon**: TypeScript types for nodemon.

## MongoDB Configuration

This project uses **MongoDB** for database storage. You can either run a local MongoDB server or use a cloud service like **MongoDB Atlas**.

### Setting Up MongoDB

1. **Local MongoDB**: If you're using a local instance, ensure MongoDB is installed and running. By default, it runs on `mongodb://localhost:27017`.

2. **MongoDB Atlas**: If you're using MongoDB Atlas, you can create a free cluster and get a connection URL. The URL will look like:
   `mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdbname?retryWrites=true&w=majority`

### `.env` File Configuration

In the root directory of your project, create a `.env` file to store sensitive data, such as the MongoDB connection string.

```env
MONGO_URL=mongodb://localhost:27017/yourdbname  # Local MongoDB connection
# or
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdbname  # MongoDB Atlas connection
```