export type Screen = 'home' | 'scan' | 'result' | 'detail' | 'history' | 'profile';

export type Grade = 'A' | 'B' | 'C' | 'D' | 'E';

export type Risk = 'safe' | 'caution' | 'avoid';

export interface Ingredient {
  name: string;
  risk: Risk;
  note: string;
}

export interface NutritionRow {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  species: 'Dog' | 'Cat';
  upc: string;
  grade: Grade;
  score: number;
  date: string;
  verdict: string;
  summary: string;
  ingredients: Ingredient[];
  nutrition: NutritionRow[];
}
