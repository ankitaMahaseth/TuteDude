# Greenwood Library Landing Page

A modern, clean, and responsive library landing page built using **HTML5 and Tailwind CSS**. The Greenwood Library website provides visitors with information about library sections, reading spaces, membership plans, upcoming events, and contact details.

## 📌 Project Overview

The Greenwood Library Landing Page is designed to represent a neighborhood library that promotes reading, learning, and community engagement. It features a simple layout, soft background colors, rounded cards, interactive hover effects, and responsive grid layouts.

## ✨ Features

- **Responsive Navigation Bar** – Navigation links for Sections, Gallery, Membership, and Events.
- **Hero Section** – Library introduction with a call to action to explore the collection or join the library.
- **Library Statistics** – Displays the number of books, years of service, Wi-Fi availability, and library sections.
- **Library Sections** – Showcases fiction, children's books, science, history, periodicals, and digital media.
- **Library Gallery** – Displays reading halls, fiction collections, archive spaces, and the digital media lab.
- **Why Greenwood** – Highlights community, accessibility, digital resources, and the library's history.
- **About Section** – Introduces the library's mission and community values.
- **Membership Plans** – Presents Basic, Student, and Family membership options.
- **Testimonial Section** – Features feedback from a library volunteer.
- **Contact Section** – Displays the library address, opening hours, website, and phone number.
- **Upcoming Events** – Showcases reading challenges, book clubs, digital literacy workshops, and author meetings.
- **Footer** – Includes library details, navigation links, sections, and contact information.
- **Hover Effects** – Adds interactive transitions to links, cards, and images.
- **Responsive Layout** – Uses Tailwind CSS breakpoints to adapt layouts to different screen sizes.

## 🛠️ Technologies Used

- **HTML5** – Structures the webpage and its content.
- **Tailwind CSS v4 Browser CDN** – Provides utility-first styling, responsive layouts, spacing, colors, and hover effects.
- **CSS Transitions** – Creates smooth visual interactions using Tailwind utility classes.

## 📂 Project Structure

Keep the following files in the same project directory:

```text
Greenwood-Library/
│
├── index.html
├── README.md
│
├── library.jpg
├── library2.png
├── library3.jpg
├── digital_media_lab.jpg
│
├── basic_membership.jpg
├── student.jpg
└── avatar.jpg
```

**Note:** The image filenames above match the references in the HTML code. Make sure the image files exist in the project directory and that their extensions and capitalization match exactly.

## 🚀 Getting Started

### 1. Download or Clone the Project

Download the project files and save them in a folder named `Greenwood-Library`.

### 2. Check the Image Assets

Ensure that all the referenced images are available in the project folder. If your images are stored in a separate folder, update their paths in `index.html`.

### 3. Open the Project

Open the project folder in Visual Studio Code.

### 4. Run the Website

You can open `index.html` directly in your browser. For a better development experience, use the **Live Server** extension in Visual Studio Code:

1. Install Live Server.
2. Open `index.html`.
3. Right-click inside the editor.
4. Select **Open with Live Server**.

The website will open in your default browser.

### 5. Internet Connection

An internet connection is required to load Tailwind CSS from the CDN.

## 📱 Responsive Design

The website uses Tailwind CSS responsive utility classes to adjust its layout:

- **Mobile:** Single-column layouts for most content sections.
- **Small screens and tablets:** Two-column grids where appropriate.
- **Desktop:** Multi-column membership, event, and footer layouts.

Examples of responsive classes used:

```html
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
```

```html
<nav class="mx-auto flex h-16 items-center justify-between">
```

## ⚠️ Current Limitations

This project is currently a static frontend landing page.

- Membership buttons do not yet submit registration details.
- Book browsing links are placeholders.
- The gallery's View All link is not connected to a separate gallery page.
- Contact information and social media references are sample content.
- No backend, database, authentication, or payment gateway is implemented.

## 👩‍💻 Learning Outcomes

This project demonstrates practical experience with:

- Semantic HTML page structure.
- Tailwind CSS utility classes.
- Responsive CSS Grid and Flex box layouts.
- Reusable visual patterns using utility classes.
- Navigation using HTML anchor links.
- Hover states, transitions, and image styling.
- Organizing a multi-section landing page.


**Developed with ❤️ using HTML5 and Tailwind CSS by Ankita Mahaseth.**