"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function MainPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const user = searchParams.get("user") || "User";
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // Clear any auth state/cookies here if needed
    router.push("/");
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #36d1c4 0%, #5b86e5 100%)" }}>
      {/* Navigation Bar */}
      <nav style={{
        width: "100%",
        background: "#fff",
        padding: "0.75rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100
      }}>
        <div style={{ fontWeight: 700, fontSize: "1.25rem", letterSpacing: "1px" }}>
          POS Till App
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a href="#" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Dashboard</a>
          <a href="#" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Sales</a>
          <a href="#" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Inventory</a>
          <a href="#" style={{ textDecoration: "none", color: "#222", fontWeight: 500 }}>Reports</a>
          <div style={{ position: "relative" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#222",
                fontWeight: 500,
                cursor: "pointer",
                padding: 0
              }}
              onClick={() => setMenuOpen((open) => !open)}
            >
              Settings ⚙️
            </button>
            {menuOpen && (
              <div style={{
                position: "absolute",
                top: "2rem",
                right: 0,
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "8px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                minWidth: "160px",
                zIndex: 10
              }}>
                <a href="#" style={{ display: "block", padding: "0.75rem 1rem", color: "#222", textDecoration: "none" }}>User Profile</a>
                <a href="#" style={{ display: "block", padding: "0.75rem 1rem", color: "#222", textDecoration: "none" }}>Till Settings</a>
                <a href="#" style={{ display: "block", padding: "0.75rem 1rem", color: "#222", textDecoration: "none" }}>Printer Setup</a>
              </div>
            )}
          </div>
          <span style={{ color: "#36d1c4", fontWeight: 600 }}>{user}</span>
          <button
            onClick={handleLogout}
            style={{
              background: "#36d1c4",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "0.5rem 1.25rem",
              fontWeight: 600,
              cursor: "pointer"
            }}
          >
            Log out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "5rem"
      }}>
        <div style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          minWidth: "350px",
          textAlign: "center"
        }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Welcome, {user}! 🎉
          </h1>
          <p style={{ color: "#555", marginBottom: "2rem" }}>
            You have successfully logged in to your POS Till App.
          </p>
          <div style={{ textAlign: "left" }}>
            <h3>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#36d1c4", textDecoration: "none" }}>Start New Sale</a></li>
              <li><a href="#" style={{ color: "#36d1c4", textDecoration: "none" }}>View Inventory</a></li>
              <li><a href="#" style={{ color: "#36d1c4", textDecoration: "none" }}>Daily Report</a></li>
              <li><a href="#" style={{ color: "#36d1c4", textDecoration: "none" }}>Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}