import { useNavigate } from "react-router-dom";

function LibrarianDashboard() {
  const navigate = useNavigate();

  const requests = JSON.parse(localStorage.getItem("bookRequests")) || [];

  return (
    <div className="dashboard-page">
      <h1>📚 Librarian Dashboard</h1>

      <button
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#8b5e34",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer"
        }}
        onClick={() => navigate("/approve-requests")}
      >
        Approve Requests
      </button>

      <h3>Book Requests</h3>

      {requests.length === 0 ? (
        <p>No requests yet</p>
      ) : (
        <ul>
          {requests.map((b, i) => (
            <li key={i}>
              {b.title} — {b.author} ({b.genre})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LibrarianDashboard;
