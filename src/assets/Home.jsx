import React, { useState, useEffect } from "react";
import { FaBook, FaPlus, FaTrash, FaStar } from "react-icons/fa";

function Home({ allBooks, setAllBooks }) {

  const [search, setSearch] = useState("");
  const [newBook, setNewBook] = useState("");
  const [department, setDepartment] = useState("ALL");
  const [favorites, setFavorites] = useState([]);

  // Predefined books with department
  const booksData = [
  { name: "Introduction to Programming - John Zelle ", dept: "CSE" },
  { name: "Data Structures and Algorithms - Michael T. Goodrich ", dept: "CSE" },
  { name: "Computer Networks - Andrew S. Tanenbaum ", dept: "CSE" },
  { name: "Operating System Concepts - Abraham Silberschatz ", dept: "CSE" },
  { name: "Database System Concepts - Henry F. Korth (CSE)", dept: "CSE" },
  { name: "Artificial Intelligence: A Modern Approach - Stuart Russell ", dept: "CSE" },
  { name: "Clean Code - Robert C. Martin ", dept: "CSE" },
  { name: "Introduction to Algorithms - Thomas H. Cormen ", dept: "CSE" },
  { name: "The Pragmatic Programmer - Andrew Hunt ", dept: "CSE" },
  { name: "Computer Organization and Design - David A. Patterson", dept: "CSE" },
  { name: "Software Engineering - Ian Sommerville", dept: "CSE" },
  { name: "Python Crash Course - Eric Matthes ", dept: "CSE" },
  { name: "Java: The Complete Reference - Herbert Schildt", dept: "CSE" },
  { name: "Web Development with Node and Express - Ethan Brown ", dept: "CSE" },
  { name: "Head First Design Patterns - Eric Freeman ", dept: "CSE" },
  { name: "Algorithms Unlocked - Thomas H. Cormen", dept: "CSE" },
  { name: "Modern Operating Systems - Andrew S. Tanenbaum ", dept: "CSE" },
  { name: "Computer Architecture: A Quantitative Approach - John L. Hennessy ", dept: "CSE" },
  { name: "Database Management Systems - Raghu Ramakrishnan ", dept: "CSE" },
  { name: "Machine Learning - Tom M. Mitchell ", dept: "CSE" },
  { name: "Deep Learning - Ian Goodfellow ", dept: "CSE" },
  { name: "Pattern Recognition and Machine Learning - Christopher Bishop ", dept: "CSE" },
  { name: "Artificial Intelligence - Elaine Rich ", dept: "CSE" },
  { name: "Programming Pearls - Jon Bentley ", dept: "CSE" },
  { name: "Code Complete - Steve McConnell ", dept: "CSE" },
  { name: "Structure and Interpretation of Computer Programs - Harold Abelson ", dept: "CSE" },
  { name: "Introduction to the Theory of Computation - Michael Sipser ", dept: "CSE" },
  { name: "Compilers: Principles, Techniques, and Tools - Alfred V. Aho ", dept: "CSE" },
  { name: "Distributed Systems - Maarten van Steen ", dept: "CSE" },
  { name: "Cloud Computing: Concepts and Technology - Thomas Erl ", dept: "CSE" },
  { name: "Cybersecurity Essentials - Charles J. Brooks ", dept: "CSE" },
  { name: "Digital Logic and Computer Design - M. Morris Mano ", dept: "CSE" },
  { name: "Operating Systems: Internals and Design Principles - William Stallings ", dept: "CSE" },
  { name: "Data Mining: Concepts and Techniques - Jiawei Han ", dept: "CSE" },
  { name: "Big Data Fundamentals - Thomas Erl ", dept: "CSE" },
  { name: "The Mythical Man-Month - Frederick P. Brooks Jr. ", dept: "CSE" },
  { name: "Refactoring - Martin Fowler ", dept: "CSE" },
  { name: "Design Patterns: Elements of Reusable Object-Oriented Software - Erich Gamma ", dept: "CSE" },
  { name: "Introduction to Information Retrieval - Christopher Manning ", dept: "CSE" },
  { name: "Computer Graphics: Principles and Practice - John F. Hughes ", dept: "CSE" },
  { name: "Game Programming Patterns - Robert Nystrom ", dept: "CSE" },
  { name: "Hands-On Machine Learning with Scikit-Learn & TensorFlow - Aurélien Géron ", dept: "CSE" },
  { name: "Learning Python - Mark Lutz ", dept: "CSE" },
  { name: "Effective Java - Joshua Bloch ", dept: "CSE" },
  { name: "The C Programming Language - Brian W. Kernighan ", dept: "CSE" },
  { name: "Programming in ANSI C - E. Balagurusamy", dept: "CSE" },
  { name: "Unix and Linux System Administration Handbook - Evi Nemeth ", dept: "CSE" },
  { name: "Linux Command Line and Shell Scripting Bible - Richard Blum ", dept: "CSE" },
  { name: "Software Testing - Ron Patton ", dept: "CSE" },
  { name: "Agile Software Development - Robert C. Martin", dept: "CSE" },
  { name: "Data Science from Scratch - Joel Grus ", dept: "DSE" },
  { name: "Python for Data Analysis - Wes McKinney ", dept: "DSE" },
 { name: "Hands-On Machine Learning with Scikit-Learn & TensorFlow - Aurélien Géron ", dept: "DSE" },
{ name: "Machine Learning - Tom M. Mitchell ", dept: "DSE" },
{ name: "Pattern Recognition and Machine Learning - Christopher M. Bishop ", dept: "DSE" },
{ name: "Deep Learning - Ian Goodfellow ", dept: "DSE" },
{ name: "Introduction to Statistical Learning - Gareth James ", dept: "DSE" },
{ name: "The Elements of Statistical Learning - Trevor Hastie ", dept: "DSE" },
{ name: "Practical Statistics for Data Scientists - Peter Bruce ", dept: "DSE" },
{ name: "Think Stats - Allen B. Downey ", dept: "DSE" },
{ name: "Data Mining: Concepts and Techniques - Jiawei Han ", dept: "DSE" },
{ name: "Mining of Massive Datasets - Jure Leskovec ", dept: "DSE" },
{ name: "Big Data: A Revolution That Will Transform How We Live - Viktor Mayer-Schönberger", dept: "DSE" },
{ name: "Data Science for Business - Foster Provost ", dept: "DSE" },
{ name: "Applied Predictive Modeling - Max Kuhn ", dept: "DSE" },
{ name: "Feature Engineering for Machine Learning - Alice Zheng ", dept: "DSE" },
{ name: "Storytelling with Data - Cole Nussbaumer Knaflic ", dept: "DSE" },
{ name: "Python Data Science Handbook - Jake VanderPlas ", dept: "DSE" },
{ name: "R for Data Science - Hadley Wickham ", dept: "DSE" },
{ name: "Doing Data Science - Cathy O'Neil ", dept: "DSE" },
{ name: "Machine Learning with Python Cookbook - Chris Albon ", dept: "DSE" },
{ name: "Statistics for Data Science - James D. Miller ", dept: "DSE" },
{ name: "An Introduction to Data Science - Jeffrey Stanton ", dept: "DSE" },
{ name: "Bayesian Data Analysis - Andrew Gelman ", dept: "DSE" },
{ name: "Data Analytics Made Accessible - Anil Maheshwari ", dept: "DSE" },
{ name: "Practical Machine Learning - Sunila Gollapudi ", dept: "DSE" },
{ name: "Introduction to Machine Learning with Python - Andreas Müller ", dept: "DSE" },
{ name: "Deep Learning with Python - François Chollet ", dept: "DSE" },
{ name: "Natural Language Processing with Python - Steven Bird ", dept: "DSE" },
{ name: "Speech and Language Processing - Daniel Jurafsky ", dept: "DSE" },
{ name: "Reinforcement Learning: An Introduction - Richard S. Sutton ", dept: "DSE" },
{ name: "Probabilistic Graphical Models - Daphne Koller ", dept: "DSE" },
{ name: "Data Science in R - Deborah Nolan ", dept: "DSE" },
{ name: "Python Machine Learning - Sebastian Raschka ", dept: "DSE" },
{ name: "Advanced Analytics with Spark - Sandy Ryza ", dept: "DSE" },
{ name: "Learning Spark - Holden Karau ", dept: "DSE" },
{ name: "Data Science on the Google Cloud Platform - Valliappa Lakshmanan", dept: "DSE" },
{ name: "Fundamentals of Data Engineering - Joe Reis ", dept: "DSE" },
{ name: "Designing Data-Intensive Applications - Martin Kleppmann", dept: "DSE" },
{ name: "Streaming Systems - Tyler Akidau ", dept: "DSE" },
{ name: "Machine Learning Engineering - Andriy Burkov ", dept: "DSE" },
{ name: "Interpretable Machine Learning - Christoph Molnar ", dept: "DSE" },
{ name: "Trustworthy Online Controlled Experiments - Ron Kohavi ", dept: "DSE" },
{ name: "Data Visualization: A Practical Introduction - Kieran Healy ", dept: "DSE" },
{ name: "The Data Warehouse Toolkit - Ralph Kimball ", dept: "DSE" },
{ name: "SQL for Data Analysis - Cathy Tanimura ", dept: "DSE" },
{ name: "Practical Time Series Analysis - Aileen Nielsen ", dept: "DSE" },
{ name: "Forecasting: Principles and Practice - Rob J Hyndman ", dept: "DSE" },
{ name: "Graph Representation Learning - William L. Hamilton ", dept: "DSE" },
{ name: "Hands-On Data Science for Marketing - Yoon Hyup Hwang ", dept: "DSE" },
];
  const morebooksData = [
  {
    name: "Introduction to React - John Smith",
    dept: "CSE",
    barcode: "111"
  },
  {
    name: "JavaScript Essentials - David Miller",
    dept: "CSE",
    barcode: "222"
  },
  {
    name: "Machine Learning - Andrew Ng",
    dept: "DS",
    barcode: "333"
  }
];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Home page loaded");
  }, []);

  // Add predefined book
  const addBook = () => {
    if (index < booksData.length) {
      setAllBooks((prev) => [...prev, booksData[index]]);
      setIndex(index + 1);
    } else {
      alert("All books added!");
    }
  };

  // Add custom book
  const addCustomBook = () => {
    if (newBook.trim() === "") {
      alert("Enter book name");
      return;
    }

    const bookObj = {
      name: newBook,
      dept: department === "ALL" ? "CSE" : department
    };

    setAllBooks((prev) => [...prev, bookObj]);
    setNewBook("");
  };

  // Delete book
  const deleteBook = (i) => {
    const updated = allBooks.filter((_, index) => index !== i);
    setAllBooks(updated);
  };

  // Favorite toggle
  const toggleFavorite = (i) => {
    if (favorites.includes(i)) {
      setFavorites(favorites.filter((id) => id !== i));
    } else {
      setFavorites([...favorites, i]);
    }
  };

  // Filter books
  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = book.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesDept =
      department === "ALL" || book.dept === department;

    return matchesSearch && matchesDept;
  });

  // Department count
  const cseCount = allBooks.filter((b) => b.dept === "CSE").length;
  const dseCount = allBooks.filter((b) => b.dept === "DSE").length;

  return (
    <div className="page home">

      {/* HERO */}
      <section className="hero">
        <h1><FaBook /> Department Library</h1>
        <p>Manage books department-wise</p>

        <button className="primary-btn add-book-btn" onClick={addBook}>
          <FaPlus /> Add Book
        </button>
      </section>

      {/* ✅ PROFESSIONAL DROPDOWN */}
      <div className="department-container">

        <label className="dept-label">Select Department</label>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="dept-dropdown"
        >
          <option value="ALL">All Departments</option>
          <option value="CSE">Computer Science (CSE)</option>
          <option value="DSE">Data Science (DSE)</option>
        </select>

        <p className="dept-count">
          CSE: {cseCount} | DSE: {dseCount}
        </p>

      </div>

      {/* ADD CUSTOM BOOK */}
      <div className="custom-book">
        <input
          type="text"
          placeholder="Enter new book..."
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
        />
        <button onClick={addCustomBook}>
          <FaPlus /> Add
        </button>
      </div>

      {/* SEARCH */}
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* BOOK LIST */}
      {filteredBooks.length > 0 ? (
        <div className="book-list">
          <h2>Books ({filteredBooks.length})</h2>

          <ul>
            {filteredBooks.map((book, i) => (
              <li key={i} className="book-item">

                <span>
                  {book.name} ({book.dept})
                </span>

                {/* ⭐ Favorite */}
                <FaStar
                  onClick={() => toggleFavorite(i)}
                  style={{
                    color: favorites.includes(i) ? "gold" : "gray",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                />

                {/* 🗑 Delete */}
                <FaTrash
                  onClick={() => deleteBook(i)}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    marginLeft: "10px"
                  }}
                />

              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ textAlign: "center", color: "white" }}>
          No books found
        </p>
      )}

    </div>
  );
}

export default Home;