import "../styles/InfoCards.css";
import { FaBook, FaClock, FaUserTie, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

function InfoCards() {
  const navigate = useNavigate(); // ✅ ADD THIS
  
  return (
    <section className="info-section">
      <div className="info-card">
        <h4>
          <FaBook className="info-icon" />
          Categories
        </h4>
        <p>Science, Technology, Arts, Fiction, History</p>
      </div>

      <div className="info-card">
        <h4>
          <FaClock className="info-icon" />
          Library Hours
        </h4>
        <p>
          Mon – Sat <br />
          9:00 AM – 6:00 PM
        </p>
      </div>

      <div className="info-card">
        <h4>
          <FaUserTie className="info-icon" />
          Librarians
        </h4>
        <p>Professional staff available for guidance</p>
      </div>

      <div className="info-card">
        <h4>
          <FaStar className="info-icon" />
          Popular Books
        </h4>
        <p>AI, Data Structures, DBMS, Networking</p>
      </div>

      {/* ✅ NEW CARD ONLY */}
      <div
        className="info-card"
        onClick={() => navigate("/members")}
        style={{ cursor: "pointer" }}
      >
        <h4>
          <FaUserTie className="info-icon" />
          Member Control
        </h4>
        <p>Manage student and staff records</p>
      </div>
    </section>
  );
}

export default InfoCards;
