import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { BRANDS } from '../../data';

export function BrandSlider({ dark }) {
  const bg = dark ? 'rgba(22,8,52,.8)' : '#fff';
  const bd = dark ? 'rgba(139,82,247,.17)' : 'rgba(91,29,232,.09)';
  const d  = [...BRANDS, ...BRANDS];

  const Item = ({ b, i }) => (
    <motion.div key={i} whileHover={{ scale: 1.05 }}
      style={{ padding: '10px 18px', borderRadius: 50, background: bg, border: `1px solid ${bd}`, display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
      <Briefcase size={12} color={b.c} />
      <span style={{ fontSize: '.79rem', fontWeight: 700, color: dark ? '#C4B0E8' : '#1A0A2E', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{b.n}</span>
    </motion.div>
  );

  return (
    <div style={{ overflow: 'hidden', padding: '6px 0' }}>
      <div className="sl" style={{ display: 'flex', gap: 11, width: 'max-content', marginBottom: 11 }}>
        {d.map((b, i) => <Item key={`a${i}`} b={b} i={i} />)}
      </div>
      <div className="sr" style={{ display: 'flex', gap: 11, width: 'max-content' }}>
        {[...d].reverse().map((b, i) => <Item key={`b${i}`} b={b} i={i} />)}
      </div>
    </div>
  );
}
