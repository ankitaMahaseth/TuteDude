# CSS Units, Box Model & Font

A simple HTML and CSS practice project created to understand and experiment with fundamental CSS concepts such as **CSS units, box sizing, box model, responsive images, margins, and layout**.

## Project Overview

This project contains a simple webpage with:

* A nature image
* A button
* Responsive image sizing
* CSS box-sizing
* Section width and alignment
* Gradient background

The main purpose of this project is to understand how different CSS properties affect the size, position, and responsiveness of webpage elements.

## Technologies Used

* HTML5
* CSS3

##  Project Structure

```text
project-folder/
│
├── index.html
├── style.css
└── README.md
```

## HTML Structure

The webpage contains a `<section>` with:

1. A `<div>` containing a nature image
2. A button

```html
<section>
    <div class="nature_img">
        <img
            src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80"
            alt="nature image"
        >
    </div>

    <button>Click Me</button>
</section>
```

## 🎨 CSS Concepts Covered

### 1. `box-sizing`

The project uses:

```css
* {
    box-sizing: border-box;
}
```

This makes the declared width and height include the element's padding and border.

---

### 2. Responsive Image

The image uses:

```css
img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
}
```

This allows the image to remain responsive and prevents it from becoming wider than its container.

### 3. Section Width

The section uses:

```css
section {
    width: 50%;
}
```

This makes the section occupy 50% of the available width.

### 4. CSS Grid Alignment

The body can use:

```css
body {
    display: grid;
    place-items: center;
}
```

This centers the section horizontally and vertically without using `position: absolute`.

### 5. Gradient Button

The button uses a CSS linear gradient:

```css
button {
    background: linear-gradient(90deg, green, yellow);
}
```

### 6. Button Width

```css
button {
    width: 100%;
}
```

The button occupies the full width of its parent section.

## 📱 Responsive Design

The image uses:

```css
max-width: 100%;
```

and:

```css
height: auto;
```

This helps prevent horizontal overflow when the viewport becomes smaller.

## Avoiding Overflow

One of the main concepts explored in this project is preventing unnecessary scrolling.

Instead of using:

```css
overflow: hidden;
```

the layout uses appropriate sizing:

```css
* {
    box-sizing: border-box;
}

img {
    max-width: 100%;
    height: auto;
}
```

The section width can also be made responsive:

```css
section {
    width: min(90%, 600px);
}
```

This prevents the content from becoming unnecessarily wide on large screens while remaining usable on smaller devices.

##  How to Run

No installation or dependencies are required.

### Step 1

Clone or download the project.

### Step 2

Open the project folder.

### Step 3

Open:

```text
index.html
```

in your browser.

You can also use **Live Server** in VS Code or another code editor for easier development.

##  Author

**Ankita**

---

⭐ This project is part of my CSS learning and practice journey.
