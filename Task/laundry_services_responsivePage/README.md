# 🧺 Laundry Services Responsive Website

A simple and responsive **Laundry Services landing page** created using **HTML5 and CSS3**.

This project focuses on practicing CSS layout techniques such as `inline-block`, `float`, media queries, responsive images, spacing, and typography.

## 📌 Project Overview

The webpage represents a laundry service website with:

- Logo
- Navigation menu
- Username button
- Hero section
- Laundry service heading
- Description
- "Book a service today!" button
- Laundry service image
- Responsive layouts for desktop, tablet, and mobile devices

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**

### CSS Concepts Used

- CSS Reset
- `box-sizing`
- `display: inline-block`
- `vertical-align`
- `float`
- `clear`
- Media Queries
- Responsive Images
- Typography
- Hover Effects
- Margins and Padding

## 📂 Project Structure

```text
Laundry-Services/
│
├── index.html
├── style.css
│
└── images/
    └── laundry_img.jpg
```

## 💻 Desktop Layout

On desktop devices, the hero section is divided into two columns:

```text
--------------------------------------------------
| Logo     Home Services About Contact   User   |
--------------------------------------------------
|                                                |
|  Revitalize Your             Laundry Image    |
|  Clothes With Expert                          |
|  Laundry Services!                            |
|                                                |
|  Description                                   |
|  [ Book a service today! ]                     |
|                                                |
--------------------------------------------------
```

## 📱 Tablet Layout

The website supports tablet devices between approximately **499px and 900px**.

The hero section remains divided into two columns, while font sizes, navigation spacing, buttons, and image sizes are reduced to fit smaller screens.

## 📱 Mobile Layout

For screens **498px and below**:

- Navigation menu is hidden
- Hero columns become full width
- Image moves below the content
- Text is centered
- Font sizes are reduced
- Buttons are resized
- Layout becomes mobile-friendly

## 📐 Responsive Breakpoints

| Device       |    Screen Width | Layout             |
| ------------ | --------------: | ------------------ |
| Desktop      |       `> 900px` | Two-column hero    |
| Tablet       | `499px - 900px` | Two-column hero    |
| Small Tablet | `499px - 600px` | Navigation hidden  |
| Mobile       |       `≤ 498px` | Single-column hero |

## 🎨 Features

### Navigation

The navigation contains:

- Home
- Services
- About Us
- Contact Us

A username button is displayed on the right side.

### Hero Section

The hero section contains a promotional heading:

> Revitalize Your Clothes With Expert Laundry Services!

It also includes a description and a call-to-action button.

### Responsive Image

The laundry image automatically adjusts its width according to the device size.

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Open the project

Navigate to the project folder:

```bash
cd Laundry-Services
```

### 3. Run the project

Open `index.html` directly in your browser.

You can also use **VS Code Live Server** to run the project.
