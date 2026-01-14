import { useState, useEffect } from "react";

function AdminLibrarians() {
  const [librarians, setLibrarians] = useState([]);
  const [name, setName] = useState("");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("librarians")) || [];
    setLibrarians(saved);
  }, []);

  const addLibrarian = () => {
    if (!name || !domain) {
      alert("Enter name and domain");
      return;
    }

    const newLib = { name, domain };

    const updated = [...librarians, newLib];
    setLibrarians(updated);
    localStorage.setItem("librarians", JSON.stringify(updated));

    setName("");
    setDomain("");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>👑 Admin - Librarian Management</h1>

      <div style={{ margin: "20px" }}>
        <input
          placeholder="Librarian Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={domain} onChange={(e) => setDomain(e.target.value)}>
          <option value="">Select Domain</option>
          <option>Literature</option>
          <option>Fiction</option>
          <option>Fantasy</option>
          <option>Horror</option>
          <option>Classic</option>
          <option>Drama</option>
        </select>

        <button onClick={addLibrarian}>Add Librarian</button>
      </div>

      <h3>Registered Librarians</h3>

      {librarians.map((l, i) => (
        <p key={i}>
          👤 {l.name} — 📚 {l.domain}
        </p>
      ))}
    </div>
  );
}

export default AdminLibrarians;
