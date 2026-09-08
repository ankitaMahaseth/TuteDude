# 🧺 Laundry Services Landing Page with Interactive Button

A simple and clean **Laundry Services landing page** built using **HTML and CSS**.
The project demonstrates basic webpage structure, navigation styling, layout techniques, buttons, and CSS hover transforms.

## 📌 Project Overview

This project is a frontend practice project for creating a laundry service website hero section.

The page includes:

- A navigation bar
- Logo section
- Navigation links
- Username button
- Hero section with heading and description
- Call-to-action **"Book a service today!"** button
- Laundry-related hero image
- Interactive CSS hover effect on the booking button

## 🛠️ Technologies Used

- **HTML5** – For the structure and content of the webpage
- **CSS3** – For styling, layout, and interactive effects

## 📂 Project Structure

```text
laundry-services/
│
├── index.html
├── style.css
│
└── images/
    └── laundry_img.jpg
```

## 🚀 Getting Started

### 1. Clone or Download the Project

Download the project files or clone the repository to your local machine.

### 2. Open the Project

Open the project folder in your preferred code editor, such as VS Code.

### 3. Run the Website

Open `index.html` in a web browser.

You can also use the **Live Server** extension in VS Code for a better development experience.

## 🎨 Features

### Navigation Bar

The navigation bar contains:

- Logo
- Home
- Services
- About Us
- Contact Us
- Username button

### Hero Section

The main section contains a heading promoting professional laundry services, supporting text, a call-to-action button, and a laundry image.

### Interactive Button

The **Book a service today!** button has a CSS hover animation.

When the user hovers over the button, it:

- Rotates slightly
- Scales up
- Applies a transition effect

The effect is created using:

```css
.book_btn:hover {
  transition: 0.8s;
  transform: rotate(-5deg) scale(1.2);
}
```

## 💡 CSS Concepts Demonstrated

This project is useful for practicing several fundamental CSS concepts:

- CSS reset
- Margins and padding
- Inline and inline-block elements
- Floating elements
- Typography
- Colors
- Button styling
- Hover states
- CSS transitions
- CSS transforms
- Image sizing
- Basic two-column layout

## 🖥️ Preview

The page is designed as a simple laundry-service hero landing page with the following general layout:

```text
┌─────────────────────────────────────────────────────────┐
│ Logo        Home  Services  About Us  Contact     User │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Revitalize Your Clothes       ┌───────────────────┐   │
│  With Expert                   │                   │   │
│  Laundry Services !            │   Laundry Image   │   │
│                                │                   │   │
│  Description text              └───────────────────┘   │
│                                                         │
│  [ Book a service today! ]                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```
