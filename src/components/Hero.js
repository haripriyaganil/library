import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";


const trendingBooks = [
  {
    title: "To Kill a Mockingbird",
    img: "https://covers.openlibrary.org/b/id/9874155-L.jpg"
  },
  {
    title: "1984",
    img: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    title: "The Great Gatsby",
    img: "https://covers.openlibrary.org/b/id/5890771-L.jpg"
  },
  {
    title: "The Catcher in the Rye",
    img: "https://covers.openlibrary.org/b/id/8231995-L.jpg"
  },
  {
    title: "Harry Potter",
    img: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
  },
  {
    title: "The Hobbit",
    img: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
  },
  {
    title: "The Alchemist",
    img: "https://covers.openlibrary.org/b/id/8128691-L.jpg"
  },
  {
    title: "The Book Thief",
    img: "https://covers.openlibrary.org/b/id/8235116-L.jpg"
  }
];

function Hero() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay">
<h1>BookSphere – Smart Library Platform</h1>

          <p>Your gateway to organized and intelligent learning</p>

          <div className="hero-search">
            <input placeholder="Enter keyword to search collection..." />
            <button onClick={() => navigate("/books")}>Search</button>
          </div>
        </div>
      </div>

      {/* TRENDING BOOKS */}
      <section className="trending-section">
        <h2>🔥 Trending Books</h2>

        <div className="trending-grid">
          {trendingBooks.map((book, index) => (
            <div className="trend-card" key={index}>
              <img src={book.img} alt={book.title} />
              <p>{book.title}</p>
              <button onClick={() => navigate("/books")}>View</button>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <h2>About BookSphere</h2>
        <p>
          BookSphere is a modern library management system designed to simplify
          book handling, member management and issue tracking using a smart
          digital interface.
        </p>
      </section>
    </>
  );
}

export default Hero;
