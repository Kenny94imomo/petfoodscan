import { useCallback, useEffect, useRef, useState } from 'react';
import { DeviceFrame } from './components/DeviceFrame';
import { TabBar } from './components/TabBar';
import { SCAN_DURATION_MS, SCAN_FINDS } from './config';
import { findProduct, findProductByUpc } from './data/products';
import { DetailScreen } from './screens/DetailScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { ResultScreen } from './screens/ResultScreen';
import { ScanScreen } from './screens/ScanScreen';
import type { Screen } from './types';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [pid, setPid] = useState('vb');
  const [backTo, setBackTo] = useState<Screen>('home');
  const [scanning, setScanning] = useState(false);
  const scanTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(scanTimer.current), []);

  const go = (next: Screen) => {
    clearTimeout(scanTimer.current);
    setScanning(false);
    setScreen(next);
  };

  const openProduct = (id: string) => {
    setPid(id);
    setBackTo(screen);
    setScreen('detail');
  };

  const openDetail = () => {
    setBackTo('result');
    setScreen('detail');
  };

  const completeScan = useCallback((targetId: string) => {
    navigator.vibrate?.(50);
    setScanning(true);
    scanTimer.current = setTimeout(() => {
      setScanning(false);
      setPid(targetId);
      setBackTo('result');
      setScreen('result');
    }, SCAN_DURATION_MS);
  }, []);

  const tapShutter = () => {
    if (scanning) return;
    completeScan(SCAN_FINDS === 'risky' ? 'vb' : 'mf');
  };

  // A real barcode was read from the camera: show the matching catalog
  // product, or fall back to the simulated scan target for unknown codes.
  const handleDetect = useCallback(
    (code: string) => {
      if (scanning) return;
      completeScan(findProductByUpc(code)?.id ?? (SCAN_FINDS === 'risky' ? 'vb' : 'mf'));
    },
    [scanning, completeScan],
  );

  const product = findProduct(pid);
  const showTabs = screen === 'home' || screen === 'history' || screen === 'profile';

  return (
    <DeviceFrame dark={screen === 'scan'}>
      {screen === 'home' && (
        <HomeScreen onScan={() => go('scan')} onHistory={() => go('history')} onOpenProduct={openProduct} />
      )}
      {screen === 'scan' && (
        <ScanScreen scanning={scanning} onClose={() => go('home')} onShutter={tapShutter} onDetect={handleDetect} />
      )}
      {screen === 'result' && (
        <ResultScreen
          product={product}
          onClose={() => go('home')}
          onOpenDetail={openDetail}
          onScanAgain={() => go('scan')}
        />
      )}
      {screen === 'detail' && <DetailScreen product={product} onBack={() => setScreen(backTo)} />}
      {screen === 'history' && <HistoryScreen onOpenProduct={openProduct} />}
      {screen === 'profile' && <ProfileScreen />}
      {showTabs && (
        <TabBar
          screen={screen}
          onHome={() => go('home')}
          onHistory={() => go('history')}
          onScan={() => go('scan')}
          onProfile={() => go('profile')}
        />
      )}
    </DeviceFrame>
  );
}
