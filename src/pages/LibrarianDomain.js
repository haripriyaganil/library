import { useEffect, useState } from "react";

function LibrarianDomain() {
  const domain = localStorage.getItem("domain");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("libraryBooks")) || [];
    setBooks(all.filter(b => b.domain === domain));
  }, [domain]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📚 {domain} Librarian Panel</h1>

      {books.length === 0 ? (
        <p>No books in this domain</p>
      ) : (
        books.map((b, i) => (
          <p key={i}>{b.title}</p>
        ))
      )}
    </div>
  );
}

export default LibrarianDomain;
