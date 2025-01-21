# BD4 Assignment: `Gaming Community Platform` Backend

## API Endpoints

- **Entry Point**: `src/index.js`
  - `index.js` → `routes` → `controller` → `services`

## Directory Structure

- **`src`**: Root directory containing all the code.

  - **`config`**: Contains configuration-related code such as database connections, accessing environment variables, etc.
  - **`controllers`**: Acts as the final middleware. Extracts data from the request body, passes it to the service layer, and sends the response back to the client.
  - **`routes`**: Modular routes for specific functionalities. For example:
    - `cart.route.js` for cart-related routes.
    - `products.route.js` for product-related routes.
  - **`data`**: Contains dummy data used in the project, stored in JSON files or JavaScript objects.
  - **`database`**: This is used to store sqlite database in file
  - **`repositories`**: All the database queries and logic resides in repos.
  - **`services`**: Contains business logic. Responsible for processing data and returning the final response to the controller.
  - **`utils`**: Contains utility functions that are commonly used throughout the project.

- **`.gitignore`**: Specifies intentionally untracked files or directories to ignore in the repository.
- **`vercel.json`**: Configuration file for deploying the project on Vercel.
- **`package.json`**: Contains metadata about the project, including dependencies, scripts, and project information.
- **`.env`**: Environment variables file, typically used for sensitive or environment-specific configurations.
- **`package-lock.json`**: Automatically generated file that locks the dependencies' versions for consistency across environments.
