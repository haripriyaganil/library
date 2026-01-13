import { useEffect, useState } from "react";

function ReturnBook() {
  const [issuedBooks, setIssuedBooks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    setIssuedBooks(data);
  }, []);

  const returnBook = (index) => {
    const updated = issuedBooks.filter((_, i) => i !== index);
    setIssuedBooks(updated);
    localStorage.setItem("issuedBooks", JSON.stringify(updated));
    alert("Book Returned Successfully ✅");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📕 Return Book</h1>
      <p>Select a book to return</p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Member ID</th>
            <th>Issue Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {issuedBooks.length === 0 ? (
            <tr>
              <td colSpan="5">No issued books found</td>
            </tr>
          ) : (
            issuedBooks.map((b, i) => (
              <tr key={i}>
                <td>{b.bookName}</td>
                <td>{b.memberId}</td>
                <td>{b.issueDate}</td>
                <td style={{ color: "green" }}>{b.status}</td>
                <td>
                  <button onClick={() => returnBook(i)} style={btnStyle}>
                    Return
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const tableStyle = {
  margin: "20px auto",
  borderCollapse: "collapse",
  width: "80%"
};

const btnStyle = {
  padding: "6px 12px",
  background: "crimson",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default ReturnBook;
