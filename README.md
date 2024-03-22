# Login/Signup Application

This repository contains the code for a Login/Signup application built using the MEN (MongoDB, Express.js, Node.js) stack.

## Technologies Used

- **MongoDB**: MongoDB is used as the database to store user information.
- **Express.js**: Express.js is used to handle routing and middleware for the server-side application.
- **Node.js**: Node.js is used as the server-side JavaScript runtime environment.
- **JSON Web Tokens (JWT)**: JWT is used for user authentication and authorization.
- **bcrypt**: bcrypt is used for password hashing.
- **dotenv**: dotenv is used for loading environment variables from a .env file.
- **morgan**: morgan is used as an HTTP request logger middleware for Node.js.
- **nodemon**: nodemon is used as a utility that monitors for changes in the code and automatically restarts the server.

## Folder Structure

- **models**: Contains MongoDB schema models for user data.
- **controllers**: Contains controller functions for handling user registration, login, and other authentication-related operations.
- **routes**: Contains Express.js router definitions for different API endpoints.
- **helpers**: Contains helper functions such as password hashing and JWT token generation.
- **config**: Contains configuration files, such as database connection setup.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/meerquais/Node-Login-Signup.git

   
2. Install dependencies:

   ```bash
    cd login-signup
    npm install

3. Set up environment variables:

  Create a .env file in the root directory and define the following variables:

    
       
        PORT=8080
        MONGODB_URI=mongodb://localhost:27017/login-signup
        JWT_SECRET=your_jwt_secret_key

4. Run the development server:


       ```bash
       npm start



## Usage
   
 - Register a new user: Send a POST request to /api/v1/auth/register with name, email, password, phone, and address in the request body.
 - User login: Send a POST request to /api/v1/auth/login with email and password in the request body. Upon successful login, a JWT token will be returned in the response.
 - Access protected routes: Include the JWT token in the Authorization header of subsequent requests to access protected routes.


## Contributing

  Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or bug fixes.




