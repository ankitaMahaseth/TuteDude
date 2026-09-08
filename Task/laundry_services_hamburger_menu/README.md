# Responsive Navigation Menu for mobile (hamburger)

A simple responsive navigation bar built with **HTML and CSS**, featuring a desktop navigation menu and a hamburger-based mobile menu.

## 📌 Features

- Responsive navigation bar
- Desktop navigation links
- Hamburger menu for mobile devices
- Centered mobile menu
- Responsive hero section
- Responsive image sizing
- Mobile and tablet breakpoints
- Simple hover effects
- Responsive call-to-action buttons

## 🛠️ Technologies Used

- HTML5
- CSS3
- CSS Media Queries
- Flexbox
- CSS Positioning

## 📱 Responsive Breakpoints

The project uses two main responsive breakpoints:

### Mobile

```css
@media (max-width: 498px);
```

On mobile devices:

- Desktop navigation is hidden
- Hamburger button is displayed
- Mobile menu is displayed when activated
- Hero sections stack vertically
- Text is centered
- Image takes the full available width
- User button is hidden

### Tablet

```css
@media (min-width: 499px) and (max-width: 900px);
```

On tablet devices:

- Navigation remains visible
- Navigation spacing and font sizes are reduced
- Hero sections remain side-by-side
- Image width is adjusted
- Buttons are slightly smaller

## 📂 Project Structure

```text
responsive-navbar/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone or download the project

Download the project files to your computer.

### 2. Open the project

Open the project folder in your preferred code editor, such as VS Code.

### 3. Run the project

Open `index.html` in your browser.

For the best development experience, you can use the **Live Server** extension in VS Code.

## 🍔 Mobile Menu

The mobile menu is hidden by default and becomes available on smaller screens.

The menu can be centered using:

```css
.mobile_menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
}
```

The `left: 50%` moves the menu's starting point to the center, while:

```css
transform: translateX(-50%);
```

moves the menu back by half of its own width, resulting in horizontal centering.

## 🎨 Basic Mobile Menu CSS

```css
.mobile_menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  height: calc(100vh - 73px);
  background-color: #000;
  z-index: 1000;
}

.mobile_menu.active {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
```

## 🧹 CSS Improvements

A few improvements are recommended as the project grows:

- Prefer **Flexbox** or **CSS Grid** instead of relying heavily on `float`
- Avoid applying generic styles to every `ul` and `li`
- Use classes for navigation-specific styling
- Avoid duplicate CSS rules
- Use JavaScript/class toggling instead of `:focus` for persistent mobile-menu states
- Use `height: calc(100vh - navbar-height)` for full-height menus below a navbar
