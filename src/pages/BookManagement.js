import { useState, useEffect } from "react";
import "../styles/BookManagement.css";

function BookManagement() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("libraryBooks")) || [];
    setBooks(stored);
  }, []);

  const addBook = (e) => {
    e.preventDefault(); // 🔥 THIS FIXES BUTTON

    if (!title || !author) {
      alert("Fill all fields");
      return;
    }

    const newBook = {
      title,
      author,
      status: "Available"
    };

    const updated = [...books, newBook];
    setBooks(updated);
    localStorage.setItem("libraryBooks", JSON.stringify(updated));

    setTitle("");
    setAuthor("");
  };

  return (
    <div className="bm-container">
      <h1>📘 Librarian Book Management</h1>

      <form className="bm-form" onSubmit={addBook}>
        <input
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit">➕ Add Book</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="3">No books added yet</td>
            </tr>
          ) : (
            books.map((b, i) => (
              <tr key={i}>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookManagement;
