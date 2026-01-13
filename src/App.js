import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import Members from "./pages/Members";
import SplashScreen from "./components/SplashScreen";
import BookManagement from "./pages/BookManagement";
import IssueTracking from "./pages/IssueTracking";
import IssueBooking from "./pages/IssueBooking"; // ✅ MISSING IMPORT FIXED
import QuickSearch from "./pages/QuickSearch";
import AvailabilityStatus from "./pages/AvailabilityStatus";
import SecureLoginInfo from "./pages/SecureLoginInfo";
import SmartReports from "./pages/SmartReports";
import MyBooks from "./pages/MyBooks";
import ReturnBook from "./pages/ReturnBook";
import LibrarianDashboard from "./pages/LibrarianDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LibrarianDomain from "./pages/LibrarianDomain";

function App() {
  const [loading, setLoading] = useState(true);
  const role = localStorage.getItem("role");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />

        {/* PAGES */}
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        <Route path="/issue-tracking" element={<IssueTracking />} />
        <Route path="/issue-booking" element={<IssueBooking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
<Route path="/quick-search" element={<QuickSearch />} />
<Route path="/availability-status" element={<AvailabilityStatus />} />
<Route path="/secure-login" element={<SecureLoginInfo />} />
<Route path="/smart-reports" element={<SmartReports />} />
<Route path="/my-books" element={<MyBooks />} />
<Route path="/return-book" element={<ReturnBook />} />
<Route path="/admin-dashboard" element={<AdminDashboard />} />
<Route path="/librarian-domain" element={<LibrarianDomain />} />

        {/* ROLE PROTECTED */}
        <Route
          path="/book-management"
          element={
            role === "librarian" ? (
              <BookManagement />
            ) : (
              <Navigate to="/books" />
            )
          }
        />
      </Routes>
      
    </>
  );
}

export default App;
