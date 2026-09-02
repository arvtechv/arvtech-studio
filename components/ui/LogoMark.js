export default function LogoMark({ width = 52, height = 52 }) {
  return (
    <img
      src="/logo.png"
      alt="ARVTECH STUDIO"
      style={{
        width,
        height,
        objectFit: "contain",
        filter: "drop-shadow(0 0 6px rgba(0,102,255,0.35))",
      }}
    />
  );
}
