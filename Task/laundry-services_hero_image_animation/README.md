# 🌐 CSS Laundry Services Adding Animation to The Hero Image

A simple and responsive hero-section design created using **HTML and CSS**.
The project demonstrates navigation styling, hero-section layout, buttons, and CSS animations for the hero image.

## ✨ Features

* Clean navigation bar
* Logo and navigation links
* User/Login button
* Two-column hero section
* Hero heading and description
* Call-to-action button
* Animated hero image
* Orbit-style image movement
* Image squeeze animation
* CSS-only animations
* No JavaScript required

## 🛠️ Technologies Used

* HTML5
* CSS3

## 📁 Project Structure

```text
project-folder/
│
├── index.html
├── style.css
└── README.md
```

## 🎨 CSS Features

### Navigation

The navigation uses `inline-block` and `vertical-align` to arrange the logo and navigation links.

```css
.logo {
    display: inline-block;
    vertical-align: middle;
}

nav {
    display: inline-block;
    vertical-align: middle;
}
```

### Hero Section

The hero section is divided into two parts:

* Left side — heading, paragraph, and button
* Right side — animated image

```css
.hero_section_1 {
    width: 50%;
    float: left;
}

.hero_section_2 {
    width: 50%;
    float: right;
}
```

## 🌀 Image Animation

The project uses CSS `@keyframes` to animate the hero image.

### Orbit Animation

The `orbit` animation moves the image horizontally.

```css
@keyframes orbit {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(80px, 0);
    }
}
```

### Squeeze Animation

The `squeeze` animation slightly compresses and stretches the image.

```css
@keyframes squeeze {
    0%, 100% {
        transform: scale(1);
    }

    25% {
        transform: scaleX(0.85) scaleY(1);
    }

    50% {
        transform: scale(1);
    }

    75% {
        transform: scaleX(0.85) scaleY(1.05);
    }
}
```

The image animation creates a small **squeeze/shaking effect** while the hero section is displayed.

## 🚀 How to Run

1. Clone or download the project.

2. Open the project folder.

3. Make sure `index.html` and `style.css` are in the same folder.

4. Open `index.html` in your browser.

For a better development experience, you can use **VS Code with the Live Server extension**.
