function SmartReports() {
  const issued = JSON.parse(localStorage.getItem("issuedBooks")) || [];
  const returned = JSON.parse(localStorage.getItem("returnedBooks")) || [];
  const fines = JSON.parse(localStorage.getItem("fines")) || [];

  const totalFine = fines.reduce((sum, f) => sum + f, 0);

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>📊 Smart Reports</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
        maxWidth: "600px",
        margin: "0 auto"
      }}>
        <div className="report-card">📚 Issued Books: {issued.length}</div>
        <div className="report-card">📕 Returned Books: {returned.length}</div>
        <div className="report-card">💰 Total Fine: ₹{totalFine}</div>
        <div className="report-card">⏰ Overdue: {issued.length - returned.length}</div>
      </div>
    </div>
  );
}

export default SmartReports;
