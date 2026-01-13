function SecureLoginInfo() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>🔐 Secure Login System</h1>

      <p>
        BookSphere uses a secure role-based authentication system to protect
        library data and control user access.
      </p>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        <li>✔ Separate login for Students and Librarians</li>
        <li>✔ Librarians get access to management features</li>
        <li>✔ Students can only view and search books</li>
        <li>✔ Unauthorized users are redirected automatically</li>
        <li>✔ Logout clears session securely</li>
      </ul>

      <p style={{ marginTop: "25px" }}>
        This ensures privacy, safety, and proper access control inside the
        library management system.
      </p>
    </div>
  );
}

export default SecureLoginInfo;
