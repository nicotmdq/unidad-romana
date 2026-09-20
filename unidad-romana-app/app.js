const D=window.UR_DATA; const $=s=>document.querySelector(s);
const year=$('#yearFilter'), tourn=$('#tournamentFilter'), search=$('#playerSearch'), rivalSearch=$('#rivalSearch');
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
let rivalSort={key:'pj',dir:'desc'};

// Equivalencias editoriales de rivales: sólo variantes evidentes de acentos, sufijos y escritura.
const RIVAL_ALIASES={
  'Boxer F.C.':'Bóxer FC','Boxer FC':'Bóxer FC','Bóxer FC':'Bóxer FC',
  'Cafe Veloz':'Café Veloz','Café Veloz':'Café Veloz',
  'Comodos F.C.':'Cómodos FC','Cómodos F.C.':'Cómodos FC','Cómodos FC':'Cómodos FC',
  'Echale Pesteke':'Échale Pesteke','Échale Pesteke':'Échale Pesteke',
  'Eclécticos F.C.':'Eclécticos FC','Eclécticos FC':'Eclécticos FC',
  'El Expreso FC':'El Expreso FC','Expreso FC':'El Expreso FC','Expresso FC':'El Expreso FC',
  'Fulvencito':'Fulvencito FC','Fulvencito FC':'Fulvencito FC',
  'Graduados':'Graduados FC','Graduados F.C.':'Graduados FC',
  'Los Palmeras':'Los Palmeras FC','Los Palmeras F.C.':'Los Palmeras FC','Palmeras':'Los Palmeras FC','Palmeras FC':'Los Palmeras FC',
  'Mambo F.C.':'Mambo FC','Mambo FC':'Mambo FC',
  'Media Pinta':'Media Pinta FC','Media Pinta FC':'Media Pinta FC',
  'Mufasa F.C.':'Mufasa FC','Mufasa FC':'Mufasa FC',
  'Toro Rosso':'Toro Rosso FC','Toro Rosso F.C.':'Toro Rosso FC'
};
const canonicalRival=n=>RIVAL_ALIASES[n]||n;

function init(){
  const years=[...new Set(D.matches.map(m=>m.year))].sort(); year.innerHTML='<option value="">Todos los años</option>'+years.map(y=>`<option>${y}</option>`).join('');
  refreshTournaments(); render();
  year.onchange=()=>{refreshTournaments();render()}; tourn.onchange=render; search.oninput=renderPlayers; rivalSearch.oninput=renderRivals;
  document.querySelectorAll('#rivalsTable th[data-sort]').forEach(th=>th.onclick=()=>{
    const key=th.dataset.sort;
    rivalSort = rivalSort.key===key ? {key,dir:rivalSort.dir==='asc'?'desc':'asc'} : {key,dir:key==='name'?'asc':'desc'};
    renderRivals();
  });
  $('#clearFilters').onclick=()=>{year.value='';refreshTournaments();tourn.value='';search.value='';rivalSearch.value='';render()};
}
function refreshTournaments(){
  const ms=year.value?D.matches.filter(m=>m.year==year.value):D.matches;
  const ts=[...new Set(ms.map(m=>`${m.tournament} ${m.year}`))].sort((a,b)=>a.localeCompare(b));
  tourn.innerHTML='<option value="">Todos los campeonatos</option>'+ts.map(t=>`<option value="${t}">${t}</option>`).join('');
}
function filtered(){return D.matches.filter(m=>(!year.value||m.year==year.value)&&(!tourn.value||`${m.tournament} ${m.year}`===tourn.value))}
function render(){renderStats();renderPlayers();renderRivals();renderMatches();}
function renderStats(){
 const ms=filtered(); let w=0,d=0,l=0,gf=0,gc=0; ms.forEach(m=>{gf+=m.ur;gc+=m.opp;m.ur>m.opp?w++:m.ur<m.opp?l++:d++});
 const vals=[['PJ',ms.length,''],['Ganados',w,'good'],['Empatados',d,'draw'],['Perdidos',l,'bad'],['GF',gf,''],['GC',gc,'']];
 $('#stats').innerHTML=vals.map(x=>`<div class="stat ${x[2]}"><div class="label">${x[0]}</div><div class="value">${x[1]}</div></div>`).join('');
 const complete=ms.filter(m=>m.individualComplete).length; $('#coverage').textContent=`Cobertura individual completa: ${complete}/${ms.length} partidos`;
}
function playerRows(){
 const ms=filtered(), map=new Map();
 ms.forEach(m=>m.players.forEach(p=>{if(!map.has(p))map.set(p,{name:p,g:0,y:0,r:0,seen:0,complete:0}); const x=map.get(p);x.seen++;if(m.individualComplete)x.complete++;}));
 ms.forEach(m=>m.events.forEach(e=>{const x=map.get(e.player)||{name:e.player,g:0,y:0,r:0,seen:0,complete:0}; if(e.confirmed){if(e.type==='goal')x.g++;if(e.type==='yellow')x.y++;if(e.type==='red')x.r++;} map.set(e.player,x)}));
 return [...map.values()].sort((a,b)=>b.g-a.g||b.y-a.y||a.name.localeCompare(b.name));
}
function renderPlayers(){
 const q=norm(search.value||''); const rows=playerRows().filter(x=>norm(x.name).includes(q));
 $('#playersBody').innerHTML=rows.length?rows.map(x=>{const full=x.seen>0&&x.complete===x.seen; return `<tr><td><strong>${x.name}</strong></td><td class="num">${full?x.g:'—'}</td><td class="num">${full?x.y:'—'}</td><td class="num">${full?x.r:'—'}</td><td><span class="pill ${full?'ok':'pending'}">${full?'Confirmado':'Pendiente'}</span></td></tr>`}).join(''):'<tr><td colspan="5" class="muted">No hay jugadores para este filtro.</td></tr>';
}
function rivalRows(){
 const map=new Map();
 filtered().forEach(m=>{
   const name=canonicalRival(m.opponent);
   if(!map.has(name)) map.set(name,{name,pj:0,w:0,d:0,l:0,gf:0,gc:0});
   const x=map.get(name); x.pj++; x.gf+=m.ur; x.gc+=m.opp;
   if(m.ur>m.opp)x.w++; else if(m.ur<m.opp)x.l++; else x.d++;
 });
 return [...map.values()].map(x=>({...x,diff:x.gf-x.gc,eff:x.pj?((x.w*3+x.d)/(x.pj*3)*100):0}));
}
function renderRivals(){
 const q=norm(rivalSearch.value||''); const rows=rivalRows().filter(x=>norm(x.name).includes(q));
 const mult=rivalSort.dir==='asc'?1:-1;
 rows.sort((a,b)=>{
   const av=a[rivalSort.key], bv=b[rivalSort.key];
   if(rivalSort.key==='name') return mult*av.localeCompare(bv,'es',{sensitivity:'base'});
   return mult*(av-bv) || a.name.localeCompare(b.name,'es',{sensitivity:'base'});
 });
 document.querySelectorAll('#rivalsTable th[data-sort]').forEach(th=>{
   th.classList.toggle('active-sort',th.dataset.sort===rivalSort.key);
   const mark=th.querySelector('.sort-mark'); if(mark) mark.textContent=th.dataset.sort===rivalSort.key?(rivalSort.dir==='asc'?'▲':'▼'):'↕';
 });
 $('#rivalsBody').innerHTML=rows.length?rows.map(x=>`<tr><td><strong>${x.name}</strong></td><td class="num">${x.pj}</td><td class="num good-text">${x.w}</td><td class="num">${x.d}</td><td class="num bad-text">${x.l}</td><td class="num">${x.gf}</td><td class="num">${x.gc}</td><td class="num ${x.diff>0?'good-text':x.diff<0?'bad-text':''}">${x.diff>0?'+':''}${x.diff}</td><td class="num">${x.eff.toFixed(1).replace('.',',')}%</td></tr>`).join(''):'<tr><td colspan="9" class="muted">No hay rivales para este filtro.</td></tr>';
}
function renderMatches(){
 const indexed=filtered().map((m,i)=>({m,i}));
 indexed.sort((a,b)=>{
   const ad=a.m.date, bd=b.m.date;
   if(ad&&bd) return bd.localeCompare(ad);
   if(ad&&!bd) return -1;
   if(!ad&&bd) return 1;
   if(a.m.year!==b.m.year) return b.m.year-a.m.year;
   return b.i-a.i;
 });
 const ms=indexed.map(x=>x.m); $('#matchCount').textContent=`${ms.length} partidos`;
 const matchView=m=>{const fixture=m.home===true?`Unidad Romana vs ${m.opponent}`:m.home===false?`${m.opponent} vs Unidad Romana`:`Unidad Romana – ${m.opponent}`;const score=m.home===false?`${m.opp} – ${m.ur}`:`${m.ur} – ${m.opp}`;const date=m.date?new Date(m.date+'T12:00:00').toLocaleDateString('es-AR'):'—';return {fixture,score,date}};
 $('#matchesBody').innerHTML=ms.map(m=>{const v=matchView(m);return `<tr><td>${v.date}</td><td>${m.tournament} ${m.year}</td><td>${v.fixture}</td><td class="num result">${v.score}</td><td><span class="pill ${m.individualComplete?'ok':'pending'}">${m.individualComplete?'Completo':'Individual pendiente'}</span></td><td><a class="source" target="_blank" rel="noopener" href="${m.url}">La Chacra ↗</a></td></tr>`}).join('');
 $('#matchCards').innerHTML=ms.map(m=>{const v=matchView(m);return `<article class="match-card"><div class="match-card-top"><div><div class="match-card-date">${v.date}</div><div class="match-card-tournament">${m.tournament} ${m.year}</div></div><div class="match-card-score">${v.score}</div></div><div class="match-card-fixture">${v.fixture}</div><div class="match-card-bottom"><span class="pill ${m.individualComplete?'ok':'pending'}">${m.individualComplete?'Completo':'Individual pendiente'}</span><a class="source" target="_blank" rel="noopener" href="${m.url}">La Chacra ↗</a></div></article>`}).join('');
}
init();
