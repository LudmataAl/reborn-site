export default function Home() {
  return (
    <div style={{
      background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      color: "white",
      padding: "20px"
    }}>

      {/* LOGO */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{
          fontSize: "100px",
          letterSpacing: "10px",
          margin: "0",
          background: "linear-gradient(180deg, #d4af37, #8c6b1f)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 25px rgba(212,175,55,0.3)"
        }}>
          REBORN
        </h1>

        <p style={{
          marginTop: "15px",
          fontSize: "20px",
          color: "#aaa",
          letterSpacing: "2px"
        }}>
          Rebuild the System
        </p>
      </div>

      {/* CARD */}
      <div style={{
        marginTop: "70px",
        padding: "40px",
        borderRadius: "25px",
        border: "1px solid rgba(212,175,55,0.25)",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        textAlign: "center",
        maxWidth: "600px",
        width: "100%"
      }}>
        <h2 style={{ 
          color: "#d4af37",
          marginBottom: "15px"
        }}>
          Mining System
        </h2>

        <p style={{ color: "#ccc" }}>
          Halving every 90 days
        </p>

        <p style={{ color: "#ccc" }}>
          Participation-based rewards
        </p>
      </div>

      {/* BUTTON */}
      <button style={{
        marginTop: "50px",
        padding: "18px 50px",
        borderRadius: "14px",
        border: "none",
        fontSize: "18px",
        fontWeight: "bold",
        background: "linear-gradient(180deg, #d4af37, #8c6b1f)",
        color: "black",
        boxShadow: "0 0 30px rgba(212,175,55,0.4)",
        cursor: "pointer",
        transition: "0.3s"
      }}>
        Join Early Access
      </button>

    </div>
  )
        }
