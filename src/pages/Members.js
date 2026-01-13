import React, { useState, useEffect } from "react";
import "../styles/Members.css";

const Members = () => {
  const [members, setMembers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "Student",
    id: "",
  });

  // 🔁 Load members from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("libraryMembers")) || [];
    setMembers(stored);
  }, []);

  // 💾 Save to localStorage
  const saveMembers = (data) => {
    setMembers(data);
    localStorage.setItem("libraryMembers", JSON.stringify(data));
  };

  // ➕ Add member
  const addMember = () => {
    if (!formData.name || !formData.id) {
      alert("Please fill all fields");
      return;
    }

    const updated = [...members, formData];
    saveMembers(updated);

    setFormData({ name: "", role: "Student", id: "" });
    setShowForm(false);
  };

  // ❌ Delete member
  const deleteMember = (index) => {
    const updated = members.filter((_, i) => i !== index);
    saveMembers(updated);
  };

  return (
    <div className="members-page">
      <h1>Manage Student and Staff Records</h1>

      <div className="members-actions">
        <button onClick={() => setShowForm(!showForm)}>
          ➕ Add Member
        </button>
      </div>

      {/* ➕ ADD MEMBER FORM */}
      {showForm && (
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            style={{ margin: "5px", padding: "8px" }}
          />

          <input
            type="text"
            placeholder="ID"
            value={formData.id}
            onChange={(e) =>
              setFormData({ ...formData, id: e.target.value })
            }
            style={{ margin: "5px", padding: "8px" }}
          />

          <select
            value={formData.role}
            onChange={(e) =>
              setFormData({ ...formData, role: e.target.value })
            }
            style={{ margin: "5px", padding: "8px" }}
          >
            <option>Student</option>
            <option>Staff</option>
          </select>

          <br />
          <button onClick={addMember}>Save</button>
        </div>
      )}

      {/* 📋 MEMBER TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>ID</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {members.length === 0 ? (
            <tr>
              <td colSpan="4">No members added</td>
            </tr>
          ) : (
            members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.id}</td>
                <td>
                  <button
                    style={{ background: "crimson", color: "white" }}
                    onClick={() => deleteMember(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
