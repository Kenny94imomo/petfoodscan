import { BarcodeIcon, ClockIcon, HomeIcon, UserIcon } from './icons';
import { FAINT, TEAL } from '../theme';
import type { Screen } from '../types';

interface TabBarProps {
  screen: Screen;
  onHome: () => void;
  onHistory: () => void;
  onScan: () => void;
  onProfile: () => void;
}

const tabStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 3,
};

export function TabBar({ screen, onHome, onHistory, onScan, onProfile }: TabBarProps) {
  const cHome = screen === 'home' ? TEAL : FAINT;
  const cHist = screen === 'history' ? TEAL : FAINT;
  const cProf = screen === 'profile' ? TEAL : FAINT;
  return (
    <div
      style={{
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 24,
        background: 'rgba(255,255,255,.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(23,36,43,.08)',
        borderRadius: 28,
        padding: '10px 8px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 8px 30px rgba(23,36,43,.12)',
        zIndex: 40,
      }}
    >
      <div className="press press-tab" onClick={onHome} style={tabStyle}>
        <HomeIcon color={cHome} />
        <div style={{ fontSize: 10, fontWeight: 600, color: cHome }}>Home</div>
      </div>
      <div className="press press-tab" onClick={onHistory} style={tabStyle}>
        <ClockIcon color={cHist} />
        <div style={{ fontSize: 10, fontWeight: 600, color: cHist }}>History</div>
      </div>
      <div
        className="press press-95"
        onClick={onScan}
        style={{
          width: 58,
          height: 58,
          borderRadius: 20,
          background: TEAL,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 8px',
          boxShadow: '0 6px 16px rgba(31,122,104,.35)',
        }}
      >
        <BarcodeIcon size={26} />
      </div>
      <div className="press press-tab" onClick={onProfile} style={tabStyle}>
        <UserIcon color={cProf} />
        <div style={{ fontSize: 10, fontWeight: 600, color: cProf }}>Pets</div>
      </div>
    </div>
  );
}
