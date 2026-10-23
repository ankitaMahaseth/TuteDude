# React Router DOM

A modern React application demonstrating client-side navigation using **React** and **react-router-dom**. The application consists of four main pages — Home, Dashboard, Login, and Sign up — with a clean, responsive layout and a visually appealing theme.

## 🚀 Project Overview

The goal of this project is to implement navigation between multiple views in a React application using React Router. Users can navigate between different sections without reloading the entire page.

The UI design, layout, and color theme are open to creativity, allowing the application to deliver a smooth and user-friendly experience.

## ✨ Features

- **Home Page:** A welcoming landing page with an introduction to the application and navigation options.
- **Dashboard Page:** A dedicated section for displaying an overview, statistics, or other relevant information.
- **Login Page:** A user-friendly login form with email and password fields.
- **Sign up Page:** A registration form for new users.
- **Client-Side Routing:** Seamless navigation between pages using `react-router-dom`.
- **Responsive Design:** A layout that adapts to different screen sizes.
- **Consistent UI:** A unified theme, reusable components, and intuitive navigation.

## 🛠️ Tech Stack

- **React** — Frontend UI library
- **React Router DOM** — Client-side routing and navigation
- **JavaScript** — Application logic
- **HTML5** — Page structure
- **CSS3** — Styling, layout, and responsive design
- **Vite or Create React App** — Development setup, depending on the project configuration

## 📍 Application Routes

| Route        | Component | Description                         |
| ------------ | --------- | ----------------------------------- |
| `/`          | Home      | Landing page and introduction       |
| `/dashboard` | Dashboard | Overview of application information |
| `/login`     | Login     | User login form                     |
| `/sign up`   | Sign up   | New user registration form          |

## 📦 Installation and Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install React Router DOM

```bash
npm install react-router-dom
```

### 5. Start the development server

For a Vite-based project:

```bash
npm run dev
```

For a Create React App project:

```bash
npm start
```

Open the local URL displayed in your terminal to view the application.

## 🧭 Routing Implementation

The application uses `BrowserRouter`, `Routes`, and `Route` from `react-router-dom` to define the available pages.

Example:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

Use the `Link` or `NavLink` component to navigate between pages without a full browser reload.

Example:

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </nav>
  );
}

export default Navbar;
```

_Note: Update the import paths to match your project's folder structure._

## 📁 Suggested Project Structure

```text
src/
├── hoc/
│   └── Layout.jsx
├── components/
│   ├── Home/Home.jsx
│   ├── Dashboard/Dashboard.jsx
│   ├── Login/Login.jsx
│   └── Signup/Signup.jsx
├── App.jsx
├── main.jsx
├── index.jsx
└── index.css
```

The structure can be adjusted to suit your preferred component organization and styling approach.

## ✅ Author

Ankita Mahaseth
MERN Developer
