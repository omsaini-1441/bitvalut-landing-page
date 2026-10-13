const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bitvault-safe.vercel.app/</loc></url>
  <url><loc>https://bitvault-safe.vercel.app/privacy</loc></url>
  <url><loc>https://bitvault-safe.vercel.app/terms</loc></url>
</urlset>
`;

export function GET() {
  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
