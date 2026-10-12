export function BrandMark({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? "/brand/emblem-light.svg" : "/brand/emblem.svg";
  return (
    <img className={`brand-mark ${className}`.trim()} src={src} alt="" width={32} height={32} />
  );
}
