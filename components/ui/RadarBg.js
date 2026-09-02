export default function RadarBg() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: 480,
        height: 480,
        pointerEvents: "none",
      }}
    >
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: i * 110,
            height: i * 110,
            border: "1px solid rgba(255,85,0,0.12)",
            borderRadius: "50%",
            animation: `pulse ${2.5 + i * 0.5}s ease-in-out infinite`,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(255,85,0,0.1)",
          transform: "translateY(-50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          background: "rgba(255,85,0,0.1)",
          transform: "translateX(-50%)",
        }}
      />
    </div>
  );
}
