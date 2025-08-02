// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // <--- Import Router components
import StudentList from './components/StudentList'; // <--- Import StudentList
// import StudentForm from './components/StudentForm'; // We'll create this next
import './App.css'; // Import global app styles
import StudentForm from './components/StudentForm';

function App() {
  return (
    <Router> {/* BrowserRouter wraps your entire application */}
      <div className="app-container">
        <header className="app-header">
          <h1>Student Management App</h1>
          <nav className="app-nav">
            <Link to="/students" className="nav-link">Student List</Link>
            {/* We'll add a link to the "Add Student" form here later */}
            <Link to="/students/add" className="nav-link">Add Student</Link> 
          </nav>
        </header>

        <main className="app-main">
          <Routes> {/* Routes defines the individual routing rules */}
            {/* Route for the Student List */}
            <Route path="/students" element={<StudentList />} />

            {/* Route for the Home/Root path, redirecting to /students */}
            <Route path="/" element={<StudentList />} /> {/* Or use <Navigate to="/students" replace /> */}

            {/* We'll add the route for StudentForm here later */}
            <Route path="/students/add" element={<StudentForm />} /> 

            {/* Optional: Add a 404 Not Found route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 Student App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;