import { useNavigate } from "react-router-dom";

function LibrarianDashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📚 Librarian Control Panel</h1>
      <p>Manage library operations from one place</p>

      <div style={gridStyle}>
        <button style={btnStyle} onClick={() => navigate("/book-management")}>
          📘 Manage Books
        </button>

        <button style={btnStyle} onClick={() => navigate("/members")}>
          👥 Manage Members
        </button>

        <button style={btnStyle} onClick={() => navigate("/issue-tracking")}>
          ⏳ Issue Tracking
        </button>

        <button style={btnStyle} onClick={() => navigate("/return-book")}>
          📕 Return Books
        </button>

        <button style={btnStyle} onClick={() => navigate("/smart-reports")}>
          📊 Smart Reports
        </button>
      </div>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "40px"
};

const btnStyle = {
  padding: "20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "12px",
  fontSize: "16px",
  cursor: "pointer"
};

export default LibrarianDashboard;
