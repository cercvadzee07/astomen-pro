/** Astroman planet logo (inherits text color) */
export default function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M 18 12 Q 18 16 14 16 Q 18 16 18 20 Q 18 16 22 16 Q 18 16 18 12 Z"
        fill="currentColor"
      />
      <path
        d="M 78 8 Q 78 13 73 13 Q 78 13 78 18 Q 78 13 83 13 Q 78 13 78 8 Z"
        fill="currentColor"
      />
      <path
        d="M 6 29 Q 6 32 3 32 Q 6 32 6 35 Q 6 32 9 32 Q 6 32 6 29 Z"
        fill="currentColor"
      />
      <path
        d="M 84 38 Q 84 41 81 41 Q 84 41 84 44 Q 84 41 87 41 Q 84 41 84 38 Z"
        fill="currentColor"
      />
      <path
        d="M 28 50 Q 28 53 25 53 Q 28 53 28 56 Q 28 53 31 53 Q 28 53 28 50 Z"
        fill="currentColor"
      />

      <circle cx="48" cy="30" r="18" fill="currentColor" />
      <ellipse
        cx="48"
        cy="31"
        rx="42"
        ry="11"
        stroke="currentColor"
        strokeWidth="3.2"
        fill="none"
        transform="rotate(-15 48 31)"
      />
      <ellipse
        cx="48"
        cy="31"
        rx="36"
        ry="8.5"
        stroke="#050508"
        strokeWidth="2"
        fill="none"
        transform="rotate(-15 48 31)"
      />
    </svg>
  );
}
