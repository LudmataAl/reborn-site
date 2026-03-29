export default function Home() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: radial-gradient(circle at top, #111 0%, #000 70%);
          font-family: Arial, sans-serif;
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 24px 18px 40px;
        }

        .logo {
          width: 300px;
          max-width: 85vw;
          height: auto;
          margin-bottom: 20px;
          filter: drop-shadow(0 0 20px rgba(181,140,74,0.25));
        }

        .title {
          color: #b58c4a;
          font-size: 48px;
          letter-spacing: 6px;
          margin: 0;
        }

        .subtitle {
          color: rgba(214,197,166,0.8);
          margin-top: 10px;
          margin-bottom: 40px;
        }

        .card {
          background: #0a0a0a;
          border: 1px solid rgba(181,140,74,0.3);
          border-radius: 20px;
          padding: 25px;
          max-width: 320px;
          margin-bottom: 30px;
        }

        .card h2 {
          color: #b58c4a;
        }

        .card p {
          color: #ccc;
        }

        .btn {
          padding: 15px 30px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(#c8a15d, #9a7436);
          font-weight: bold;
          font-size: 18px;
        }
      `}</style>

      <div className="container">
        <img src="/reborn-logo.png" alt="REBORN logo" className="logo" />

        <h1 className="title">REBORN</h1>
        <div className="subtitle">Rebuild the System</div>

        <div className="card">
          <h2>Mining System</h2>
          <p>Halving every 90 days</p>
          <p>Participation-based rewards</p>
