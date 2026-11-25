// Morocco national-team extended pool, using Transfermarkt's primary position and displayed market value.
// Snapshot checked 25 November 2026. Market values are estimates, not transfer fees.
const SOURCE_URL = 'https://www.transfermarkt.com/marokko/erweiterterkader/verein/3575';
const CURRENT_SQUAD_URL = 'https://www.transfermarkt.com/morocco/kader/verein/3575/saison_id/2026';

const currentNames = new Set([
  'Yassine Bounou','Ahmed Reda Tagnaouti','Munir El Kajoui',
  'Chadi Riad','Issa Diop','Redouane Halhal','Marwane Saadane',
  'Anass Salah-Eddine','Youssef Belammari',
  'Achraf Hakimi','Noussair Mazraoui','Zakaria El Ouahdi',
  'Sofyan Amrabat',
  'Ayyoub Bouaddi','Neil El Aynaoui','Samir El Mourabet','Azzedine Ounahi',
  'Ismael Saibari','Bilal El Khannouss','Amine Sbaï',
  'Brahim Díaz','Chemsdine Talbi','Gessime Yassine','Ayoube Amaimouni-Echghouyab',
  'Soufiane Rahimi','Ayoub El Kaabi'
]);

const rawPlayers = [
  // Goalkeepers
  ['bounou','Yassine Bounou','GK',3000000],
  ['benabid','El Mehdi Benabid','GK',1500000],
  ['al-harrar','El Mehdi Al Harrar','GK',1000000],
  ['tagnaouti','Ahmed Reda Tagnaouti','GK',1000000],
  ['chihab','Salaheddine Chihab','GK',900000],
  ['munir','Munir El Kajoui','GK',600000],
  ['ghanimi','Rachid Ghanimi','GK',325000],
  ['benchaouch','Yanis Benchaouch','GK',75000],
  ['gomis','Ibrahim Gomis','GK',50000],

  // Centre-backs
  ['aguerd','Nayef Aguerd','CB',15000000],
  ['chadi-riad','Chadi Riad','CB',15000000],
  ['ait-boudlal','Abdelhamid Aït Boudlal','CB',12000000],
  ['diop','Issa Diop','CB',8000000],
  ['halhal','Redouane Halhal','CB',5000000],
  ['baouf',"Ismaël Baouf",'CB',3000000],
  ['bouftini','Soufiane Bouftini','CB',1300000],
  ['saiss','Romain Saïss','CB',1200000],
  ['masina','Adam Masina','CB',1000000],
  ['assal','Abdelhak Assal','CB',800000],
  ['louadni','Marouane Louadni','CB',600000],
  ['saadane','Marwane Saadane','CB',400000],
  ['mchakhchekh','Mehdi Mchakhchekh','CB',325000],
  ['elyamiq','Jawad El Yamiq','CB',300000],

  // Left-backs
  ['el-karouani','Souffian El Karouani','LB',15000000],
  ['salah-eddine','Anass Salah-Eddine','LB',12000000],
  ['zahouani','Fouad Zahouani','LB',1200000],
  ['belammari','Youssef Belammari','LB',1200000],
  ['bentayg','Mahmoud Bentayg','LB',1000000],
  ['el-moussaoui','Hamza El Moussaoui','LB',700000],

  // Right-backs
  ['hakimi','Achraf Hakimi','RB',80000000],
  ['mazraoui','Noussair Mazraoui','RB',18000000],
  ['el-ouahdi','Zakaria El Ouahdi','RB',17000000],
  ['el-hilali','Omar El Hilali','RB',15000000],
  ['maamar','Ali Maamar','RB',2500000],
  ['chibi','Mohamed Chibi','RB',1000000],
  ['moufid','Mohamed Moufid','RB',1000000],
  ['boulacsout','Mohamed Boulacsout','RB',700000],

  // Defensive midfielders
  ['targhalline','Oussama Targhalline','DM',16000000],
  ['amrabat','Sofyan Amrabat','DM',10000000],
  ['el-mahdioui','Aschraf El Mahdioui','DM',3000000],
  ['bach','Anas Bach','DM',1700000],
  ['hrimat','Mohamed Rabie Hrimat','DM',1500000],

  // Central midfielders
  ['bouaddi','Ayyoub Bouaddi','CM',50000000],
  ['el-aynaoui','Neil El Aynaoui','CM',23000000],
  ['el-mourabet','Samir El Mourabet','CM',22000000],
  ['louza','Imrân Louza','CM',14000000],
  ['ounahi','Azzedine Ounahi','CM',10000000],
  ['el-faouzi','Soufiane El-Faouzi','CM',9000000],
  ['khairi','Ayoub Khairi','CM',1200000],
  ['el-karti','Walid El Karti','CM',850000],

  // Attacking midfielders
  ['saibari','Ismael Saibari','CAM',40000000],
  ['el-khannouss','Bilal El Khannouss','CAM',35000000],
  ['bounida','Rayane Bounida','CAM',5000000],
  ['boufal','Sofiane Boufal','CAM',1800000],
  ['zouhzouh','Amine Zouhzouh','CAM',1800000],
  ['tannane','Oussama Tannane','CAM',1000000],
  ['essadak','Hossam Essadak','CAM',1000000],
  ['ait-ouarkhane','Khalid Aït Ouarkhane','CAM',900000],
  ['bougrine','Sabir Bougrine','CAM',450000],
  ['hajji','Reda Hajji','CAM',75000],

  // Left wingers
  ['abde','Abde Ezzalzouli','LW',40000000],
  ['adli','Amine Adli','LW',20000000],
  ['ben-seghir','Eliesse Ben Seghir','LW',20000000],
  ['sofiane-diop','Sofiane Diop','LW',15000000],
  ['sbai','Amine Sbaï','LW',4000000],
  ['chouiar','Mounir Chouiar','LW',2800000],
  ['mehri','Youssef Mehri','LW',1200000],
  ['el-mahraoui','Anas El Mahraoui','LW',400000],
  ['bouhra','Saifeddine Bouhra','LW',300000],

  // Right wingers
  ['brahim','Brahim Díaz','RW',35000000],
  ['talbi','Chemsdine Talbi','RW',25000000],
  ['akhomach','Ilias Akhomach','RW',12000000],
  ['gessime','Gessime Yassine','RW',12000000],
  ['amaimouni','Ayoube Amaimouni-Echghouyab','RW',10000000],
  ['maamma','Othmane Maamma','RW',8000000],
  ['souane','Amine Souane','RW',900000],
  ['errahouli','Salaheddine Errahouli','RW',500000],
  ['riahi','Imad Riahi','RW',450000],
  ['baba','Khalid Baba','RW',450000],

  // Centre-forwards
  ['igamane','Hamza Igamane','ST',18000000],
  ['ennesyri','Youssef En-Nesyri','ST',17000000],
  ['begraoui','Yanis Begraoui','ST',12000000],
  ['zabiri','Yassir Zabiri','ST',9000000],
  ['bentayeb-st','Tawfik Bentayeb','ST',8000000],
  ['rahimi','Soufiane Rahimi','ST',6000000],
  ['el-kaabi','Ayoub El Kaabi','ST',4500000],
  ['azaro','Walid Azaro','ST',3000000],
  ['sannadi','Maroan Sannadi','ST',3000000],
  ['tissoudali','Tarik Tissoudali','ST',2500000],
  ['benjdida','Soufiane Benjdida','ST',2200000],
  ['hamdallah','Abderrazak Hamdallah','ST',1000000],
  ['el-berkaoui','Karim El Berkaoui','ST',1000000],
  ['lamlioui','Oussama Lamlioui','ST',850000],
  ['mouloua','Ayoub Mouloua','ST',750000],
  ['hannouri','Hamza Hannouri','ST',700000],
  ['youness-el-kaabi','Youness El Kaabi','ST',200000]
];

const players = rawPlayers.map(([id,name,primary,marketValue]) => ({
  id, name, primary, marketValue,
  status: currentNames.has(name) ? 'current' : 'extended',
  initials: name.split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]).join('').toUpperCase()
}));

const roles = {
  GK:{name:'Goalkeeper',abbr:'GK',intro:'The last line. Ranked by Transfermarkt market value within Morocco’s extended national-team pool.'},
  RB:{name:'Right back',abbr:'RB',intro:'Right-sided defenders, sorted by their displayed Transfermarkt market values.'},
  CB:{name:'Centre-back',abbr:'CB',intro:'The central-defence pool. The two centre-back slots on the formation share this one unique player list.'},
  LB:{name:'Left back',abbr:'LB',intro:'Left-sided defenders, sorted by their displayed Transfermarkt market values.'},
  DM:{name:'Defensive midfield',abbr:'DM',intro:'The deeper midfield role: screening the defence and supporting build-up.'},
  CM:{name:'Central midfield',abbr:'CM',intro:'Central midfielders, sorted by their displayed Transfermarkt market values.'},
  CAM:{name:'Attacking midfield',abbr:'CAM',intro:'Creative midfielders connecting the central areas to the front line.'},
  RW:{name:'Right winger',abbr:'RW',intro:'Right-sided wide attackers, sorted by their displayed Transfermarkt market values.'},
  LW:{name:'Left winger',abbr:'LW',intro:'Left-sided wide attackers, sorted by their displayed Transfermarkt market values.'},
  ST:{name:'Centre-forward',abbr:'ST',intro:'Central forwards, sorted by their displayed Transfermarkt market values.'}
};

const roleOrder = ['GK','RB','CB','LB','DM','CM','CAM','RW','LW','ST'];
const roleNames = {
  GK:'Goalkeeper',RB:'Right back',CB:'Centre-back',LB:'Left back',
  DM:'Defensive midfielder',CM:'Central midfielder',CAM:'Attacking midfielder',
  RW:'Right winger',LW:'Left winger',ST:'Centre-forward'
};
const formatValue = value => value >= 1000000
  ? `€${(value/1000000).toLocaleString('en-GB',{maximumFractionDigits:2})}m`
  : `€${Math.round(value/1000).toLocaleString('en-GB')}k`;
const escapeHTML = str => String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const initials = name => name.split(/\s+/).filter(Boolean).slice(0,2).map(s => s[0]).join('').toUpperCase();
const sortedByValue = list => [...list].sort((a,b)=>b.marketValue-a.marketValue || a.name.localeCompare(b.name));
const allIds = players.map(p=>p.id);
if (new Set(allIds).size !== allIds.length) throw new Error('Duplicate player IDs in squad data.');
if (new Set(players.map(p=>p.name.toLocaleLowerCase())).size !== players.length) throw new Error('Duplicate player names across positions.');
if (players.some(p=>!roles[p.primary])) throw new Error('A player has an unmapped primary position.');

let selectedRole = 'ST';
let activeFilter = 'all';
let activePoolFilter = 'all';
let searchTerm = '';

const poolForRole = role => sortedByValue(players.filter(p=>p.primary===role));
const visibleForRole = role => {
  const list = poolForRole(role);
  return activeFilter === 'current'
    ? list.filter(p=>p.status==='current')
    : list.slice(0,10);
};

function renderFormation(){
  document.querySelectorAll('.position-node').forEach(node=>{
    const role=node.dataset.role;
    const index=Number(node.dataset.rank||0);
    const sorted=poolForRole(role);
    const leader=sorted[index]||sorted[0];
    const count=poolForRole(role).length;
    node.classList.toggle('selected',role===selectedRole);
    const nameEl=node.querySelector('strong');
    const countEl=node.querySelector('.node-count');
    if(nameEl) nameEl.textContent=leader?leader.name:'No player';
    if(countEl) countEl.innerHTML=`${Math.min(count,10)} ranked <i>↗</i>`;
  });
}

function renderRole(role){
  selectedRole = role;
  const info = roles[role];
  document.querySelectorAll('.position-node').forEach(node => node.classList.toggle('selected',node.dataset.role===role));
  document.getElementById('depth-title').innerHTML = `${escapeHTML(info.name)} <span>${role}</span>`;
  document.getElementById('depth-intro').textContent = info.intro;
  document.getElementById('role-index').textContent = `${String(roleOrder.indexOf(role)+1).padStart(2,'0')} / 10`;
  const ids = visibleForRole(role);
  const list = document.getElementById('depth-list');
  list.innerHTML = ids.map((p,index)=>{
    return `<button class="depth-row" type="button" data-player="${p.id}"><span class="depth-rank">${String(index+1).padStart(2,'0')}</span><span><span class="depth-player-name">${escapeHTML(p.name)}</span><span class="depth-player-meta">${escapeHTML(p.primary)} · ${p.status==='current'?'Senior squad':'Extended squad'}</span></span><span class="value-tag">${formatValue(p.marketValue)}</span><span class="arrow">↗</span></button>`;
  }).join('') || '<div class="empty-state">No players in this group.</div>';
  document.getElementById('depth-count').textContent = `${ids.length} ${ids.length===1?'player':'players'}`;
  document.querySelectorAll('.filter-chip').forEach(b=>b.classList.toggle('active',b.dataset.filter===activeFilter));
  list.querySelectorAll('[data-player]').forEach(btn=>btn.addEventListener('click',()=>openPlayer(btn.dataset.player)));
  renderFormation();
}

function renderPool(){
  const grid = document.getElementById('player-grid');
  const filtered = sortedByValue(players).filter(p=>{
    const poolMatch = activePoolFilter==='all'
      || (activePoolFilter==='current' ? p.status==='current' : p.status==='extended');
    const text = `${p.name} ${p.primary} ${roleNames[p.primary]}`.toLowerCase();
    const searchMatch = !searchTerm || text.includes(searchTerm.toLowerCase());
    return poolMatch && searchMatch;
  });
  grid.innerHTML = filtered.map(p=>`<button class="player-card" type="button" data-player="${p.id}"><span class="player-monogram">${p.initials||initials(p.name)}</span><span class="player-card-info"><span class="player-card-name">${escapeHTML(p.name)}</span><span class="player-card-role">${escapeHTML(p.primary)} · ${escapeHTML(roleNames[p.primary])}</span><span class="player-card-value">${formatValue(p.marketValue)}</span><span class="player-card-status ${p.status==='extended'?'extended':''}">${p.status==='current'?'SENIOR SQUAD':'EXTENDED POOL'}</span></span></button>`).join('');
  document.getElementById('empty-state').hidden = filtered.length>0;
  grid.querySelectorAll('[data-player]').forEach(btn=>btn.addEventListener('click',()=>openPlayer(btn.dataset.player)));
  document.getElementById('all-count').textContent=players.length;
  document.getElementById('current-count').textContent=players.filter(p=>p.status==='current').length;
  document.getElementById('extended-count').textContent=players.filter(p=>p.status==='extended').length;
}

function openPlayer(id){
  const p=players.find(player=>player.id===id); if(!p) return;
  document.getElementById('modal-avatar').textContent=p.initials||initials(p.name);
  document.getElementById('modal-name').textContent=p.name;
  document.getElementById('modal-status').textContent=p.status==='current'?'CURRENT SENIOR SQUAD':'MOROCCO EXTENDED SQUAD';
  document.getElementById('modal-role').textContent=`${p.primary} · ${roleNames[p.primary]}`;
  document.getElementById('modal-value').textContent=formatValue(p.marketValue);
  document.getElementById('modal-pool').textContent=p.status==='current'?'Latest senior squad':'Extended squad pool';
  document.getElementById('modal-note').textContent='Transfermarkt lists this player in Morocco’s extended national-team squad. The figure shown is an estimated market value, not a transfer fee or a rating of playing ability.';
  document.getElementById('modal-source').href=SOURCE_URL;
  const modal=document.getElementById('player-modal'); modal.hidden=false; document.body.style.overflow='hidden';
  document.getElementById('modal-close').focus();
}
function closePlayer(){document.getElementById('player-modal').hidden=true;document.body.style.overflow='';}

document.querySelectorAll('.position-node').forEach(node=>node.addEventListener('click',()=>{activeFilter='all';renderRole(node.dataset.role);}));
document.querySelectorAll('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{activeFilter=btn.dataset.filter;renderRole(selectedRole);}));
document.querySelectorAll('.pool-tab').forEach(btn=>btn.addEventListener('click',()=>{activePoolFilter=btn.dataset.poolFilter;document.querySelectorAll('.pool-tab').forEach(b=>b.classList.toggle('active',b===btn));renderPool();}));
document.getElementById('player-search').addEventListener('input',e=>{searchTerm=e.target.value.trim();renderPool();});
document.getElementById('modal-close').addEventListener('click',closePlayer);
document.getElementById('player-modal').addEventListener('click',e=>{if(e.target.id==='player-modal')closePlayer();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('player-modal').hidden)closePlayer();});
document.getElementById('theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');document.querySelector('meta[name="theme-color"]').setAttribute('content',dark?'#111713':'#f4f5f1');});

renderRole(selectedRole);
renderPool();
document.getElementById('stat-players').textContent=players.length;
document.getElementById('stat-positions').textContent=roleOrder.length;
document.getElementById('stat-squad').textContent=players.filter(p=>p.status==='current').length;
