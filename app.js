// Moroccan Footballers — value-ranked Moroccan nationality player pool.
// Snapshot: 25 November 2026. Most recent high-value entries are cross-checked against
// the November 2026 Atlas Lions Insider tracker; further rankings use Transfermarkt's
// Morocco nationality market-value list. Values are estimates, not transfer fees.
const DATA_SNAPSHOT = '25 Nov 2026';
const TRANSFERMARKT_NATIONALITY_URL = 'https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/mw/land_id/107';
const TRANSFERMARKT_SQUAD_URL = 'https://www.transfermarkt.com/morocco/kader/verein/3575/saison_id/2026';
const PROMATCH_URL = 'https://promatch24.com/players/?country_id=17704';
const NOVEMBER_TRACKER_URL = 'https://www.atlaslionsinsider.com/news/analysis/morocco-football-market-values-november-2026/';

const players = [
  // Goalkeepers — GK
  {id:'bounou',name:'Yassine Bounou',position:'GK',value:3000000},
  {id:'benabid',name:'El Mehdi Benabid',position:'GK',value:1500000},
  {id:'tagnaouti',name:'Ahmed Reda Tagnaouti',position:'GK',value:1000000},
  {id:'al-harrar',name:'El Mehdi Al Harrar',position:'GK',value:1000000},
  {id:'chihab',name:'Salaheddine Chihab',position:'GK',value:900000},
  {id:'bellaarouch',name:'Alaa Bellaarouch',position:'GK',value:850000},
  {id:'munir',name:'Munir El Kajoui',position:'GK',value:600000},
  {id:'hamiani',name:'Hamza Hamiani',position:'GK',value:450000},
  {id:'zniti',name:'Anas Zniti',position:'GK',value:450000},
  {id:'lakred',name:'Ayoub Lakred',position:'GK',value:400000},

  // Right-backs — RB
  {id:'hakimi',name:'Achraf Hakimi',position:'RB',value:80000000},
  {id:'mazraoui',name:'Noussair Mazraoui',position:'RB',value:18000000},
  {id:'el-ouahdi',name:'Zakaria El Ouahdi',position:'RB',value:17000000},
  {id:'el-hilali',name:'Omar El Hilali',position:'RB',value:15000000},
  {id:'chabane',name:'Amine Chabane',position:'RB',value:2000000},
  {id:'maamar',name:'Ali Maamar',position:'RB',value:1500000},
  {id:'el-hannach',name:'Naoufel El Hannach',position:'RB',value:1500000},
  {id:'moufid',name:'Mohamed Moufid',position:'RB',value:1000000},
  {id:'fahd-moufi',name:'Fahd Moufi',position:'RB',value:900000},
  {id:'oualid-mhamdi',name:'Oualid Mhamdi',position:'RB',value:900000},

  // Centre-backs — CB
  {id:'ait-boudlal',name:'Abdelhamid Aït Boudlal',position:'CB',value:20000000},
  {id:'chadi-riad',name:'Chadi Riad',position:'CB',value:20000000},
  {id:'aguerd',name:'Nayef Aguerd',position:'CB',value:15000000},
  {id:'diop',name:'Issa Diop',position:'CB',value:8000000},
  {id:'halhal',name:'Redouane Halhal',position:'CB',value:5000000},
  {id:'abqar',name:'Abdel Abqar',position:'CB',value:3500000},
  {id:'el-wafi',name:'Ayman El Wafi',position:'CB',value:2200000},
  {id:'kandouss',name:'Ismaël Kandouss',position:'CB',value:1800000},
  {id:'saiss',name:'Romain Saïss',position:'CB',value:1200000},
  {id:'masina',name:'Adam Masina',position:'CB',value:1000000},

  // Left-backs — LB
  {id:'el-karouani',name:'Souffian El Karouani',position:'LB',value:15000000},
  {id:'salah-eddine',name:'Anass Salah-Eddine',position:'LB',value:12000000},
  {id:'aznou',name:'Adam Aznou',position:'LB',value:6000000},
  {id:'enriquez',name:'Youssef Enríquez',position:'LB',value:5000000},
  {id:'zekri',name:'Moncef Zekri',position:'LB',value:4000000},
  {id:'ariss',name:'Zakaria Ariss',position:'LB',value:2000000},
  {id:'bentayg',name:'Mahmoud Bentayg',position:'LB',value:1000000},
  {id:'attiyat-allah',name:'Yahia Attiyat Allah',position:'LB',value:800000},
  {id:'mendyl',name:'Hamza Mendyl',position:'LB',value:800000},
  {id:'khammas',name:'Amine Khammas',position:'LB',value:450000},

  // Defensive midfielders — DM
  {id:'targhalline',name:'Oussama Targhalline',position:'DM',value:16000000},
  {id:'amrabat',name:'Sofyan Amrabat',position:'DM',value:10000000},
  {id:'belahyane',name:'Reda Belahyane',position:'DM',value:6800000},
  {id:'el-azzouzi',name:'Oussama El Azzouzi',position:'DM',value:1800000},
  {id:'bach',name:'Anas Bach',position:'DM',value:1500000},
  {id:'hrimat',name:'Mohamed Rabie Hrimat',position:'DM',value:1500000},
  {id:'moubarik',name:'Mehdi Moubarik',position:'DM',value:900000},
  {id:'jabrane',name:'Yahya Jabrane',position:'DM',value:800000},
  {id:'ait-bennasser',name:'Youssef Aït Bennasser',position:'DM',value:800000},
  {id:'zidani',name:'Ishak Zidani',position:'DM',value:375000},

  // Central midfielders — CM
  {id:'bouaddi',name:'Ayyoub Bouaddi',position:'CM',value:90000000},
  {id:'el-aynaoui',name:'Neil El Aynaoui',position:'CM',value:30000000},
  {id:'el-mourabet',name:'Samir El Mourabet',position:'CM',value:22000000},
  {id:'louza',name:'Imrân Louza',position:'CM',value:14000000},
  {id:'ounahi',name:'Azzedine Ounahi',position:'CM',value:10000000},
  {id:'el-faouzi',name:'Soufiane El-Faouzi',position:'CM',value:9000000},
  {id:'nadir',name:'Bilal Nadir',position:'CM',value:8000000},
  {id:'belkhdim',name:'Yassin Belkhdim',position:'CM',value:7000000},
  {id:'bouchouari',name:'Benjamin Bouchouari',position:'CM',value:4500000},
  {id:'kechta',name:'Yassine Kechta',position:'CM',value:4000000},

  // Attacking midfielders — CAM
  {id:'saibari',name:'Ismael Saibari',position:'CAM',value:55000000},
  {id:'el-khannouss',name:'Bilal El Khannouss',position:'CAM',value:35000000},
  {id:'chair',name:'Ilias Chair',position:'CAM',value:5000000},
  {id:'bounida',name:'Rayane Bounida',position:'CAM',value:5000000},
  {id:'boufal',name:'Sofiane Boufal',position:'CAM',value:1800000},
  {id:'zouhzouh',name:'Amine Zouhzouh',position:'CAM',value:1800000},
  {id:'ouazane',name:'Abdellah Ouazane',position:'CAM',value:1500000},
  {id:'ziani',name:'Ilyes Ziani',position:'CAM',value:1000000},
  {id:'essadak',name:'Hossam Essadak',position:'CAM',value:1000000},
  {id:'munir-haddadi',name:'Munir El Haddadi',position:'CAM',value:1500000},

  // Left wingers — LW
  {id:'abde',name:'Abde Ezzalzouli',position:'LW',value:40000000},
  {id:'adli',name:'Amine Adli',position:'LW',value:20000000},
  {id:'ben-seghir',name:'Eliesse Ben Seghir',position:'LW',value:20000000},
  {id:'sofiane-diop',name:'Sofiane Diop',position:'LW',value:15000000},
  {id:'sahraoui',name:'Osame Sahraoui',position:'LW',value:9000000},
  {id:'driouech',name:'Couhaib Driouech',position:'LW',value:7500000},
  {id:'zaroury',name:'Anass Zaroury',position:'LW',value:7000000},
  {id:'idrissi',name:'Oussama Idrissi',position:'LW',value:6000000},
  {id:'harit',name:'Amine Harit',position:'LW',value:5000000},
  {id:'sbai',name:'Amine Sbaï',position:'LW',value:6000000},

  // Right wingers — RW
  {id:'brahim',name:'Brahim Díaz',position:'RW',value:35000000},
  {id:'talbi',name:'Chemsdine Talbi',position:'RW',value:25000000},
  {id:'akhomach',name:'Ilias Akhomach',position:'RW',value:12000000},
  {id:'gessime',name:'Gessime Yassine',position:'RW',value:12000000},
  {id:'amaimouni',name:'Ayoube Amaimouni-Echghouyab',position:'RW',value:10000000},
  {id:'jones',name:'Jones El-Abdellaoui',position:'RW',value:8000000},
  {id:'maamma',name:'Othmane Maamma',position:'RW',value:8000000},
  {id:'taha',name:'Younes Taha',position:'RW',value:6500000},
  {id:'aboukhlal',name:'Zakaria Aboukhlal',position:'RW',value:6000000},
  {id:'ziyech',name:'Hakim Ziyech',position:'RW',value:2200000},

  // Centre-forwards — ST
  {id:'zabiri',name:'Yassir Zabiri',position:'ST',value:20000000},
  {id:'igamane',name:'Hamza Igamane',position:'ST',value:18000000},
  {id:'ennesyri',name:'Youssef En-Nesyri',position:'ST',value:17000000},
  {id:'begraoui',name:'Yanis Begraoui',position:'ST',value:12000000},
  {id:'bentayeb',name:'Tawfik Bentayeb',position:'ST',value:8000000},
  {id:'rahimi',name:'Soufiane Rahimi',position:'ST',value:6000000},
  {id:'el-kaabi',name:'Ayoub El Kaabi',position:'ST',value:4500000},
  {id:'azaro',name:'Walid Azaro',position:'ST',value:3000000},
  {id:'ryan-mmaee',name:'Ryan Mmaee',position:'ST',value:2200000},
  {id:'cheddira',name:'Walid Cheddira',position:'ST',value:2000000}
];

const roles = {
  GK:{name:'Goalkeeper',code:'GK',intro:'Goalkeepers ranked by estimated market value.'},
  RB:{name:'Right back',code:'RB',intro:'Right-sided full-backs ranked by their listed primary position.'},
  CB:{name:'Centre-back',code:'CB',intro:'Centre-backs ranked by estimated market value. The two centre-back slots on the pitch show different players from this same primary-position pool.'},
  LB:{name:'Left back',code:'LB',intro:'Left-sided full-backs ranked by their listed primary position.'},
  DM:{name:'Defensive midfield',code:'DM',intro:'Holding and defensive midfielders. The two pivot slots show different players from this same primary-position pool.'},
  CM:{name:'Central midfield',code:'CM',intro:'Central midfielders ranked by estimated market value.'},
  CAM:{name:'Attacking midfield',code:'CAM',intro:'Attacking midfielders and central creators ranked by estimated market value.'},
  RW:{name:'Right winger',code:'RW',intro:'Right-sided wide attackers ranked by their listed primary position.'},
  LW:{name:'Left winger',code:'LW',intro:'Left-sided wide attackers ranked by their listed primary position.'},
  ST:{name:'Centre-forward',code:'ST',intro:'Central forwards ranked by estimated market value.'}
};

const roleOrder = ['GK','RB','CB','LB','DM','CM','CAM','RW','LW','ST'];
const playersById = new Map(players.map(player=>[player.id,player]));
const normaliseName = name => name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

if (playersById.size !== players.length) throw new Error('Duplicate player IDs in player data.');
if (new Set(players.map(player=>normaliseName(player.name))).size !== players.length) throw new Error('A player appears more than once. Each player must have one primary position.');
if (players.some(player=>!roles[player.position])) throw new Error('A player has an unmapped primary position.');
if (players.some(player=>!Number.isFinite(player.value)||player.value<0)) throw new Error('A player has an invalid market value.');
for (const role of roleOrder) {
  const count=players.filter(player=>player.position===role).length;
  if (count!==10) throw new Error(`${role} must have exactly 10 unique players; found ${count}.`);
}

const rankedFor = role => players
  .filter(player=>player.position===role)
  .sort((a,b)=>b.value-a.value || a.name.localeCompare(b.name))
  .slice(0,10);
const allRanked = () => [...players].sort((a,b)=>b.value-a.value || a.name.localeCompare(b.name));
const formatValue = value => value>=1000000
  ? `€${(value/1000000).toLocaleString('en-GB',{minimumFractionDigits:1,maximumFractionDigits:1})}m`
  : `€${Math.round(value/1000).toLocaleString('en-GB')}k`;
const escapeHTML = value => String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const makeInitials = name => name.split(/\s+/).filter(Boolean).slice(0,2).map(part=>part[0]).join('').toUpperCase();

let selectedRole = 'ST';
let selectedNodeId = 'node-st';
let searchTerm = '';

function renderFormation(){
  document.querySelectorAll('.position-node').forEach(node=>{
    const role=node.dataset.role;
    const slot=Number(node.dataset.slotIndex||0);
    const options=rankedFor(role);
    const player=options[slot];
    node.classList.toggle('selected',node.dataset.nodeId===selectedNodeId);
    const nameEl=node.querySelector('strong');
    const countEl=node.querySelector('.node-count');
    if(nameEl) nameEl.textContent=player?player.name:'No player available';
    if(countEl) countEl.innerHTML=`${options.length} ranked <i>↗</i>`;
  });
}

function renderRole(role,nodeId=selectedNodeId){
  selectedRole=role;
  selectedNodeId=nodeId;
  const info=roles[role];
  const options=rankedFor(role);
  const positionIndex=roleOrder.indexOf(role)+1;
  document.getElementById('depth-title').innerHTML=`${escapeHTML(info.name)} <span>${role}</span>`;
  document.getElementById('depth-intro').textContent=info.intro;
  document.getElementById('role-index').textContent=`${String(positionIndex).padStart(2,'0')} / 10`;
  document.getElementById('depth-count').textContent=`${options.length} ranked players`;
  document.getElementById('depth-list').innerHTML=options.map((player,index)=>`
    <button class="depth-row" type="button" data-player="${player.id}">
      <span class="depth-rank">${String(index+1).padStart(2,'0')}</span>
      <span><span class="depth-player-name">${escapeHTML(player.name)}</span><span class="depth-player-meta">${player.position} · primary position</span></span>
      <span class="value-tag">${formatValue(player.value)}</span>
      <span class="arrow">↗</span>
    </button>`).join('');
  document.getElementById('depth-list').querySelectorAll('[data-player]').forEach(button=>{
    button.addEventListener('click',()=>openPlayer(button.dataset.player));
  });
  document.querySelectorAll('.position-node').forEach(node=>node.classList.toggle('selected',node.dataset.nodeId===selectedNodeId));
  renderFormation();
}

function renderPool(){
  const filtered=allRanked().filter(player=>{
    const query=`${player.name} ${player.position} ${roles[player.position].name}`.toLowerCase();
    return !searchTerm || query.includes(searchTerm.toLowerCase());
  });
  document.getElementById('player-grid').innerHTML=filtered.map(player=>`
    <button class="player-card" type="button" data-player="${player.id}">
      <span class="player-monogram">${makeInitials(player.name)}</span>
      <span class="player-card-info">
        <span class="player-card-name">${escapeHTML(player.name)}</span>
        <span class="player-card-role">${player.position} · ${escapeHTML(roles[player.position].name)}</span>
        <span class="player-card-value">${formatValue(player.value)}</span>
      </span>
    </button>`).join('');
  document.getElementById('empty-state').hidden=filtered.length>0;
  document.getElementById('all-count').textContent=players.length;
  document.getElementById('player-grid').querySelectorAll('[data-player]').forEach(button=>{
    button.addEventListener('click',()=>openPlayer(button.dataset.player));
  });
}

function openPlayer(id){
  const player=playersById.get(id);
  if(!player) return;
  document.getElementById('modal-avatar').textContent=makeInitials(player.name);
  document.getElementById('modal-name').textContent=player.name;
  document.getElementById('modal-status').textContent='MOROCCAN PLAYER · VALUE RANKED';
  document.getElementById('modal-role').textContent=`${player.position} · ${roles[player.position].name}`;
  document.getElementById('modal-value').textContent=formatValue(player.value);
  document.getElementById('modal-note').textContent=`Market-value snapshot checked ${DATA_SNAPSHOT}. This is an estimate, not a transfer fee or an assessment of ability. Lower-value entries may come from older indexed Transfermarkt records; check the live source before using the figure for a transfer decision.`;
  document.getElementById('modal-source-promatch').href=PROMATCH_URL;
  document.getElementById('modal-source-tm').href=TRANSFERMARKT_NATIONALITY_URL;
  document.getElementById('modal-source-atlas').href=NOVEMBER_TRACKER_URL;
  const modal=document.getElementById('player-modal');
  modal.hidden=false;
  document.body.style.overflow='hidden';
  document.getElementById('modal-close').focus();
}

function closePlayer(){
  document.getElementById('player-modal').hidden=true;
  document.body.style.overflow='';
}

document.querySelectorAll('.position-node').forEach(node=>{
  node.addEventListener('click',()=>renderRole(node.dataset.role,node.dataset.nodeId));
});
document.getElementById('player-search').addEventListener('input',event=>{
  searchTerm=event.target.value.trim();
  renderPool();
});
document.getElementById('modal-close').addEventListener('click',closePlayer);
document.getElementById('player-modal').addEventListener('click',event=>{
  if(event.target.id==='player-modal') closePlayer();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&!document.getElementById('player-modal').hidden) closePlayer();
});
document.getElementById('theme-toggle').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  document.querySelector('meta[name="theme-color"]').setAttribute('content',dark?'#111713':'#f4f5f1');
});

document.getElementById('stat-players').textContent=players.length;
document.getElementById('stat-positions').textContent=roleOrder.length;
document.getElementById('stat-top').textContent='10';
document.getElementById('data-snapshot').textContent=DATA_SNAPSHOT;
renderRole(selectedRole,'node-st');
renderPool();
