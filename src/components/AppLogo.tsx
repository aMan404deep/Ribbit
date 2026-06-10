export function AppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="44" stroke="#A2D7D0" strokeWidth="6" />
      <circle cx="50" cy="50" r="32" stroke="#F592C6" strokeWidth="6" />
      <circle cx="50" cy="50" r="20" stroke="#41AB9D" strokeWidth="6" />
      <path d="M 50 37 Q 56 37 58 42 Q 63 44 63 50 Q 63 56 58 58 Q 56 63 50 63 Q 44 63 42 58 Q 37 56 37 50 Q 37 44 42 42 Q 44 37 50 37 Z" stroke="#E64A8D" strokeWidth="5" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="4" fill="#2E9E8D" />
    </svg>
  );
}
