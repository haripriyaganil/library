import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyBooks() {
  const navigate = useNavigate();
  const studentEmail = localStorage.getItem("username");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const issued = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    const filtered = issued.filter(b => b.memberId === studentEmail);
    setBooks(filtered);
  }, [studentEmail]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📚 My Issued Books</h1>

      <button
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#8b5e34",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer"
        }}
        onClick={() => navigate("/return-book")}
      >
        Return Book
      </button>

      {books.length === 0 ? (
        <p>No books issued yet</p>
      ) : (
        <table style={{ margin: "0 auto", width: "70%" }}>
          <thead>
            <tr>
              <th>Book</th>
              <th>Issue Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b, i) => (
              <tr key={i}>
                <td>{b.bookName}</td>
                <td>{b.issueDate}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyBooks;
