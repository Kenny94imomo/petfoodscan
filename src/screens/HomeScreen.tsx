import { BarcodeIcon } from '../components/icons';
import { ProductRow } from '../components/ProductRow';
import { PRODUCTS } from '../data/products';
import { riskCount } from '../lib/productView';
import { CARD_BORDER, INK, MONO, MUTED, NAVY, TEAL } from '../theme';

interface HomeScreenProps {
  onScan: () => void;
  onHistory: () => void;
  onOpenProduct: (id: string) => void;
}

const statScans = String(PRODUCTS.length + 20);
const statFlags = String(PRODUCTS.reduce((n, p) => n + riskCount(p, 'avoid') + riskCount(p, 'caution'), 0));

export function HomeScreen({ onScan, onHistory, onOpenProduct }: HomeScreenProps) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '76px 20px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: 2, color: MUTED, textTransform: 'uppercase' }}>
          PetScreen
        </div>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: TEAL }} />
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: INK, letterSpacing: -0.5, margin: '10px 0 22px' }}>
        Know what's in
        <br />
        the bowl.
      </div>

      <div
        className="press press-98"
        onClick={onScan}
        style={{
          background: NAVY,
          borderRadius: 20,
          padding: 22,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          boxShadow: '0 8px 24px rgba(39,71,84,.25)',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 16,
            background: TEAL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <BarcodeIcon />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#fff', fontSize: 17, fontWeight: 600 }}>Scan a product</div>
          <div style={{ color: 'rgba(255,255,255,.65)', fontSize: 13, marginTop: 2 }}>
            Point the camera at the barcode
          </div>
        </div>
        <svg width="8" height="14" viewBox="0 0 8 14">
          <path d="M1 1l6 6-6 6" stroke="rgba(255,255,255,.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 12, margin: '16px 0 26px' }}>
        <div style={{ flex: 1, background: '#fff', borderRadius: 16, padding: '14px 16px', border: CARD_BORDER }}>
          <div style={{ fontFamily: MONO, fontSize: 22, fontWeight: 500, color: INK }}>{statScans}</div>
          <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>products scanned</div>
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 16, padding: '14px 16px', border: CARD_BORDER }}>
          <div style={{ fontFamily: MONO, fontSize: 22, fontWeight: 500, color: '#bc3b2b' }}>{statFlags}</div>
          <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>ingredients flagged</div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: INK }}>Recent scans</div>
        <div className="press" onClick={onHistory} style={{ fontSize: 13, color: TEAL, fontWeight: 500 }}>
          See all
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PRODUCTS.slice(0, 3).map((p) => (
          <ProductRow key={p.id} product={p} subtitle={p.species} onOpen={onOpenProduct} />
        ))}
      </div>
    </div>
  );
}
