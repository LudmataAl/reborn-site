export default function Home() {
  return (
    <div style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      textAlign: "center",
      padding: "50px"
    }}>
      
      <h1 style={{ color: "#D4AF37", fontSize: "60px" }}>
        REBORN
      </h1>

      <p style={{ marginTop: "20px", fontSize: "20px" }}>
        Rebuild the System
      </p>

      <div style={{
        marginTop: "60px",
        padding: "30px",
        border: "1px solid #D4AF37",
        borderRadius: "20px"
      }}>
        <h2>Mining System</h2>
        <p>Halving every 90 days</p>
        <p>Participation-based rewards</p>
      </div>

      <button style={{
        marginTop: "40px",
        padding: "15px 30px",
        background: "#D4AF37",
        color: "black",
        border: "none",
        borderRadius: "10px",
        fontSize: "16px"
      }}>
        Join Early Access
      </button>

    </div>
  )
}
