# Student Management REST API

A simple REST API for managing student records built with Node.js and Express.js for Web Development III Lab Assignment.

## Project Structure

```
student-management-api/
├── app.js              # Main server entry point
├── routes/
│   └── studentRoutes.js # Student CRUD route handlers
├── middleware/
│   └── logger.js       # Custom request logger middleware
├── data/
│   └── students.js     # In-memory student data store (array)
├── package.json
└── package-lock.json
```

## Features

- **Express.js** server running on port 3000
- **5 RESTful endpoints** for Student CRUD operations
- **Custom logger middleware** for request logging
- **Modular routing** using Express Router
- **In-memory data storage** using JavaScript array
- **Proper error handling** with standard HTTP status codes

## API Endpoints

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| GET | `/students` | Get all students | 200 |
| GET | `/students/:id` | Get student by ID | 200, 404 |
| POST | `/students` | Create new student | 201, 400 |
| PUT | `/students/:id` | Update student by ID | 200, 404, 400 |
| DELETE | `/students/:id` | Delete student by ID | 200, 404 |

## Student Data Format

```json
{
  "id": 1,
  "name": "John Doe",
  "age": 20,
  "grade": "A"
}
```

## Installation & Setup

```bash
# Navigate to project directory
cd student-management-api

# Install dependencies
npm install

# Start server
node app.js
```

Server will run at: `http://localhost:3000`

## Testing with Postman

1. **GET All Students**: `GET http://localhost:3000/students`
2. **GET Single Student**: `GET http://localhost:3000/students/1`
3. **Create Student**: `POST http://localhost:3000/students`
   - Body (JSON): `{"name": "Alice", "age": 21, "grade": "A"}`
4. **Update Student**: `PUT http://localhost:3000/students/1`
   - Body (JSON): `{"name": "Alice Updated", "age": 22, "grade": "A+"}`
5. **Delete Student**: `DELETE http://localhost:3000/students/1`

## Error Responses

- **400 Bad Request**: Missing required fields (name, age, grade)
- **404 Not Found**: Student with given ID doesn't exist

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)
- No database - uses in-memory array

## License

ISC