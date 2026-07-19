import { useState } from 'react';
import { ChevronIcon } from '../components/icons';
import { CARD_BORDER, INK, FAINT, MUTED, NAVY, ROW_DIVIDER, TEAL } from '../theme';

interface Pet {
  initial: string;
  name: string;
  info: string;
  bg: string;
  color: string;
}

const PETS: Pet[] = [
  { initial: 'M', name: 'Milo', info: 'Dog · Beagle · 4 yrs', bg: 'rgba(31,122,104,.12)', color: TEAL },
  { initial: 'L', name: 'Luna', info: 'Cat · Shorthair · 2 yrs', bg: 'rgba(39,71,84,.1)', color: NAVY },
];

const rowStyle: React.CSSProperties = {
  padding: '14px 16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export function ProfileScreen() {
  const [recallAlerts, setRecallAlerts] = useState(true);
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '76px 20px 120px' }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: -0.4, marginBottom: 16 }}>Your pets</div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 26 }}>
        {PETS.map((pet) => (
          <div key={pet.name} style={{ flex: 1, background: '#fff', borderRadius: 18, padding: 16, border: CARD_BORDER }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: pet.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 700,
                color: pet.color,
              }}
            >
              {pet.initial}
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: INK, marginTop: 10 }}>{pet.name}</div>
            <div style={{ fontSize: 12, color: MUTED, marginTop: 1 }}>{pet.info}</div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: 14, fontWeight: 600, color: INK, marginBottom: 10 }}>Settings</div>
      <div style={{ background: '#fff', borderRadius: 18, border: CARD_BORDER, overflow: 'hidden' }}>
        <div style={{ ...rowStyle, borderBottom: ROW_DIVIDER }}>
          <div style={{ fontSize: 14, color: INK }}>Recall alerts</div>
          <div
            className="press"
            onClick={() => setRecallAlerts((v) => !v)}
            style={{
              width: 44,
              height: 26,
              borderRadius: 99,
              background: recallAlerts ? TEAL : 'rgba(23,36,43,.15)',
              position: 'relative',
              transition: 'background 0.15s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 2,
                left: recallAlerts ? 20 : 2,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: '#fff',
                transition: 'left 0.15s ease',
              }}
            />
          </div>
        </div>
        <div style={{ ...rowStyle, borderBottom: ROW_DIVIDER }}>
          <div style={{ fontSize: 14, color: INK }}>Data sources</div>
          <div style={{ fontSize: 13, color: FAINT }}>AAFCO, FDA</div>
        </div>
        <div style={rowStyle}>
          <div style={{ fontSize: 14, color: INK }}>About scoring</div>
          <ChevronIcon />
        </div>
      </div>
    </div>
  );
}
