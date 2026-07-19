import { riskColor } from '../lib/productView';
import { INK, MONO, MUTED } from '../theme';
import type { Ingredient } from '../types';

export function IngredientRow({ ingredient }: { ingredient: Ingredient }) {
  const dot = riskColor(ingredient);
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flex: 1 }}>
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: dot, marginTop: 5, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'baseline' }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{ingredient.name}</div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: 1,
              color: dot,
              textTransform: 'uppercase',
            }}
          >
            {ingredient.risk}
          </div>
        </div>
        <div style={{ fontSize: 12, color: MUTED, marginTop: 2, lineHeight: 1.45 }}>{ingredient.note}</div>
      </div>
    </div>
  );
}
