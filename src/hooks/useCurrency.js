import { useState, useEffect, useCallback } from 'react';
import { CURRENCY_MAP } from '../data';

export function useCurrency() {
  const [cur, setCur] = useState({ s: 'LKR', r: 1 });

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => setCur(CURRENCY_MAP[d.country_code] || { s: '$', r: 0.0031 }))
      .catch(() => {});
  }, []);

  const fmt = useCallback((lkr) => {
    const v = lkr * cur.r;
    if (cur.s === 'LKR') return `LKR ${Math.round(v).toLocaleString()}`;
    if (v >= 1000) return `${cur.s}${Math.round(v).toLocaleString()}`;
    return `${cur.s}${v < 10 ? v.toFixed(1) : Math.round(v)}`;
  }, [cur]);

  return { cur, fmt };
}
