# CSS Selector Practice

This project is a simple HTML page created to practice and demonstrate different **CSS selectors and styling methods**.

## 📁 Project Structure

```text
project/
│
├── index.html
├── style.css
└── README.md
```

## 📝 Description

The HTML page demonstrates different ways of applying CSS:

- **Class selector** using `.head`
- **ID selector** using `#bglime` and `#para`
- **Inline CSS** using the `style` attribute
- Styling HTML elements without classes or IDs
- Styling `<span>` elements with inline CSS
- Styling links (`<a>`)
- Styling list items (`<li>`)
- Using the `<mark>` element

## 🎯 CSS Concepts Demonstrated

### 1. Class Selector

Multiple heading elements use the `head` class:

```html
<h1 class="head">...</h1>
<h2 class="head">...</h2>
<h4 class="head">...</h4>
```

The class selector can be targeted in CSS using:

```css
.head {
  /* styles */
}
```

### 2. ID Selector

The `<h2>` element has the ID `bglime`:

```html
<h2 class="head" id="bglime">...</h2>
```

The paragraph has the ID `para`:

```html
<p id="para">...</p>
```

They can be styled using:

```css
#bglime {
  /* styles */
}

#para {
  /* styles */
}
```

### 3. Inline CSS

CSS can be applied directly to an HTML element using the `style` attribute:

```html
<p style="color:white">...</p>
```

Another example:

```html
<span style="color:black; font-size: larger;">paragraph</span>
```

### 4. Styling HTML Elements

Elements can also be selected directly by their tag name.

For example:

```css
li {
  /* styles */
}
```

This can be used to style all `<li>` elements.

## 🔗 Links

The page contains examples of anchor tags:

```html
<mark>
  <a href="https://www.tutedude.com">here</a>
</mark>
```

:

```html
<a href="https://www.google.com">here</a>
```

## 📋 Lists

The project also demonstrates both unordered and ordered lists.

### Unordered List

```html
<ul>
  <li>...</li>
  <li>...</li>
</ul>
```

### Ordered List

```html
<ol>
  <li>...</li>
  <li>...</li>
</ol>
```

## 🚀 How to Run

1. Download or clone the project.
2. Make sure `index.html` and `style.css` are in the same folder.
3. Open `index.html` in any web browser.
4. Modify `style.css` to experiment with different CSS selectors and properties.

## 📚 Learning Objective

The main purpose of this project is to understand the basics of **CSS selectors**, including:

- Class selectors
- ID selectors
- Element selectors
- Inline CSS
- External CSS
- Nested Selector
- Universal Selector
- Direct Child Selector
