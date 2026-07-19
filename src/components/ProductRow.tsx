import { displayBadge, gradeBg, gradeColor } from '../lib/productView';
import { CARD_BORDER, INK, MONO, MUTED } from '../theme';
import type { Product } from '../types';
import { ChevronIcon } from './icons';

interface ProductRowProps {
  product: Product;
  subtitle: string;
  onOpen: (id: string) => void;
}

export function ProductRow({ product, subtitle, onOpen }: ProductRowProps) {
  return (
    <div
      className="press press-99"
      onClick={() => onOpen(product.id)}
      style={{
        background: '#fff',
        borderRadius: 16,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        border: CARD_BORDER,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: gradeBg(product),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: MONO,
          fontWeight: 500,
          fontSize: 15,
          color: gradeColor(product),
          flexShrink: 0,
        }}
      >
        {displayBadge(product)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: INK,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.name}
        </div>
        <div style={{ fontSize: 12, color: MUTED, marginTop: 1 }}>
          {product.brand} · {subtitle}
        </div>
      </div>
      <ChevronIcon />
    </div>
  );
}
