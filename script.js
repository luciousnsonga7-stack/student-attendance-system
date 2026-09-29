const studentForm = document.getElementById("studentForm");

const attendanceTable =
    document.getElementById("attendanceTable");

const searchInput =
    document.getElementById("searchInput");

const emptyMessage =
    document.getElementById("emptyMessage");

const clearButton =
    document.getElementById("clearButton");


// Get saved students from the browser

let students =
    JSON.parse(localStorage.getItem("attendanceStudents")) || [];


// Save students

function saveStudents() {

    localStorage.setItem(
        "attendanceStudents",
        JSON.stringify(students)
    );

}


// Display students

function renderStudents() {

    const searchTerm =
        searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>

        student.studentId
            .toLowerCase()
            .includes(searchTerm)

        ||

        student.name
            .toLowerCase()
            .includes(searchTerm)

        ||

        student.className
            .toLowerCase()
            .includes(searchTerm)

    );


    attendanceTable.innerHTML = "";


    filteredStudents.forEach(student => {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${student.studentId}</td>

            <td>${student.name}</td>

            <td>${student.className}</td>

            <td>${student.date}</td>

            <td class="${
                student.status === "Present"
                ? "status-present"
                : "status-absent"
            }">

                ${student.status}

            </td>

            <td>

                <button
                    class="action-button mark-button"
                    onclick="toggleStatus('${student.id}')">

                    Mark ${
                        student.status === "Present"
                        ? "Absent"
                        : "Present"
                    }

                </button>


                <button
                    class="action-button remove-button"
                    onclick="removeStudent('${student.id}')">

                    Remove

                </button>

            </td>

        `;


        attendanceTable.appendChild(row);

    });


    if (filteredStudents.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }


    updateStatistics();

}


// Update statistics

function updateStatistics() {

    document.getElementById("totalStudents").textContent =
        students.length;


    document.getElementById("presentStudents").textContent =
        students.filter(
            student => student.status === "Present"
        ).length;


    document.getElementById("absentStudents").textContent =
        students.filter(
            student => student.status === "Absent"
        ).length;

}


// Add student

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const studentId =
        document.getElementById("studentId")
        .value.trim();


    const name =
        document.getElementById("studentName")
        .value.trim();


    const className =
        document.getElementById("studentClass")
        .value;


    const date =
        document.getElementById("studentDate")
        .value;


    // Check for duplicate ID

    const alreadyExists = students.some(student =>

        student.studentId.toLowerCase()
        === studentId.toLowerCase()

    );


    if (alreadyExists) {

        alert("A student with this ID already exists.");

        return;

    }


    // Create new student

    const newStudent = {

        id: Date.now().toString(),

        studentId: studentId,

        name: name,

        className: className,

        date: date,

        status: "Absent"

    };


    students.push(newStudent);


    saveStudents();

    renderStudents();

    studentForm.reset();

});


// Change attendance status

function toggleStatus(id) {

    students = students.map(student => {

        if (student.id === id) {

            return {

                ...student,

                status:
                    student.status === "Present"
                    ? "Absent"
                    : "Present"

            };

        }

        return student;

    });


    saveStudents();

    renderStudents();

}


// Remove student

function removeStudent(id) {

    students =
        students.filter(student => student.id !== id);

    saveStudents();

    renderStudents();

}


// Search students

searchInput.addEventListener(
    "input",
    renderStudents
);


// Clear all records

clearButton.addEventListener(
    "click",
    function() {

        if (students.length === 0) {

            alert("There are no records to clear.");

            return;

        }


        const confirmDelete =
            confirm(
                "Are you sure you want to delete all attendance records?"
            );


        if (confirmDelete) {

            students = [];

            saveStudents();

            renderStudents();

        }

    }
);


// Display data when page loads

renderStudents();