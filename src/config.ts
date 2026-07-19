// Product-level knobs carried over from the design's prop panel.

// How a product's badge reads: its letter grade or its numeric safety score.
export type ScoreStyle = 'letter' | 'score';
export const SCORE_STYLE: ScoreStyle = 'letter';

// Which catalog product the simulated barcode scan "finds".
export type ScanFinds = 'risky' | 'clean';
export const SCAN_FINDS: ScanFinds = 'risky';

export const SCAN_DURATION_MS = 1600;
