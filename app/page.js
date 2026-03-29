export default function Home() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #000;
          font-family: Arial, sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px 16px 40px;
          background:
            radial-gradient(circle at top, rgba(212,175,55,0.08), transparent 35%),
            radial-gradient(circle at center, #0a0a0a 0%, #000 100%);
          color: white;
          text-align: center;
        }

        .logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 720px;
        }

        .symbol {
          width: 72px;
          height: 72px;
          margin-bottom: 18px;
          position: relative;
        }

        .triangle {
          width: 0;
          height: 0;
          border-left: 36px solid transparent;
          border-right: 36px solid transparent;
          border-top: 62px solid #9f7a1c;
          filter: drop-shadow(0 0 14px rgba(212,175,55,0.22));
        }

        .brand {
          margin: 0;
          font-size: clamp(42px, 13vw, 96px);
          line-height: 1;
          letter-spacing: clamp(4px, 1.8vw, 12px);
          font-weight: 800;
          background: linear-gradient(180deg, #d4af37 0%, #8f6b17 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 20px rgba(212,175,55,0.18);
          word-break: break-word;
        }

        .tagline {
          margin-top: 14px;
          font-size: clamp(18px, 4vw, 24px);
          color: rgba(255,255,255,0.72);
          letter-spacing: 1px;
        }

        .card {
          width: 100%;
          max-width: 640px;
          margin-top: 44px;
          padding: 28px 22px;
          border-radius: 24px;
          border: 1px solid rgba(212,175,55,0.22);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 30px rgba(0,0,0,0.35);
        }

        .card h2 {
          margin: 0 0 14px;
          font-size: clamp(28px, 7vw, 44px);
          color: #c9a12d;
        }

        .card p {
          margin: 10px 0;
          color: rgba(255,255,255,0.78);
          font-size: clamp(18px, 4.2vw, 24px);
          line-height: 1.45;
        }

        .btn {
          margin-top: 34px;
          padding: 16px 30px;
          min-width: 220px;
          max-width: 100%;
          border: none;
          border-radius: 16px;
          font-size: clamp(18px, 4.5vw, 22px);
          font-weight: 700;
          color: #111;
          background: linear-gradient(180deg, #d4af37 0%, #9e791d 100%);
          box-shadow: 0 0 24px rgba(212,175,55,0.24);
        }

        @media (min-width: 768px) {
          .page {
            padding: 48px 24px 60px;
          }

          .symbol {
            width: 92px;
            height: 92px;
            margin-bottom: 22px;
          }

          .triangle {
            border-left: 46px solid transparent;
            border-right: 46px solid transparent;
            border-top: 78px solid #9f7a1c;
          }

          .card {
            margin-top: 54px;
            padding: 36px 32px;
          }

          .btn {
            margin-top: 40px;
          }
        }
      `}</style>

      <div className="page">
        <div className="logo-wrap">
          <div className="symbol">
            <div className="triangle" />
          </div>

          <h1 className="brand">REBORN</h1>
          <div className="tagline">Rebuild the System</div>
        </div>

        <div className="card">
          <h2>Mining System</h2>
          <p>Halving every 90 days</p>
          <p>Participation-based rewards</p>
        </div>

        <button className="btn">Join Early Access</button>
      </div>
    </>
  )
}
