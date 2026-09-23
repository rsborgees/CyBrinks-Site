import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...props
}) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={isVisible && delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  );
}
