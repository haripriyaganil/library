import "../styles/Features.css";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();

  return (
    <section className="feature-section">
      <h2 className="feature-title">Explore BookSphere</h2>

      <div className="feature-grid">

        <div className="feature-card-ui" onClick={() => navigate("/book-management")}>
          <span>📘</span>
          <p>Book Management</p>
        </div>

        <div className="feature-card-ui" onClick={() => navigate("/members")}>
          <span>👥</span>
          <p>Member Control</p>
        </div>

        <div className="feature-card-ui" onClick={() => navigate("/issue-tracking")}>
          <span>⏳</span>
          <p>Issue Tracking</p>
        </div>

        <div className="feature-card-ui" onClick={() => navigate("/books")}>
          <span>🔍</span>
          <p>Quick Search</p>
        </div>

        <div className="feature-card-ui" onClick={() => navigate("/books")}>
          <span>📊</span>
          <p>Availability</p>
        </div>

        <div className="feature-card-ui" onClick={() => navigate("/login")}>
          <span>🔐</span>
          <p>Secure Login</p>
        </div>

        <div className="feature-card-ui" onClick={() => navigate("/smart-reports")}>
          <span>📑</span>
          <p>Smart Reports</p>
        </div>

      </div>
    </section>
  );
}

export default Features;
