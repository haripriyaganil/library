import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/trans.png"; // ✅ ADD
<Link to="/members">Members</Link>

function Navbar() {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <img src={logo} alt="BookSphere Logo" className="navbar-logo-img" />
        <span className="navbar-logo-text"></span>
      </div>

      {/* CENTER */}
      <ul className="navbar-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>

        {role === "student" && (
          <li><Link to="/my-books">My Books</Link></li>
        )}

        {role === "librarian" && (
          <li><Link to="/book-management">Book Management</Link></li>
        )}
        {role === "student" && (
  <li><Link to="/my-books">My Books</Link></li>
)}

      </ul>

      {/* RIGHT */}
      <div className="navbar-right">
        {role ? (
          <button onClick={logout} className="nav-btn outline">Logout</button>
        ) : (
          <>
            <Link to="/login" className="nav-btn outline">Login</Link>
            <Link to="/register" className="nav-btn filled">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;