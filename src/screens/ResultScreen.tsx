import { CloseIcon } from '../components/icons';
import { IngredientRow } from '../components/IngredientRow';
import { displayBadge, gradeBg, gradeColor, riskCount, topConcerns } from '../lib/productView';
import { BODY, CARD_BORDER, INK, MONO, MUTED, NAVY } from '../theme';
import type { Product } from '../types';

interface ResultScreenProps {
  product: Product;
  onClose: () => void;
  onOpenDetail: () => void;
  onScanAgain: () => void;
}

export function ResultScreen({ product, onClose, onOpenDetail, onScanAgain }: ResultScreenProps) {
  const color = gradeColor(product);
  const concerns = topConcerns(product);
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '76px 20px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, color: MUTED }}>SCAN RESULT</div>
        <div
          className="press"
          onClick={onClose}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: 'rgba(23,36,43,.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CloseIcon color={MUTED} size={11} />
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 24, padding: '28px 22px', textAlign: 'center', border: CARD_BORDER }}>
        <div
          style={{
            width: 88,
            height: 88,
            borderRadius: 28,
            background: gradeBg(product),
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: MONO,
            fontSize: 38,
            fontWeight: 500,
            color,
          }}
        >
          {displayBadge(product)}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color, marginTop: 12 }}>{product.verdict}</div>
        <div style={{ fontSize: 19, fontWeight: 700, color: INK, marginTop: 14, letterSpacing: -0.3 }}>{product.name}</div>
        <div style={{ fontSize: 13, color: MUTED, marginTop: 3 }}>
          {product.brand} · {product.species}
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 18 }}>
          <div style={{ background: 'rgba(188,59,43,.08)', color: '#bc3b2b', borderRadius: 99, padding: '5px 12px', fontSize: 12, fontWeight: 600 }}>
            {riskCount(product, 'avoid')} avoid
          </div>
          <div style={{ background: 'rgba(201,143,31,.1)', color: '#a3730f', borderRadius: 99, padding: '5px 12px', fontSize: 12, fontWeight: 600 }}>
            {riskCount(product, 'caution')} caution
          </div>
          <div style={{ background: 'rgba(31,138,77,.08)', color: '#1f8a4d', borderRadius: 99, padding: '5px 12px', fontSize: 12, fontWeight: 600 }}>
            {riskCount(product, 'safe')} safe
          </div>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 20, padding: '18px 20px', marginTop: 12, border: CARD_BORDER }}>
        <div style={{ fontSize: 13, lineHeight: 1.55, color: BODY }}>{product.summary}</div>
      </div>

      {concerns.length > 0 && (
        <>
          <div style={{ fontSize: 14, fontWeight: 600, color: INK, margin: '20px 0 10px' }}>Top concerns</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {concerns.map((ing) => (
              <div key={ing.name} style={{ background: '#fff', borderRadius: 16, padding: '13px 16px', border: CARD_BORDER, display: 'flex' }}>
                <IngredientRow ingredient={ing} />
              </div>
            ))}
          </div>
        </>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22 }}>
        <div
          className="press press-98"
          onClick={onOpenDetail}
          style={{ background: NAVY, color: '#fff', borderRadius: 16, padding: 15, textAlign: 'center', fontSize: 15, fontWeight: 600 }}
        >
          Full ingredient analysis
        </div>
        <div
          className="press press-98"
          onClick={onScanAgain}
          style={{ background: 'rgba(23,36,43,.06)', color: INK, borderRadius: 16, padding: 15, textAlign: 'center', fontSize: 15, fontWeight: 600 }}
        >
          Scan another
        </div>
      </div>
    </div>
  );
}
