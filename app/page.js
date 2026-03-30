export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(212,175,55,0.14), transparent 26%), linear-gradient(180deg, #060606 0%, #000000 100%)",
        color: "#fff",
        textAlign: "center",
        paddingTop: "18px",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src="/reborn-logo.png"
        alt="REBORN logo"
        style={{
          width: "360px",
          maxWidth: "92vw",
          height: "auto",
          display: "block",
          margin: "0 auto 6px auto",
          filter: "drop-shadow(0 0 46px rgba(212,175,55,0.38))",
        }}
      />

      <div
        style={{
          color: "#D4AF37",
          fontSize: "54px",
          fontWeight: "bold",
          letterSpacing: "4px",
          lineHeight: 1,
          margin: 0,
        }}
      >
        REBORN
      </div>

      <div
        style={{
          marginTop: "6px",
          marginBottom: "26px",
          fontSize: "17px",
          color: "#bdbdbd",
          letterSpacing: "1px",
        }}
      >
        Rebuild the System
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          margin: "0 auto 18px auto",
          padding: "26px 20px",
          borderRadius: "24px",
          border: "1px solid rgba(212,175,55,0.22)",
          background:
            "linear-gradient(180deg, rgba(14,14,14,0.96), rgba(8,8,8,0.96))",
          boxShadow: "0 0 30px rgba(0,0,0,0.35)",
        }}
      >
        <div
          style={{
            color: "#D4AF37",
            fontSize: "26px",
            fontWeight: "bold",
            marginBottom: "18px",
          }}
        >
          Wallet Access
        </div>

        <div
          style={{
            color: "#bdbdbd",
            fontSize: "14px",
            lineHeight: 1.5,
            marginBottom: "16px",
          }}
        >
          Connect your wallet to unlock early access, secure your place, and
          prepare for the first REBORN wave.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            padding: "14px 16px",
            marginBottom: "12px",
            borderRadius: "14px",
            border: "1px solid rgba(212,175,55,0.14)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
                marginBottom: "4px",
              }}
            >
              Wallet Status
            </div>
            <div style={{ color: "#8f8f8f", fontSize: "13px" }}>
              Not connected
            </div>
          </div>

          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "999px",
              background: "#8a6a2a",
              boxShadow: "0 0 10px rgba(212,175,55,0.35)",
            }}
          />
        </div>

        <button
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(180deg, #d4af37, #9a7436)",
            color: "#111",
            fontWeight: "bold",
            fontSize: "16px",
            boxShadow: "0 0 20px rgba(212,175,55,0.25)",
            cursor: "pointer",
          }}
        >
          Connect Wallet
        </button>

        <div
          style={{
            marginTop: "12px",
            color: "#8f8f8f",
            fontSize: "12px",
            lineHeight: 1.5,
          }}
        >
          Compatible with MetaMask and Ethereum wallets.
        </div>
      </div>
    </div>
  );
}
