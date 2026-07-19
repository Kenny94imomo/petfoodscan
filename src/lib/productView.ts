import { SCORE_STYLE } from '../config';
import { GRADE_COLORS, RISK_COLORS } from '../theme';
import type { Ingredient, Product, Risk } from '../types';

export function displayBadge(p: Product): string {
  return SCORE_STYLE === 'letter' ? p.grade : String(p.score);
}

export function gradeColor(p: Product): string {
  return GRADE_COLORS[p.grade];
}

export function gradeBg(p: Product): string {
  return GRADE_COLORS[p.grade] + '1a';
}

function overallRisk(p: Product): Risk {
  if (p.grade === 'A' || p.grade === 'B') return 'safe';
  if (p.grade === 'C') return 'caution';
  return 'avoid';
}

export function gradeDot(p: Product): string {
  return RISK_COLORS[overallRisk(p)];
}

export function riskColor(ing: Ingredient): string {
  return RISK_COLORS[ing.risk];
}

export function riskCount(p: Product, risk: Risk): number {
  return p.ingredients.filter((i) => i.risk === risk).length;
}

export function topConcerns(p: Product): Ingredient[] {
  return p.ingredients.filter((i) => i.risk !== 'safe').slice(0, 3);
}
