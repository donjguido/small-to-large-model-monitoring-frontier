import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const DATA_DIR = path.resolve('./data');

function load<T>(file: string): T {
  const raw = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  return yaml.load(raw) as T;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
}
export interface Category {
  id: string;
  name: string;
  short: string;
  description: string;
  subcategories?: Subcategory[];
}
export interface Entry {
  id: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  arxiv_id?: string | null;
  doi?: string | null;
  url?: string | null;
  category_id: string;
  subcategory_id?: string | null;
  tags: string[];
  organizations: string[];
  is_foundational?: boolean;
  needs_verification?: boolean;
  annotation: string;
}

const taxonomy = load<{ categories: Category[] }>('taxonomy.yaml');
const entriesDoc = load<{ entries: Entry[] }>('entries.yaml');

export const categories: Category[] = taxonomy.categories;
export const entries: Entry[] = entriesDoc.entries;

export function entriesByCategory(categoryId: string): Entry[] {
  return entries.filter((e) => e.category_id === categoryId);
}

export function entriesBySubcategory(categoryId: string, subcategoryId: string): Entry[] {
  return entries.filter(
    (e) => e.category_id === categoryId && e.subcategory_id === subcategoryId,
  );
}

export function entryCount(categoryId: string): number {
  return entriesByCategory(categoryId).length;
}

export const LAST_REVIEWED = '2026-04-25';
