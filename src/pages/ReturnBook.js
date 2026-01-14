import { useState } from "react";
import "../styles/ReturnBook.css";

function ReturnBook() {
  const [book, setBook] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [fine, setFine] = useState(null);

  const calculateFine = () => {
    if (!book || !issueDate || !returnDate) {
      alert("Fill all fields");
      return;
    }

    const issue = new Date(issueDate);
    const returned = new Date(returnDate);

    const diffTime = returned - issue;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let fineAmount = 0;

    if (diffDays > 7) {
      fineAmount = (diffDays - 7) * 5; // ₹5 per day fine
    }

    setFine(fineAmount);
  };

  return (
    <div className="return-page">
      <h1>📕 Return Book</h1>

      <input
        type="text"
        placeholder="Book Name"
        value={book}
        onChange={(e) => setBook(e.target.value)}
      />

      <input
        type="date"
        value={issueDate}
        onChange={(e) => setIssueDate(e.target.value)}
      />

      <input
        type="date"
        value={returnDate}
        onChange={(e) => setReturnDate(e.target.value)}
      />

      <button onClick={calculateFine}>Calculate Fine</button>

      {fine !== null && (
        <h3>
          {fine === 0 ? "✅ No Fine" : `💰 Fine Amount: ₹${fine}`}
        </h3>
      )}
    </div>
  );
}

export default ReturnBook;
