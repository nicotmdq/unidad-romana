const { chromium }=require('playwright'); const fs=require('fs'),path=require('path');
const input=process.argv[2]; if(!input){console.error('Uso: node scripts/scrape-match.js <URL|ID>');process.exit(2)}
const id=(input.match(/event\/(\d+)/)||input.match(/^(\d+)$/)||[])[1]; if(!id) throw Error('URL/ID inválido');
const url=`https://www.lachacrafutbol.com.ar/web/event/${id}/`, out=path.resolve('capturas'); fs.mkdirSync(out,{recursive:true});
const aliases=(JSON.parse(fs.readFileSync(path.resolve(__dirname,'../players.json'))).aliases)||{}; const norm=n=>aliases[n]||n;
(async()=>{const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:1440,height:1200}});await page.goto(url,{waitUntil:'networkidle',timeout:60000});await page.waitForTimeout(1500);
await page.screenshot({path:path.join(out,`${id}-completo.png`),fullPage:true});fs.writeFileSync(path.join(out,`${id}.html`),await page.content());
const raw=await page.evaluate(()=>{const clean=s=>(s||'').replace(/\s+/g,' ').trim();const body=clean(document.body.innerText);const imgs=[...document.images].map(i=>({src:i.src,alt:i.alt,title:i.title,cls:i.className,parent:clean(i.parentElement?.innerText)}));
const nodes=[...document.querySelectorAll('tr,li,.player,.jugador,.team-player,[class*=player],[class*=jugador]')].map(e=>({text:clean(e.innerText),html:e.innerHTML})).filter(x=>x.text);
return {title:document.title,body,imgs,nodes};});
fs.writeFileSync(path.join(out,`${id}-diagnostico.json`),JSON.stringify(raw,null,2));
const text=raw.body; const date=(text.match(/\b(\d{1,2})[\/\-](\d{1,2})[\/\-](20\d{2})\b/)||[]).slice(1); const iso=date.length?`${date[2]}-${date[1].padStart(2,'0')}-${date[0].padStart(2,'0')}`:null;
const iconType=i=>/goal|gol|pelota|ball|soccer/i.test(i.src+' '+i.alt+' '+i.title)?'goal':/yellow|amarill/i.test(i.src+' '+i.alt+' '+i.title)?'yellow':/red|roja/i.test(i.src+' '+i.alt+' '+i.title)?'red':null;
const events=[]; for(const i of raw.imgs){const type=iconType(i);if(!type||!i.parent)continue;let name=i.parent.replace(/\b\d{1,3}'?\b/g,'').trim(); if(name.length>80)continue;events.push({type,player:norm(name)});}
const urMention=/unidad romana/i.test(text); const data={eventId:Number(id),url,date:iso,rawTitle:raw.title,unidadRomanaFound:urMention,events,players:[...new Set(events.map(e=>e.player))],validated:false,needsReview:true,validation:{reason:'Parser estructural inicial: validar selectores de marcador/equipo contra HTML real antes de auto-escritura.'},evidence:{screenshot:`capturas/${id}-completo.png`,html:`capturas/${id}.html`,diagnostic:`capturas/${id}-diagnostico.json`}};
fs.writeFileSync(path.join(out,`${id}-datos.json`),JSON.stringify(data,null,2));console.log(JSON.stringify(data,null,2));await browser.close();})().catch(e=>{console.error(e);process.exit(1)});
