# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 3 characters).
  - `lastname`: The user's last name (minimum 3 characters).
- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Notes
- Ensure that all required fields are provided in the request body.
- The password will be hashed before storing it in the database.

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: The user's email address (must be a valid email).
- `password`: The user's password (minimum 6 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

### Notes
- Ensure that all required fields are provided in the request body.
- The password will be compared with the hashed password stored in the database.

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint retrieves the profile information of the currently authenticated user.

### Authentication
Requires a valid JWT token in the Authorization header or cookie.

### Request
No request body required.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the user details.

Example:
```json
{
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Authentication required"
}
```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint logs out the current user by invalidating their JWT token and clearing the cookie.

### Authentication
Requires a valid JWT token in the Authorization header or cookie.

### Request
No request body required.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "Logout successfully"
}
```

#### Authentication Error
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Authentication required"
}
```

### Notes
- The token is added to a blacklist to prevent reuse.
- Both cookie and Authorization header tokens are handled.

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It requires personal information and vehicle details.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: The captain's first name (minimum 3 characters)
  - `lastname`: The captain's last name (minimum 3 characters)
- `email`: The captain's email address (must be a valid email)
- `password`: The captain's password (minimum 6 characters)
- `vehicle`: An object containing:
  - `color`: The vehicle's color (minimum 3 characters)
  - `plate`: The vehicle's license plate number (minimum 3 characters)
  - `capacity`: The vehicle's passenger capacity (minimum 1)
  - `vehicleType`: The type of vehicle (must be 'car', 'motorcycle', or 'auto')

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Response Body**: A JSON object containing the captain details and authentication token.

Example:
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "firstname must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Notes
- All fields are required
- The password will be hashed before storing it in the database
- Vehicle type must be one of: car, motorcycle, or auto
- Vehicle capacity must be a positive integer
