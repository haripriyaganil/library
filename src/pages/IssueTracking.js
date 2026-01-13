import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/IssueTracking.css";

function IssueTracking() {
  const [issues, setIssues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    setIssues(data);
  }, []);

  return (
    <div className="issue-page">
      <h1>⏳ Issue Tracking</h1>
      <p>List of issued books</p>

      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Member ID</th>
            <th>Issue Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {issues.length === 0 ? (
            <tr>
              <td colSpan="4">No books issued yet</td>
            </tr>
          ) : (
            issues.map((item, index) => (
              <tr key={index}>
                <td>{item.bookName}</td>
                <td>{item.memberId}</td>
                <td>{item.issueDate}</td>
                <td className="issued">{item.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <button
        style={{ marginTop: "25px" }}
        onClick={() => navigate("/issue-booking")}
      >
        ➕ Issue New Book
      </button>
    </div>
  );
}

export default IssueTracking;
