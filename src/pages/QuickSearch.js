import { useState, useEffect } from "react";

export default function QuickSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("libraryBooks")) || [];
    setBooks(stored);
  }, []);

  const handleSearch = () => {
    const filtered = books.filter(
      (b) =>
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.author.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🔎 Quick Search</h1>

      <input
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={inputStyle}
      />

      <br /><br />

      <button onClick={handleSearch} style={btnStyle}>
        Search
      </button>

      {results.length > 0 ? (
        <div style={{ marginTop: "30px" }}>
          {results.map((book, idx) => (
            <div key={idx} style={resultCard}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Status: {book.status}</p>
            </div>
          ))}
        </div>
      ) : (
        query && (
          <p style={{ marginTop: "30px", color: "#555" }}>
            No books found matching "{query}"
          </p>
        )
      )}
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  width: "350px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const btnStyle = {
  padding: "10px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const resultCard = {
  margin: "12px auto",
  padding: "18px",
  width: "80%",
  maxWidth: "500px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  textAlign: "left",
  background: "white"
};
