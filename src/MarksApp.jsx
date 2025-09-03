import React, { useState } from "react";
import "./MarksApp.css";

const MarksApp = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const addStudent = () => {
    if (!name || !marks) return;
    setStudents([
      ...students,
      { id: Date.now(), name, marks: parseInt(marks) }
    ]);
    setName("");
    setMarks("");
  };

  const average =
    students.length > 0
      ? (students.reduce((sum, s) => sum + s.marks, 0) / students.length).toFixed(2)
      : 0;

  return (
    <div className="marks-container">
      <h1>Student Marks Management</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={addStudent}>Add</button>
      </div>

      <table className="marks-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.marks}</td>
              <td className={s.marks >= 40 ? "pass" : "fail"}>
                {s.marks >= 40 ? "Pass" : "Fail"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <h3>Summary</h3>
        <p>Total Students: {students.length}</p>
        <p>Average Marks: {average}</p>
      </div>
    </div>
  );
};

export default MarksApp;
