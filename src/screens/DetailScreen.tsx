import { BackIcon } from '../components/icons';
import { IngredientRow } from '../components/IngredientRow';
import { displayBadge, gradeBg, gradeColor, gradeDot } from '../lib/productView';
import { BODY, CARD_BORDER, FAINT, INK, MONO, MUTED, ROW_DIVIDER } from '../theme';
import type { Product } from '../types';

interface DetailScreenProps {
  product: Product;
  onBack: () => void;
}

export function DetailScreen({ product, onBack }: DetailScreenProps) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '66px 20px 120px' }}>
      <div
        className="press press-95"
        onClick={onBack}
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#fff',
          border: '1px solid rgba(23,36,43,.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <BackIcon />
      </div>

      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 18,
            background: gradeBg(product),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: MONO,
            fontSize: 26,
            fontWeight: 500,
            color: gradeColor(product),
            flexShrink: 0,
          }}
        >
          {displayBadge(product)}
        </div>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: INK, letterSpacing: -0.3 }}>{product.name}</div>
          <div style={{ fontSize: 13, color: MUTED, marginTop: 2 }}>
            {product.brand} · {product.species}
          </div>
          <div style={{ fontFamily: MONO, fontSize: 10, color: FAINT, marginTop: 4, letterSpacing: 1 }}>
            UPC {product.upc}
          </div>
        </div>
      </div>

      <div style={{ height: 6, borderRadius: 99, background: 'rgba(23,36,43,.07)', margin: '18px 0 6px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${product.score}%`, background: gradeDot(product), borderRadius: 99 }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: FAINT, fontFamily: MONO }}>
        <span>0</span>
        <span>safety score {product.score}/100</span>
        <span>100</span>
      </div>

      <div style={{ fontSize: 14, fontWeight: 600, color: INK, margin: '22px 0 10px' }}>
        Ingredients <span style={{ fontWeight: 400, color: FAINT }}>· as listed on label</span>
      </div>
      <div style={{ background: '#fff', borderRadius: 18, border: CARD_BORDER, overflow: 'hidden' }}>
        {product.ingredients.map((ing) => (
          <div key={ing.name} style={{ padding: '13px 16px', display: 'flex', borderBottom: ROW_DIVIDER }}>
            <IngredientRow ingredient={ing} />
          </div>
        ))}
      </div>

      <div style={{ fontSize: 14, fontWeight: 600, color: INK, margin: '22px 0 10px' }}>Guaranteed analysis</div>
      <div style={{ background: '#fff', borderRadius: 18, border: CARD_BORDER, overflow: 'hidden' }}>
        {product.nutrition.map((row) => (
          <div key={row.label} style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', borderBottom: ROW_DIVIDER }}>
            <div style={{ fontSize: 13, color: BODY }}>{row.label}</div>
            <div style={{ fontFamily: MONO, fontSize: 13, color: INK }}>{row.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
