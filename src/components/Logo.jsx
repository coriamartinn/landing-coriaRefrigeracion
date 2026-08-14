import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";

export default function Logo({ variant = "dark", height = 36 }) {
  const src = variant === "light" ? logoWhite : logoBlack;
  return (
    <img
      src={src}
      alt="Coria Refrigeración"
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
