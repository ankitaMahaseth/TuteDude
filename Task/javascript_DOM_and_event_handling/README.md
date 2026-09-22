# JavaScript DOM and Event Handling

A simple beginner-friendly JavaScript project that demonstrates how to work with the **DOM (Document Object Model)** and handle user interactions using JavaScript events.

The project allows users to:

- Enter their name and display a personalized greeting.
- Click different color boxes.
- Change the background and text color of each box.
- Practice JavaScript DOM manipulation.
- Practice event handling using `addEventListener()`.

---

## 📌 Project Preview

The page contains three main parts:

### 1. Greeting Section

A heading displays:

```text
Hello
```

When the user enters their name and clicks the **Greet** button, the name is displayed after "Hello".

For example:

```text
Hello Ankita
```

### 2. Color Boxes

There are four clickable boxes:

- Red
- Blue
- Green
- Yellow

When a box is clicked, its background color changes to the corresponding color and the text color changes to white.

### 3. Name Input Form

The form contains:

- Name input field
- Greet button

The form submission is handled using JavaScript without refreshing the page.

---

## 📂 Project Structure

```text
Javascript-DOM-Event-Handling/
│
├── index.html
├── style.css
└── script.js
```

### Files

| File         | Description                                        |
| ------------ | -------------------------------------------------- |
| `index.html` | Contains the HTML structure of the webpage         |
| `style.css`  | Contains the styling of the webpage                |
| `script.js`  | Contains DOM manipulation and event-handling logic |

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- JavaScript Events

No external libraries or frameworks are required.

---

## 🎯 Features

### Personalized Greeting

The user enters their name:

```text
Enter Your Name..
```

After clicking **Greet**, JavaScript gets the value from the input field and displays it in the heading.

Example:

```text
Hello Ankita
```

---

### Interactive Color Boxes

Each color box responds to a click event.

For example:

```js
redColorBox.addEventListener("click", function () {
  redColorBox.style.backgroundColor = "red";
  redColorBox.style.color = "white";
});
```

When the red box is clicked:

```text
Background → Red
Text → White
```

---

## 🚀 How to Run the Project

### Step 1: Download or Clone the Project

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Or download the project as a ZIP file.

### Step 2: Open the Project

Open the project folder in **VS Code**.

### Step 3: Open `index.html`

You can open the HTML file using:

- Live Server extension in VS Code
- Or directly open it in your browser

**Recommended:** Use VS Code's **Live Server** extension while developing.

### Step 4: Test the Application

Enter your name:

```text
Ankita
```

Click:

```text
Greet
```

You should see:

```text
Hello Ankita
```

Then click the color boxes to see their colors change.

---
