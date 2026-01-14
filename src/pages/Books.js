import { useState } from "react";
import { useNavigate } from "react-router-dom";   // 🔥 ADDED
import "../styles/Books.css";

const booksData = [
  { title:"To Kill a Mockingbird", author:"Harper Lee", genre:"Literature", img:"https://covers.openlibrary.org/b/id/9874155-L.jpg"},
  { title:"1984", author:"George Orwell", genre:"Literature", img:"https://covers.openlibrary.org/b/id/7222246-L.jpg"},
  { title:"The Great Gatsby", author:"F. Scott Fitzgerald", genre:"Literature", img:"https://covers.openlibrary.org/b/id/5890771-L.jpg"},
  { title:"The Alchemist", author:"Paulo Coelho", genre:"Fiction", img:"https://covers.openlibrary.org/b/id/8128691-L.jpg"},
  { title:"Harry Potter", author:"J.K. Rowling", genre:"Fantasy", img:"https://covers.openlibrary.org/b/id/7984916-L.jpg"},
  { title:"The Hobbit", author:"J.R.R. Tolkien", genre:"Fantasy", img:"https://covers.openlibrary.org/b/id/6979861-L.jpg"},
  { title:"The Book Thief", author:"Markus Zusak", genre:"Literature", img:"https://covers.openlibrary.org/b/id/8235116-L.jpg"},
  { title:"Pride and Prejudice", author:"Jane Austen", genre:"Literature", img:"https://covers.openlibrary.org/b/id/8231995-L.jpg"},
  { title:"Jane Eyre", author:"Charlotte Bronte", genre:"Literature", img:"https://covers.openlibrary.org/b/id/8226191-L.jpg"},
  { title:"Animal Farm", author:"George Orwell", genre:"Literature", img:"https://covers.openlibrary.org/b/id/8231996-L.jpg"},
  { title:"Wuthering Heights", author:"Emily Bronte", genre:"Literature", img:"https://covers.openlibrary.org/b/id/12604555-L.jpg"},
  { title:"The Kite Runner", author:"Khaled Hosseini", genre:"Fiction", img:"https://covers.openlibrary.org/b/id/9874156-L.jpg"},
  { title:"Life of Pi", author:"Yann Martel", genre:"Fiction", img:"https://covers.openlibrary.org/b/id/9874157-L.jpg"},
  { title:"The Chronicles of Narnia", author:"C.S. Lewis", genre:"Fantasy", img:"https://covers.openlibrary.org/b/id/8231997-L.jpg"},
  { title:"Little Women", author:"Louisa May Alcott", genre:"Literature", img:"https://covers.openlibrary.org/b/id/8235117-L.jpg"},
  { title:"Dracula", author:"Bram Stoker", genre:"Horror", img:"https://covers.openlibrary.org/b/id/8235118-L.jpg"},
  { title:"Frankenstein", author:"Mary Shelley", genre:"Horror", img:"https://covers.openlibrary.org/b/id/8235119-L.jpg"},
  { title:"The Odyssey", author:"Homer", genre:"Classic", img:"https://covers.openlibrary.org/b/id/8235120-L.jpg"},
  { title:"The Iliad", author:"Homer", genre:"Classic", img:"https://covers.openlibrary.org/b/id/8235121-L.jpg"},
  { title:"Hamlet", author:"William Shakespeare", genre:"Drama", img:"https://covers.openlibrary.org/b/id/8235122-L.jpg"}
];

function Books() {
  const navigate = useNavigate();
  const [genre, setGenre] = useState("All");

  const addLog = (action, book) => {
    let logs = JSON.parse(localStorage.getItem("activityLogs")) || [];
    logs.push({
      action: action,
      book: book.title,
      time: new Date().toLocaleString()
    });
    localStorage.setItem("activityLogs", JSON.stringify(logs));
  };

  const handleRequest = (book) => {
    let requests = JSON.parse(localStorage.getItem("bookRequests")) || [];
    let reserved = JSON.parse(localStorage.getItem("reservedBooks")) || [];

    if (requests.length >= 3) {
      reserved.push(book);
      localStorage.setItem("reservedBooks", JSON.stringify(reserved));
      addLog("Reserved", book);
      alert(`📌 Borrow limit reached. ${book.title} has been reserved.`);
      return;
    }

    requests.push(book);
    localStorage.setItem("bookRequests", JSON.stringify(requests));
    addLog("Requested", book);

    alert(`📥 ${book.title} requested successfully!`);
  };

  const filteredBooks =
    genre === "All"
      ? booksData
      : booksData.filter(book => book.genre === genre);

  return (
    <div className="library-page">
      <h1 className="library-title">📚 Library Collection</h1>

      <div style={{ textAlign:"center", marginBottom:"30px" }}>
        <select
          value={genre}
          onChange={(e)=>setGenre(e.target.value)}
          style={{
            padding:"10px 18px",
            borderRadius:"8px",
            border:"2px solid #8b5e34",
            background:"#fffaf2",
            color:"#5a3b1e",
            fontWeight:"600"
          }}
        >
          <option value="All">All Genres</option>
          <option>Literature</option>
          <option>Fiction</option>
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Classic</option>
          <option>Drama</option>
        </select>
      </div>

      <div className="library-grid">
        {filteredBooks.map((b,i)=>(
          <div className="book-card" key={i}>
            <img src={b.img} alt={b.title}/>
            <h3>{b.title}</h3>
            <p>{b.author}</p>
            <p style={{fontSize:"12px", color:"#a86f3e"}}>{b.genre}</p>

            <button onClick={()=>navigate("/my-books")}>
              My Books
            </button>

            <button onClick={()=>handleRequest(b)}>
              Request Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Books;
