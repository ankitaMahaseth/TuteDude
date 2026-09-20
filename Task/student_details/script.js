const students = [
  {
    name: "Aarav Sharma",
    marks: 85,
    class: "10th",
    address: "Bangalore, Karnataka",
  },
  {
    name: "Ananya Verma",
    marks: 92,
    class: "10th",
    address: "Mumbai, Maharashtra",
  },
  {
    name: "Rohan Gupta",
    marks: 78,
    class: "9th",
    address: "Delhi, India",
  },
  {
    name: "Priya Singh",
    marks: 88,
    class: "9th",
    address: "Lucknow, Uttar Pradesh",
  },
  {
    name: "Rahul Kumar",
    marks: 74,
    class: "8th",
    address: "Patna, Bihar",
  },
  {
    name: "Sneha Patel",
    marks: 95,
    class: "10th",
    address: "Ahmedabad, Gujarat",
  },
  {
    name: "Aditya Mishra",
    marks: 81,
    class: "8th",
    address: "Bhopal, Madhya Pradesh",
  },
  {
    name: "Neha Das",
    marks: 89,
    class: "9th",
    address: "Kolkata, West Bengal",
  },
  {
    name: "Arjun Mehta",
    marks: 76,
    class: "7th",
    address: "Jaipur, Rajasthan",
  },
  {
    name: "Kavya Reddy",
    marks: 93,
    class: "10th",
    address: "Hyderabad, Telangana",
  },
  {
    name: "Vivek Joshi",
    marks: 68,
    class: "8th",
    address: "Pune, Maharashtra",
  },
  {
    name: "Ishita Roy",
    marks: 87,
    class: "9th",
    address: "Bhubaneswar, Odisha",
  },
  {
    name: "Karan Malhotra",
    marks: 72,
    class: "7th",
    address: "Chandigarh, India",
  },
  {
    name: "Pooja Nair",
    marks: 91,
    class: "10th",
    address: "Kochi, Kerala",
  },
  {
    name: "Sahil Khan",
    marks: 79,
    class: "8th",
    address: "Bengaluru, Karnataka",
  },
  {
    name: "Meera Iyer",
    marks: 96,
    class: "10th",
    address: "Chennai, Tamil Nadu",
  },
  {
    name: "Devansh Jain",
    marks: 83,
    class: "9th",
    address: "Indore, Madhya Pradesh",
  },
  {
    name: "Simran Kaur",
    marks: 90,
    class: "9th",
    address: "Amritsar, Punjab",
  },
  {
    name: "Manav Kapoor",
    marks: 65,
    class: "7th",
    address: "Noida, Uttar Pradesh",
  },
  {
    name: "Riya Sahu",
    marks: 86,
    class: "8th",
    address: "Raipur, Chhattisgarh",
  },
];

const div = document.getElementById("container");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");   

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
// Display all students initially
displayStudents(students);

// Search only after clicking Search button
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchValue = searchInput.value.toLowerCase().trim();

  const filteredStudents = students.filter((student) => {
    return student.name.toLowerCase().startsWith(searchValue);
  });

  displayStudents(filteredStudents);
});
