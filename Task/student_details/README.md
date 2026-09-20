# Student Cards & Search (Map Filter Exercise)

A simple **JavaScript student card project** that displays student information dynamically and allows users to search students by the **starting letters of their name**.

The search is performed **only after clicking the Search button**.

## 📌 Project Overview

This project demonstrates how to use JavaScript array methods such as:

- `map()`
- `filter()`
- `startsWith()`
- `join()`

It also demonstrates:

- DOM manipulation
- Dynamic HTML generation
- Form submission handling
- Search functionality
- Template literals
- `event.preventDefault()`

## ✨ Features

- Display 20 student records as cards
- Show student name, marks, class, and address
- Search students by the beginning of their name
- Search works only after clicking the **Search** button
- Case-insensitive search
- Responsive card layout
- Dynamically generated cards using JavaScript

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## 📂 Project Structure

```text
student-card-search/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 📊 Student Data

Each student object contains four properties:

```js
{
    name: "Aarav Sharma",
    marks: 85,
    class: "10th",
    address: "Bangalore, Karnataka"
}
```

The properties are:

| Property  | Description        |
| --------- | ------------------ |
| `name`    | Student's name     |
| `marks`   | Student's marks    |
| `class`   | Student's class    |
| `address` | Student's location |

## 🖥️ How It Works

### 1. Display Students

The `displayStudents()` function receives student data and uses `map()` to create an HTML card for every student.

```js
function displayStudents(data) {
  div.innerHTML = data
    .map((student) => {
      return `
                <div class="card">
                    <h2>${student.name}</h2>
                    <p><strong>Marks:</strong> ${student.marks}</p>
                    <p><strong>Class:</strong> ${student.class}</p>
                    <p><strong>Address:</strong> ${student.address}</p>
                </div>
            `;
    })
    .join("");
}
```

### 2. Display All Students Initially

When the page loads, all students are displayed:

```js
displayStudents(students);
```

### 3. Search Functionality

The search form listens for the `submit` event:

```js
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().startsWith(searchValue);
  });

  displayStudents(filteredStudents);
});
```

### 4. Search Using `startsWith()`

The project uses:

```js
student.name.toLowerCase().startsWith(searchValue);
```

This means the search matches only the **beginning of the student's name**.

For example, if the user searches for:

```text
A
```

The result includes:

```text
Aarav Sharma
Ananya Verma
Aditya Mishra
Arjun Mehta
```

## 🔍 Search Behavior

The search is **not performed while typing**.

The user must:

1. Enter a search value.
2. Click the **Search** button.
3. JavaScript filters the student data.
4. Matching student cards are displayed.

````

## 🧠 JavaScript Concepts Practiced

### `map()`

Used to transform student objects into HTML cards.

```js
students.map((student) => {
    return `<div class="card">${student.name}</div>`;
});
````

### `filter()`

Used to find students whose names match the search:

```js
students.filter((student) => {
  return student.name.toLowerCase().startsWith(searchValue);
});
```

### `startsWith()`

Checks whether a string begins with a specific value:

```js
"Aarav Sharma".startsWith("Aar");
```

Result:

```text
true
```

### `join()`

Combines the generated HTML strings into one string:

```js
.join("");
```

### `toLowerCase()`

Makes the search case-insensitive:

```js
student.name.toLowerCase();
```

Therefore:

```text
A
a
AA
aa
```

can match the same names depending on the entered characters.

### `trim()`

Removes unnecessary spaces from the beginning and end of the search value:

```js
searchInput.value.trim();
```

### `event.preventDefault()`

Prevents the form from refreshing the page when the Search button is clicked:

```js
event.preventDefault();
```

## 🚀 How to Run

### Step 1

Download or clone the project.

### Step 2

Open the project folder in VS Code.

### Step 3

Open `index.html` in your browser.

You can also use the **Live Server** extension in VS Code.

### Step 4

You will see all student cards.

Use the search box and click **Search** to filter students.
