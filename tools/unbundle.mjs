// Entpackt eine gebündelte Seite in normale Dateien mit Cache-Busting-Namen.
import fs from 'fs'; import path from 'path'; import zlib from 'zlib'; import crypto from 'crypto'; import sharp from 'sharp';
const [siteDir, page] = process.argv.slice(2);
const file = path.join(siteDir, page);
const h = fs.readFileSync(file, 'utf8');
const blk = t => { const m = h.match(new RegExp(`<script type="__bundler/${t}">([\\s\\S]*?)</script>`)); return m ? m[1] : null; };
let tpl = JSON.parse(blk('template'));
const man = JSON.parse(blk('manifest'));
const ext = JSON.parse(blk('ext_resources') || '[]');
const extById = Object.fromEntries(ext.map(e => [e.uuid, e.id]));
const outDir = path.join(siteDir, 'assets/build'); fs.mkdirSync(outDir, { recursive: true });
const hash = b => crypto.createHash('sha1').update(b).digest('hex').slice(0, 10);
const names = { 'react.production': 'react', 'react-dom.production': 'react-dom' };
const paths = {}; const log = [];
for (const [uuid, e] of Object.entries(man)) {
  let d = Buffer.from(e.data, 'base64'); if (e.compressed) d = zlib.gunzipSync(d);
  let ext2, base = 'res', buf = d;
  const id = extById[uuid] || '';
  if (e.mime.startsWith('image/')) {
    const meta = await sharp(d).metadata();
    if (d.length > 60000 && meta.format !== 'svg') {
      let img = sharp(d).rotate(); if (meta.width > 2000) img = img.resize({ width: 2000 });
      buf = await img.webp({ quality: 78, alphaQuality: 90 }).toBuffer(); ext2 = 'webp';
    } else ext2 = e.mime.split('/')[1].replace('jpeg', 'jpg').replace('svg+xml', 'svg');
    base = 'img';
  } else if (e.mime.startsWith('font/')) { ext2 = e.mime.split('/')[1]; base = 'font'; }
  else if (e.mime.includes('javascript')) {
    ext2 = 'js'; const s = d.toString('utf8', 0, 300);
    base = id.includes('react-dom') ? 'react-dom' : id.includes('/react@') ? 'react' : s.includes('dc-runtime') ? 'dc-runtime' : s.includes('@ds-bundle') ? 'design-system' : s.includes('ic-consent') || d.toString().includes('ic-consent') ? 'consent' : 'script';
  } else if (e.mime.includes('html')) { ext2 = 'html'; base = path.basename(id).replace(/^_build_|\.dc\.html$/g, '').toLowerCase() || 'part'; }
  else ext2 = 'bin';
  const name = `${base}.${hash(buf)}.${ext2}`;
  fs.writeFileSync(path.join(outDir, name), buf);
  paths[uuid] = 'assets/build/' + name;
  log.push(`${(d.length/1024).toFixed(0).padStart(6)} KB -> ${(buf.length/1024).toFixed(0).padStart(5)} KB  ${name}`);
}
for (const [uuid, p] of Object.entries(paths)) tpl = tpl.split(uuid).join(p);
tpl = tpl.replace(/\s+integrity="[^"]*"/gi, '').replace(/\s+crossorigin="[^"]*"/gi, '');
const resMap = {}; for (const e of ext) if (paths[e.uuid]) resMap[e.id] = paths[e.uuid];
const resScript = `<script>window.__resources = ${JSON.stringify(resMap).replace(/<\//g, '<\\/')};</script>`;
const ho = tpl.match(/<head[^>]*>/i); tpl = tpl.slice(0, ho.index + ho[0].length) + '\n' + resScript + tpl.slice(ho.index + ho[0].length);
fs.writeFileSync(file, tpl);
console.log(log.join('\n')); console.log(`${page}: ${(h.length/1024/1024).toFixed(1)} MB -> ${(tpl.length/1024).toFixed(0)} KB HTML`);
