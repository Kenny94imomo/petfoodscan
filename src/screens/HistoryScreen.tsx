import { ProductRow } from '../components/ProductRow';
import { PRODUCTS } from '../data/products';
import { INK } from '../theme';

export function HistoryScreen({ onOpenProduct }: { onOpenProduct: (id: string) => void }) {
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '76px 20px 120px' }}>
      <div style={{ fontSize: 24, fontWeight: 700, color: INK, letterSpacing: -0.4, marginBottom: 16 }}>History</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PRODUCTS.map((p) => (
          <ProductRow key={p.id} product={p} subtitle={p.date} onOpen={onOpenProduct} />
        ))}
      </div>
    </div>
  );
}
