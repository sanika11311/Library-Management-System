import React, { useMemo, useCallback, useState } from "react";
function Dashboard({ issuedBooks, setIssuedBooks, userRole, allBooks }) {

  // Total Books from Home
  const totalBooks = allBooks ? allBooks.length : 0;
  //useMemo Hook
  const issuedCount = useMemo(() => issuedBooks.length, [issuedBooks]);
 // Available Books (no NaN issue)
  const availableBooks = totalBooks - issuedCount;
  return (
    <div className="page dashboard">

      <h2 className="dashboard-title">Library Dashboard</h2>

      {/*STATS */}
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Total Books</h3>
          <p>{totalBooks}</p>
        </div>

        <div className="dashboard-card">
          <h3>Issued Books</h3>
          <p>{issuedCount}</p>
        </div>

        <div className="dashboard-card">
          <h3>Available Books</h3>
          <p>{availableBooks >= 0 ? availableBooks : 0}</p>
        </div>

      </div>

      

      {/* ✅ ISSUED BOOKS LIST */}
      <div className="book-card" style={{ marginTop: "30px" }}>
        <h3>Issued Books List</h3>

        {issuedBooks.length === 0 ? (
          <p>No books issued</p>
        ) : (
          <ul>
            {issuedBooks.map((book, index) => (
              <li key={index}>
                <strong>{book.bookTitle}</strong> by {book.author} <br />
                Student: {book.studentName} ({book.studentId}) <br />
                Issue Date: {book.issueDate} | Return Date: {book.returnDate}
 
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default Dashboard;