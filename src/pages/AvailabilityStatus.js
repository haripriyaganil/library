function AvailabilityStatus() {
  const books = JSON.parse(localStorage.getItem("libraryBooks")) || [];

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📗 Availability Status</h1>

      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <table style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>Book</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b, i) => (
              <tr key={i}>
                <td>{b.title}</td>
                <td style={{ color: b.status === "Available" ? "green" : "red" }}>
                  {b.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AvailabilityStatus;
