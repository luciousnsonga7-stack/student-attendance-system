# student-attendance-system
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Attendance Management System</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

<header>

    <div class="container">

        <h1>Student Attendance Management System</h1>

        <p>Simple web-based attendance tracking system</p>

    </div>

</header>

<main class="container">

    <!-- Student Registration -->

    <section class="card">

        <h2>Register Student</h2>

        <form id="studentForm">

            <div class="form-grid">

                <div>

                    <label for="studentId">Student ID</label>

                    <input type="text" id="studentId"

                           placeholder="e.g. STU001" required>

                </div>

                <div>

                    <label for="studentName">Full Name</label>

                    <input type="text" id="studentName"

                           placeholder="e.g. John Banda" required>

                </div>

                <div>

                    <label for="studentClass">Class</label>

                    <select id="studentClass" required>

                        <option value="">Select class</option>

                        <option value="Grade 10">Grade 10</option>

                        <option value="Grade 11">Grade 11</option>

                        <option value="Grade 12">Grade 12</option>

                    </select>

                </div>

                <div>

                    <label for="studentDate">Date</label>

                    <input type="date" id="studentDate" required>

                </div>

            </div>

            <button type="submit">Add Student</button>

        </form>

    </section>

    <!-- Statistics -->

    <section class="stats">

        <div class="stat-card">

            <span id="totalStudents">0</span>

            <p>Total Students</p>

        </div>

        <div class="stat-card">

            <span id="presentStudents">0</span>

            <p>Present</p>

        </div>

        <div class="stat-card">

            <span id="absentStudents">0</span>

            <p>Absent</p>

        </div>

    </section>

    <!-- Attendance Table -->

    <section class="card">

        <div class="table-header">

            <div>

                <h2>Attendance Records</h2>

                <p>Manage student attendance below.</p>

            </div>

            <input type="search"

                   id="searchInput"

                   placeholder="Search student...">

        </div>

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>Student ID</th>

                        <th>Name</th>

                        <th>Class</th>

                        <th>Date</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody id="attendanceTable">

                </tbody>

            </table>

        </div>

        <p id="emptyMessage" class="empty-message">

            No attendance records yet.

        </p>

    </section>

    <!-- Clear Records -->

    <button id="clearButton" class="danger-button">

        Clear All Records

    </button>

</main>

<footer>

    <p>

        Student Attendance Management System &copy; 2026

    </p>

</footer>

<script src="script.js"></script>

</body>

</html>