import { Sparkles } from 'lucide-react';
import { T } from '../../data';

export function Chip({ text, center, light }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      background: light ? 'rgba(255,255,255,.11)' : 'rgba(91,29,232,.09)',
      border: light ? '1px solid rgba(255,255,255,.2)' : '1px solid rgba(91,29,232,.22)',
      borderRadius: 30, padding: '5px 14px', marginBottom: 16,
      ...(center && { margin: '0 auto 16px', display: 'flex', width: 'fit-content' }),
    }}>
      <Sparkles size={11} color={light ? 'rgba(255,255,255,.8)' : T.p1} />
      <span style={{
        fontSize: '.72rem', fontWeight: 700,
        color: light ? 'rgba(255,255,255,.8)' : T.p1,
        letterSpacing: 1.8, textTransform: 'uppercase',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>{text}</span>
    </div>
  );
}

export function GradText({ children }) {
  return (
    <span style={{
      background: 'linear-gradient(135deg,#5B1DE8,#A855F7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    }}>
      {children}
    </span>
  );
}

export function Heading({ children, dark, size = 'clamp(1.9rem,3.8vw,3.2rem)', center, white }) {
  return (
    <h2 style={{
      fontFamily: "'Outfit', sans-serif", fontWeight: 800,
      fontSize: size, letterSpacing: '-1.5px', lineHeight: 1.12,
      color: white ? '#fff' : dark ? '#F0E8FF' : '#1A0A2E',
      margin: 0,
      ...(center && { textAlign: 'center' }),
    }}>
      {children}
    </h2>
  );
}
