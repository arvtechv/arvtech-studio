export default function LogoMark({ width = 74, height = 56 }) {
  return (
    <img
      src="/logo.png"
      alt="ARVTECH STUDIO"
      style={{ width, height, objectFit: "contain" }}
    />
  );
}
