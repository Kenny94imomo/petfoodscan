import type { Grade, Risk } from './types';

export const MONO = "'IBM Plex Mono', monospace";

export const INK = '#17242b';
export const BODY = '#3a4a52';
export const MUTED = '#5d6f77';
export const FAINT = '#8a979d';
export const TEAL = '#1f7a68';
export const TEAL_BRIGHT = '#4fd1b5';
export const NAVY = '#274754';
export const APP_BG = '#f2f5f4';
export const SCAN_BG = '#0c1114';
export const CARD_BORDER = '1px solid rgba(23,36,43,.06)';
export const ROW_DIVIDER = '1px solid rgba(23,36,43,.05)';

export const GRADE_COLORS: Record<Grade, string> = {
  A: '#1f8a4d',
  B: '#6f9a2f',
  C: '#c98f1f',
  D: '#c9611f',
  E: '#bc3b2b',
};

export const RISK_COLORS: Record<Risk, string> = {
  safe: '#1f8a4d',
  caution: '#c98f1f',
  avoid: '#bc3b2b',
};
