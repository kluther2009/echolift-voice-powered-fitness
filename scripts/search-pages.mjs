import { readFile, writeFile, mkdir } from 'node:fs/promises';
const base = await readFile('dist/index.html', 'utf8');
for (const [path, title, description] of [
  ['privacy', 'EchoLift Privacy | Your Workout Data', 'Learn how EchoLift stores workout history, handles optional iCloud backup, and uses voice and heart-rate permissions.'],
  ['terms', 'EchoLift Terms of Use', 'Read the terms of use for the EchoLift iPhone workout tracker and the Apple Standard End User License Agreement.'],
]) {
  const html = base.replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${description}`)
    .replaceAll('https://echolift.net/"', `https://echolift.net/${path}"`)
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '');
  await mkdir(`dist/${path}`, { recursive: true });
  await writeFile(`dist/${path}/index.html`, html);
}
