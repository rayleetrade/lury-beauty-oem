import { readFile, writeFile } from 'node:fs/promises';
const key = (await readFile(new URL('../public/9d9dea89721948db87adcd6920d3c2f4.txt', import.meta.url),'utf8')).trim();
const host = 'www.lurybeauty.com';
const keyLocation = 'https://' + host + '/' + key + '.txt';
const verification = await fetch(keyLocation);
if (!verification.ok || (await verification.text()).trim() !== key) throw new Error('Published key verification failed');
const sitemap = await fetch('https://' + host + '/sitemap.xml');
if (!sitemap.ok) throw new Error('Sitemap retrieval failed');
const xml = await sitemap.text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].replaceAll('&amp;','&'));
if (!urlList.length || urlList.some(url => new URL(url).host !== host)) throw new Error('Invalid sitemap URL list');
const response = await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify({host,key,keyLocation,urlList})});
const receipt = {time:new Date().toISOString(),host,endpoint:'https://api.indexnow.org/indexnow',status:response.status,urlCount:urlList.length,result:await response.text(),meaning:response.status===200?'URLs received; indexing is not guaranteed':response.status===202?'URLs received; key validation pending; indexing is not guaranteed':'Submission unsuccessful',urlList};
if (process.argv[2]) await writeFile(process.argv[2],JSON.stringify(receipt,null,2),'utf8');
console.log(JSON.stringify({status:receipt.status,urlCount:receipt.urlCount,meaning:receipt.meaning}));
if (![200,202].includes(response.status)) process.exitCode=1;

