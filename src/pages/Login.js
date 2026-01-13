import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");
  const [domain, setDomain] = useState("Literature");

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("username", email);
    localStorage.setItem("role", role);
    localStorage.setItem("domain", domain);

    if (role === "admin") navigate("/admin-dashboard");
    else if (role === "librarian") navigate("/librarian-domain");
    else navigate("/books");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="librarian">Librarian</option>
          <option value="admin">Admin</option>
        </select>

        {role === "librarian" && (
          <select onChange={(e) => setDomain(e.target.value)}>
            <option>Literature</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>Computer Science</option>
          </select>
        )}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
