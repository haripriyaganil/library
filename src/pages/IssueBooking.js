import { useState } from "react";

function IssueBooking() {
  const [memberId, setMemberId] = useState("");
  const [bookName, setBookName] = useState("");
  const [issueDate, setIssueDate] = useState("");

  const handleIssue = () => {
    if (!memberId || !bookName || !issueDate) {
      alert("Please fill all fields");
      return;
    }

    const newIssue = {
      memberId,
      bookName,
      issueDate,
      status: "Issued"
    };

    const existing = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    existing.push(newIssue);
    localStorage.setItem("issuedBooks", JSON.stringify(existing));

    alert("Book Issued Successfully ✅");

    setMemberId("");
    setBookName("");
    setIssueDate("");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📘 Issue Book</h1>

      <input
        placeholder="Member ID"
        value={memberId}
        onChange={(e) => setMemberId(e.target.value)}
        style={inputStyle}
      />

      <br /><br />

      <input
        placeholder="Book Name"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
        style={inputStyle}
      />

      <br /><br />

      <input
        type="date"
        value={issueDate}
        onChange={(e) => setIssueDate(e.target.value)}
        style={inputStyle}
      />

      <br /><br />

      <button onClick={handleIssue} style={btnStyle}>
        Confirm Issue
      </button>
    </div>
  );
}

const inputStyle = {
  padding: "10px",
  width: "250px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const btnStyle = {
  padding: "10px 22px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default IssueBooking;
