import { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [genre, setGenre] = useState("");

  const handleLogin = () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    if (role === "Librarian" && !genre) {
      alert("Select genre");
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
    localStorage.setItem("genre", genre);

    if (role === "Admin") navigate("/admin-dashboard");
    if (role === "Librarian") navigate("/librarian-dashboard");
    if (role === "User") navigate("/books");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option>User</option>
          <option>Librarian</option>
          <option>Admin</option>
        </select>

        {role === "Librarian" && (
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Select Genre</option>
            <option>Literature</option>
            <option>Fiction</option>
            <option>Fantasy</option>
            <option>Horror</option>
            <option>Classic</option>
            <option>Drama</option>
          </select>
        )}
        

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
