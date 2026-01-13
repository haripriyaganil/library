function AdminDashboard() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>👑 Admin Dashboard</h1>

      <p>Admin has full system control.</p>

      <ul style={{ listStyle: "none" }}>
        <li>✔ View all librarians</li>
        <li>✔ View all domains</li>
        <li>✔ Monitor system</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
