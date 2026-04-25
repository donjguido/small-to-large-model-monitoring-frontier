import { categories } from '../../data';
export async function GET() {
  return new Response(JSON.stringify(categories, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
