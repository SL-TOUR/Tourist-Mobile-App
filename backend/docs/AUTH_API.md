
# Authentication API

Base URL:

http://localhost:4000/api/v1

## Supported account roles

- TOURIST
- GUIDE
- VRSP

Admin registration is not publicly supported.

## 1. Register

POST /auth/register

### Tourist request

{
  "role": "TOURIST",
  "fullName": "John Smith",
  "email": "john@example.com",
  "password": "Password123",
  "phone": "0771234567"
}

### Guide request

{
  "role": "GUIDE",
  "fullName": "Guide Name",
  "email": "guide@example.com",
  "password": "Password123",
  "phone": "0771234567"
}

### VRSP request

{
  "role": "VRSP",
  "businessName": "ABC Vehicle Rentals",
  "email": "business@example.com",
  "password": "Password123",
  "phone": "0771234567"
}

### Success response

HTTP 201

{
  "success": true,
  "message": "Account registered successfully.",
  "data": {
    "user": {
      "id": "generated-account-id",
      "email": "john@example.com",
      "role": "TOURIST"
    },
    "accessToken": "jwt-token"
  }
}

## 2. Login

POST /auth/login

### Request

{
  "role": "TOURIST",
  "email": "john@example.com",
  "password": "Password123"
}

### Success response

HTTP 200

{
  "success": true,
  "message": "Login successful.",
  "data": {
    "user": {
      "id": "generated-account-id",
      "email": "john@example.com",
      "role": "TOURIST"
    },
    "accessToken": "jwt-token"
  }
}

## 3. Get authenticated account

GET /auth/me

### Headers

Authorization: Bearer YOUR_JWT_TOKEN

### Success response

HTTP 200

{
  "success": true,
  "message": "Account retrieved successfully.",
  "data": {
    "user": {
      "id": "generated-account-id",
      "role": "TOURIST",
      "fullName": "John Smith",
      "email": "john@example.com",
      "phone": "0771234567",
      "profilePicture": null,
      "createdAt": "2026-11-11T00:00:00.000Z"
    }
  }
}

The returned profile fields depend on the account role.

## HTTP status codes

| Status | Meaning |
|--------|---------|
| 200 | Request successful |
| 201 | Account created |
| 400 | Invalid request |
| 401 | Missing or invalid authentication |
| 403 | Insufficient permissions |
| 409 | Email already registered |
| 500 | Internal server error |

## Security

- Passwords are hashed using bcrypt.
- JWT access tokens are used for authentication.
- Password hashes are never returned.
- Registration is available for three account roles.
- Admin registration is not exposed.
- Tokens must be sent using the Bearer authorization scheme.
