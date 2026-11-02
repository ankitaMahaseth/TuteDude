# Node.js HTTP Server with Routing – Laundry Website

A simple web server built using **Core Node.js Modules** without Express.js. This project demonstrates how to create an HTTP server, handle multiple routes, serve HTML pages and static files, and manage HTTP status codes.

## 🚀 Features

- **HTTP Server:** Creates a server using Node.js built-in `http` module.
- **Multiple Routes:** Handles Home, About, and Contact pages.
- **Static File Serving:** Serves images using the `fs` module.
- **File System Operations:** Reads HTML and image files asynchronously.
- **GET Request Handling:** Allows only GET requests.
- **Error Handling:** Handles 404 (Not Found) responses.
- **ES Modules:** Uses modern JavaScript import syntax.

## 🛠️ Technologies Used

- Node.js
- JavaScript (ES6+)
- HTML5
- Core Node.js Modules:
  - `http`
  - `fs`
  - `path`
  - `url`

## 📁 Project Structure

```text
Laundry-Website/
│
├── images/
│   └── laundry_img.jpg
│
├── pages/
│   ├── home.html
│   ├── about.html
│   ├── contact.html
│   └── 404.html
│
├── server.js
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the Project Folder

```bash
cd Laundry-Website
```

### 3. Install Node.js

Make sure Node.js is installed on your system.

Check the installed versions:

```bash
node -v
npm -v
```

### 4. Configure ES Modules

Add the following configuration to your `package.json`:

```json
{
  "type": "module",
  "scripts": {
    "start": "node server.js"
  }
}
```

### 5. Start the Server

```bash
npm start
```

Alternatively:

```bash
node server.js
```

### 6. Open in Browser

Visit:

```text
http://localhost:3000/
```

## 🌐 Available Routes

| Route | Description |
|---|---|
| `/` | Displays the Home page |
| `/about` | Displays the About page |
| `/contact` | Displays the Contact page |
| `/images/laundry_img.jpg` | Displays the laundry image |
| Any invalid route | Displays the 404 page |

## 📚 Node.js Concepts Covered

### 1. HTTP Module

Used to create an HTTP server and handle incoming client requests.

```javascript
import http from "node:http";

const app = http.createServer((req, res) => {
  // Handle requests
});
```

### 2. File System Module

Used to read HTML and image files from the file system.

```javascript
import fs from "node:fs";

const data = await fs.promises.readFile(filePath);
```

### 3. Path Module

Used to construct platform-independent file paths.

```javascript
import path from "node:path";
```

### 4. URL Module

Used to get the current file path and directory in an ES module.

```javascript
import { fileURLToPath } from "node:url";
```

### 5. HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | OK – Request successful |
| 404 | Not Found – Requested resource does not exist |
| 405 | Method Not Allowed – Unsupported HTTP method |
| 500 | Internal Server Error – Server-side error |

## 🎯 Learning Objectives

By completing this project, you will understand:

- How to create a server using Core Node.js.
- How HTTP requests and responses work.
- How to implement basic routing without Express.js.
- How to serve HTML pages dynamically based on URL paths.
- How to serve static assets such as images.
- How to use asynchronous file reading.
- How to handle errors and HTTP status codes.
- How ES Modules work in Node.js.

## 🔮 Future Improvements

- Add CSS and JavaScript static file handling.
- Implement POST, PUT, and DELETE methods.
- Add dynamic routing.
- Create a reusable route handler.
- Implement form submission.
- Add a contact form with backend functionality.

## 👩‍💻 Author

**Ankita Mahaseth**

MERN Stack Developer | React.js | Node.js | Express.js | MongoDB

---