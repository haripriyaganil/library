import { useEffect, useState } from "react";

function ApproveRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookRequests")) || [];
    setRequests(data);
  }, []);

  const approveBook = (book, index) => {
    let issued = JSON.parse(localStorage.getItem("issuedBooks")) || [];
    issued.push({
      bookName: book.title,
      issueDate: new Date().toLocaleDateString(),
      status: "Issued",
      memberId: localStorage.getItem("username")
    });

    localStorage.setItem("issuedBooks", JSON.stringify(issued));

    removeRequest(index);
  };

  const rejectBook = (index) => {
    removeRequest(index);
  };

  const removeRequest = (index) => {
    const updated = requests.filter((_, i) => i !== index);
    localStorage.setItem("bookRequests", JSON.stringify(updated));
    setRequests(updated);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>📥 Book Requests</h1>

      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <table style={{ margin: "0 auto", width: "70%" }}>
          <thead>
            <tr>
              <th>Book</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((b, i) => (
              <tr key={i}>
                <td>{b.title}</td>
                <td>{b.genre}</td>
                <td>
                  <button onClick={() => approveBook(b, i)}>Approve</button>
                  <button onClick={() => rejectBook(i)} style={{ marginLeft: "10px" }}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApproveRequests;
