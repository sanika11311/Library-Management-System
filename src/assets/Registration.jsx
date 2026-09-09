import React, { useState, useRef } from "react";
import BarcodeScanner from "../component/BarcodeScanner";

function Registration({ issuedBooks, setIssuedBooks, allBooks }) {
  const nameRef = useRef();
  const [showScanner, setShowScanner] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    bookTitle: "",
    issueDate: "",
    returnDate: ""
  });

  // ✅ Fix: allBooks is object → convert to array
  const flatBooks = Object.values(allBooks || {}).flat();

  // 📌 HANDLE SCAN
  const handleScan = (code) => {
    const foundBook = flatBooks.find((b) => b?.barcode === code);

    setFormData((prev) => ({
      ...prev,
      bookTitle: foundBook?.name || code
    }));

    setShowScanner(false);
  };

  // 📌 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.studentName || !formData.bookTitle) {
      alert("Fill required fields");
      return;
    }

    const alreadyIssued = issuedBooks.some(
      (b) => b.bookTitle === formData.bookTitle
    );

    if (alreadyIssued) {
      alert("Book already issued!");
      return;
    }

    setIssuedBooks([...issuedBooks, formData]);

    alert("Book Issued Successfully");

    setFormData({
      studentName: "",
      studentId: "",
      bookTitle: "",
      issueDate: "",
      returnDate: ""
    });

    nameRef.current.focus();
  };

  return (
    <div style={page}>
      <div style={container}>
        
        {/* Header */}
        <div style={header}>
          <h2> Issue Book</h2>
          <p>Fill details to issue a book </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={form}>
          
          {/* Student Info */}
          <div style={section}>
            <h4 style={sectionTitle}>Student Details</h4>

            <div style={row}>
              <div style={field}>
                <label>Student Name *</label>
                <input
                  ref={nameRef}
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                  style={input}
                />
              </div>

              <div style={field}>
                <label>Student ID</label>
                <input
                  value={formData.studentId}
                  onChange={(e) =>
                    setFormData({ ...formData, studentId: e.target.value })
                  }
                  style={input}
                />
              </div>
            </div>
          </div>

          {/* Book Info */}
<div style={section}>
  <h4 style={sectionTitle}>Book Details</h4>

  <div style={field}>
    <label>Book Title *</label>
    <input
      value={formData.bookTitle}
      onChange={(e) =>
        setFormData({ ...formData, bookTitle: e.target.value })
      }
      style={input}
    />

    {/* 🔥 Scan button INSIDE same field */}
    <button
      type="button"
      onClick={() => setShowScanner(true)}
      style={{
        width: "100%",           // full width
        padding: "12px",
        marginTop: "10px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      📷 Scan Barcode
    </button>
  </div>
</div>
          {/* Dates */}
          <div style={section}>
            <h4 style={sectionTitle}>Dates</h4>

            <div style={row}>
              <div style={field}>
                <label>Issue Date</label>
                <input
                  type="date"
                  value={formData.issueDate}
                  onChange={(e) =>
                    setFormData({ ...formData, issueDate: e.target.value })
                  }
                  style={input}
                />
              </div>

              <div style={field}>
                <label>Return Date</label>
                <input
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) =>
                    setFormData({ ...formData, returnDate: e.target.value })
                  }
                  style={input}
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" style={submitBtn}>
            Issue Book
          </button>
        </form>
      </div>

      {/* Scanner */}
      {showScanner && (
        <BarcodeScanner
          onScanSuccess={handleScan}
          onClose={() => setShowScanner(false)}
        />
      )}
    </div>
  );
}

export default Registration;

//
// 🎨 STYLES
//

// 🔥 Background image with overlay
const page = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",

  backgroundImage: "url('/bg.jpg')", // 👈 original image only
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
};

// 🔥 Card
const container = {
  width: "650px",
  background: "rgba(255,255,255,0.95)",
  borderRadius: "12px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  padding: "25px",
  backdropFilter: "blur(6px)"
};

const header = {
  marginBottom: "20px"
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "20px"
};

const section = {};

const sectionTitle = {
  marginBottom: "10px",
  color: "#334155"
};

const row = {
  display: "flex",
  gap: "15px"
};

const field = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "5px"
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  outline: "none"
};

const scanBtn = {
    marginTop: "10px",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer"
};

const submitBtn = {
  marginTop: "10px",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer"
};