import React, { useState } from "react";

const HomePage = () => {
  const [department, setDepartment] = useState("");
  const [studentType, setStudentType] = useState("");

  // Reset student type when department changes
  const handleDepartmentSelect = (dept) => {
    setDepartment(dept);
    setStudentType("");
  };

  const renderFeatures = () => {
    if (!department || !studentType) return null;

    if (department === "CSE") {
      return (
        <div className="features">
          <h3>CSE Features</h3>
          <ul>
            <li>💻 Coding Practice Platform</li>
            <li>📚 Notes & Study Material</li>
            <li>🧠 DSA Tracker</li>
            <li>🚀 Project Ideas & GitHub Integration</li>
          </ul>
        </div>
      );
    }

    if (department === "DSE") {
      return (
        <div className="features">
          <h3>DSE Features</h3>
          <ul>
            <li>📊 Data Visualization Dashboard</li>
            <li>🤖 ML Model Playground</li>
            <li>📈 Dataset Explorer</li>
            <li>🧪 Jupyter Notebook Integration</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Student Portal</h1>

      {/* Department Selection */}
      <div style={styles.section}>
        <h2>Select Department</h2>
        <button
          style={styles.button}
          onClick={() => handleDepartmentSelect("CSE")}
        >
          Computer Science & Engineering
        </button>

        <button
          style={styles.button}
          onClick={() => handleDepartmentSelect("DSE")}
        >
          Data Science & Engineering
        </button>
      </div>

      {/* Student Type Selection */}
      {department && (
        <div style={styles.section}>
          <h2>Select Student Type</h2>
          <button
            style={styles.button}
            onClick={() => setStudentType("student")}
          >
            Student
          </button>

          <button
            style={styles.button}
            onClick={() => setStudentType("faculty")}
          >
            Faculty
          </button>
        </div>
      )}

      {/* Selected Info */}
      {department && studentType && (
        <div style={styles.result}>
          <h2>
            Selected: {department} - {studentType}
          </h2>
        </div>
      )}

      {/* Features Section */}
      {renderFeatures()}
    </div>
  );
};

export default HomePage;

/* 🔹 Simple Styling */
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  section: {
    margin: "20px 0",
  },
  button: {
    margin: "10px",
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
  },
  result: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};