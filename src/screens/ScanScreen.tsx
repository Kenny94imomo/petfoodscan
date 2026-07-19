import { CloseIcon } from '../components/icons';
import { MONO, SCAN_BG, TEAL, TEAL_BRIGHT } from '../theme';

interface ScanScreenProps {
  scanning: boolean;
  onClose: () => void;
  onShutter: () => void;
}

const cornerBase: React.CSSProperties = { position: 'absolute', width: 28, height: 28 };
const corners: React.CSSProperties[] = [
  { ...cornerBase, top: 0, left: 0, borderTop: `3px solid ${TEAL_BRIGHT}`, borderLeft: `3px solid ${TEAL_BRIGHT}`, borderRadius: '8px 0 0 0' },
  { ...cornerBase, top: 0, right: 0, borderTop: `3px solid ${TEAL_BRIGHT}`, borderRight: `3px solid ${TEAL_BRIGHT}`, borderRadius: '0 8px 0 0' },
  { ...cornerBase, bottom: 0, left: 0, borderBottom: `3px solid ${TEAL_BRIGHT}`, borderLeft: `3px solid ${TEAL_BRIGHT}`, borderRadius: '0 0 0 8px' },
  { ...cornerBase, bottom: 0, right: 0, borderBottom: `3px solid ${TEAL_BRIGHT}`, borderRight: `3px solid ${TEAL_BRIGHT}`, borderRadius: '0 0 8px 0' },
];

export function ScanScreen({ scanning, onClose, onShutter }: ScanScreenProps) {
  return (
    <div style={{ flex: 1, position: 'relative', background: SCAN_BG, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'repeating-linear-gradient(135deg,#131a1e 0px,#131a1e 14px,#0e1417 14px,#0e1417 28px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontFamily: MONO, fontSize: 11, color: 'rgba(255,255,255,.28)', letterSpacing: 1 }}>
          [ live camera feed ]
        </div>
      </div>

      <div
        className="press"
        onClick={onClose}
        style={{
          position: 'absolute',
          top: 66,
          right: 18,
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'rgba(255,255,255,.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
        }}
      >
        <CloseIcon />
      </div>

      <div style={{ position: 'absolute', left: '50%', top: '44%', transform: 'translate(-50%,-50%)', width: 280, height: 180 }}>
        {corners.map((style, i) => (
          <div key={i} style={style} />
        ))}
        <div
          style={{
            position: 'absolute',
            left: 24,
            right: 24,
            top: 36,
            bottom: 36,
            background:
              'repeating-linear-gradient(90deg,rgba(255,255,255,.55) 0 3px,transparent 3px 7px,rgba(255,255,255,.55) 7px 9px,transparent 9px 15px)',
            opacity: 0.35,
            borderRadius: 4,
          }}
        />
        {scanning && (
          <div
            style={{
              position: 'absolute',
              left: 8,
              right: 8,
              height: 2,
              background: TEAL_BRIGHT,
              boxShadow: `0 0 12px ${TEAL_BRIGHT}`,
              animation: 'scanline 1.2s ease-in-out infinite',
              top: '8%',
            }}
          />
        )}
      </div>

      <div style={{ position: 'absolute', left: 0, right: 0, top: '58%', textAlign: 'center' }}>
        {scanning ? (
          <div style={{ fontFamily: MONO, fontSize: 12, color: TEAL_BRIGHT, letterSpacing: 1.5, animation: 'pulse 1s infinite' }}>
            ANALYZING…
          </div>
        ) : (
          <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)' }}>Align the barcode inside the frame</div>
        )}
      </div>

      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 60, display: 'flex', justifyContent: 'center' }}>
        <div
          className="press press-94"
          onClick={onShutter}
          style={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            border: '4px solid rgba(255,255,255,.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: TEAL }} />
        </div>
      </div>
    </div>
  );
}
