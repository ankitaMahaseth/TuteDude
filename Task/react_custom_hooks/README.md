# React Photo Gallery

A responsive React application that fetches posts from the JSONPlaceholder API and displays them in a grid layout. Each post is presented as a card with its title and a randomly generated background color.

The project demonstrates how to build a custom data-fetching hook using React Hooks, handle loading and error states, and create a responsive UI with Tailwind CSS utility classes.

## Features

- **Custom `useFetch` Hook:** Fetches data from an API using `useEffect` and `fetch`.
- **Loading State:** Displays a loading message while the API request is in progress.
- **Error Handling:** Shows an error message if the request fails or returns an unsuccessful HTTP status.
- **Responsive Grid Layout:** Displays post cards in one, two, or four columns depending on screen size.
- **Random Background Colors:** Generates 100 random colors when the component initializes.
- **Dynamic Content:** Displays post titles fetched from the API.
- **Reusable Logic:** Separates data-fetching logic from the main `App` component.

## Tech Stack

- [React](https://react.dev/)
- JavaScript (ES6+)
- CSS
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

## API Endpoint

The application fetches data from:

`https://jsonplaceholder.typicode.com/posts`

The API returns an array of posts containing properties such as `id`, `title`, and `body`. This application uses the `id` and `title` properties to render the cards.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <your-project-folder>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

**Note:** The commands above assume the project was created using Vite. If you use Create React App or another setup, follow the scripts defined in your `package.json`.

## Project Structure

```text
project/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

Your actual file structure may vary depending on your React setup.

## How It Works

### 1. Custom `useFetch` Hook

The `useFetch` hook accepts a URL and manages three pieces of state:

- `data`: Stores the response data.
- `loading`: Tracks whether the request is in progress.
- `error`: Stores an error message

### Author:

Ankita Mahaseth

MERN Developer
