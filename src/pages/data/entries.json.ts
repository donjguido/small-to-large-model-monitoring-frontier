import { entries } from '../../data';
export async function GET() {
  return new Response(JSON.stringify(entries, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
