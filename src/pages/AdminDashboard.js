import "../styles/AdminDashboard.css";

const librarians = [
  { name: "Anu", domain: "Literature" },
  { name: "Rahul", domain: "Fiction" },
  { name: "Meera", domain: "Fantasy" },
  { name: "Kiran", domain: "Horror" },
  { name: "Sita", domain: "Classic" },
  { name: "Arjun", domain: "Drama" }
];


function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      <h1>👑 Admin Dashboard</h1>
      <p>Admin has full system control</p>

      <h2>Librarians List</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
          </tr>
        </thead>

        <tbody>
          {librarians.map((lib, index) => (
            <tr key={index}>
              <td>{lib.name}</td>
              <td>{lib.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default AdminDashboard;
