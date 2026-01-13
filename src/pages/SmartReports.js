import { useEffect, useState } from "react";

function SmartReports() {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);

  useEffect(() => {
    const issued = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    const allBooks = JSON.parse(localStorage.getItem("libraryBooks")) || [];

    setIssuedBooks(issued);
    setTotalBooks(allBooks.length);
  }, []);

  const overdueCount = issuedBooks.filter(b => b.status === "Overdue").length;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📊 Smart Reports</h1>
      <p>Library Activity Summary</p>

      {/* SUMMARY CARDS */}
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "30px" }}>
        <ReportBox title="Total Books" value={totalBooks} />
        <ReportBox title="Issued Books" value={issuedBooks.length} />
        <ReportBox title="Overdue Books" value={overdueCount} />
      </div>

      {/* REPORT TABLE */}
      <h2 style={{ marginTop: "40px" }}>Issued Books Report</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Member ID</th>
            <th>Issue Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {issuedBooks.length === 0 ? (
            <tr>
              <td colSpan="4">No issued books found</td>
            </tr>
          ) : (
            issuedBooks.map((b, i) => (
              <tr key={i}>
                <td>{b.bookName}</td>
                <td>{b.memberId}</td>
                <td>{b.issueDate}</td>
                <td style={{ color: b.status === "Overdue" ? "red" : "green" }}>
                  {b.status}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <p style={{ marginTop: "25px" }}>
        Smart Reports help librarians analyze library usage and book demand.
      </p>
    </div>
  );
}

function ReportBox({ title, value }) {
  return (
    <div style={boxStyle}>
      <h3>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}

const tableStyle = {
  margin: "25px auto",
  borderCollapse: "collapse",
  width: "80%"
};

const boxStyle = {
  padding: "20px",
  background: "#f1f5ff",
  borderRadius: "12px",
  width: "180px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default SmartReports;
