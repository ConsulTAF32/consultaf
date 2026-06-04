type IconProps = { className?: string };

const base = "h-7 w-7";

export function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    chart: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="M8 17v-5M12 17V8M16 17v-7M20 17V6" />
      </>
    ),
    flow: (
      <>
        <rect x="4" y="4" width="6" height="5" rx="1" />
        <rect x="14" y="15" width="6" height="5" rx="1" />
        <path d="M7 9v4a2 2 0 0 0 2 2h5" />
      </>
    ),
    coins: (
      <>
        <ellipse cx="9" cy="7" rx="5" ry="2.5" />
        <path d="M4 7v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V7" />
        <path d="M14 12.5c.6.3 1.6.5 2.5.5 2.8 0 5-1.1 5-2.5V8" />
        <ellipse cx="16.5" cy="8" rx="3.5" ry="2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    building: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-5h6v5" />
        <path d="M9 11h.01M15 11h.01" />
      </>
    ),
    check: <path d="M5 12l4 4L19 6" />,
    phone: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M3 21l1.6-5A8.5 8.5 0 1 1 8 19.4L3 21z" />
        <path d="M9 8.5c0 4 3 6.5 6 6.5.6-1 .8-1.5.8-1.5l-2-1-1 1c-1.2-.5-2-1.3-2.5-2.5l1-1-1-2s-.5.2-1.3 .5z" />
      </>
    ),
  };

  return (
    <svg
      className={className ?? base}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] ?? icons.chart}
    </svg>
  );
}
