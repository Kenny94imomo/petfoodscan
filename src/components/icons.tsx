export function BarcodeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="2" height="12" rx="1" fill="#fff" />
      <rect x="7" y="6" width="1.4" height="12" rx=".7" fill="#fff" />
      <rect x="10.5" y="6" width="2.6" height="12" rx="1" fill="#fff" />
      <rect x="15" y="6" width="1.4" height="12" rx=".7" fill="#fff" />
      <rect x="19" y="6" width="2" height="12" rx="1" fill="#fff" />
    </svg>
  );
}

export function ChevronIcon({ color = 'rgba(23,36,43,.25)' }: { color?: string }) {
  return (
    <svg width="7" height="12" viewBox="0 0 7 12">
      <path d="M1 1l5 5-5 5" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ color = '#fff', size = 12 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12">
      <path d="M1 1l10 10M11 1L1 11" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BackIcon() {
  return (
    <svg width="9" height="15" viewBox="0 0 9 15">
      <path d="M8 1L1.5 7.5 8 14" stroke="#17242b" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function HomeIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 9.5L11 3l8 6.5V19h-5.5v-5h-5v5H3V9.5z" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="8" stroke={color} strokeWidth="1.8" />
      <path d="M11 6.5V11l3 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="7.5" r="3.5" stroke={color} strokeWidth="1.8" />
      <path d="M4 18.5c1.2-3 3.8-4.5 7-4.5s5.8 1.5 7 4.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
