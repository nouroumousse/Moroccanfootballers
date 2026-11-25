// Moroccan Footballers — value-ranked Moroccan player pool.
// Snapshot: 25 November 2026. Values are Transfermarkt market-value estimates,
// surfaced through ProMatch24 and Transfermarkt sources (not transfer fees).
const DATA_SNAPSHOT = '25 Nov 2026';
const PROMATCH_URL = 'https://promatch24.com/players/?country_id=17704';
const TRANSFERMARKT_MARKET_URL = 'https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/mw/land_id/107';
const TRANSFERMARKT_MOROCCO_URL = 'https://www.transfermarkt.com/marokko/erweiterterkader/verein/3575';

const players = [
  // Goalkeepers
  {id:'bounou',name:'Yassine Bounou',position:'GK',value:3000000},
  {id:'benabid',name:'El Mehdi Benabid',position:'GK',value:1500000},
  {id:'al-harrar',name:'El Mehdi Al Harrar',position:'GK',value:1000000},
  {id:'tagnaouti',name:'Ahmed Reda Tagnaouti',position:'GK',value:1000000},
  {id:'chihab',name:'Salaheddine Chihab',position:'GK',value:900000},
  {id:'munir',name:'Munir El Kajoui',position:'GK',value:600000},
  {id:'ghanimi',name:'Rachid Ghanimi',position:'GK',value:325000},
  {id:'benchaouch',name:'Yanis Benchaouch',position:'GK',value:75000},
  {id:'gomis',name:'Ibrahim Gomis',position:'GK',value:50000},

  // Centre-backs
  {id:'ait-boudlal',name:'Abdelhamid Aït Boudlal',position:'CB',value:20000000},
  {id:'chadi-riad',name:'Chadi Riad',position:'CB',value:15000000},
  {id:'aguerd',name:'Nayef Aguerd',position:'CB',value:15000000},
  {id:'diop',name:'Issa Diop',position:'CB',value:10000000},
  {id:'halhal',name:'Redouane Halhal',position:'CB',value:5000000},
  {id:'baouf',name:'Ismaël Baouf',position:'CB',value:3000000},
  {id:'bouftini',name:'Soufiane Bouftini',position:'CB',value:1300000},
  {id:'saiss',name:'Romain Saïss',position:'CB',value:1200000},
  {id:'masina',name:'Adam Masina',position:'CB',value:1000000},
  {id:'assal',name:'Abdelhak Assal',position:'CB',value:800000},

  // Left-backs
  {id:'el-karouani',name:'Souffian El Karouani',position:'LB',value:15000000},
  {id:'salah-eddine',name:'Anass Salah-Eddine',position:'LB',value:12000000},
  {id:'aznou',name:'Adam Aznou',position:'LB',value:6000000},
  {id:'zahouani',name:'Fouad Zahouani',position:'LB',value:1200000},
  {id:'belammari',name:'Youssef Belammari',position:'LB',value:1200000},
  {id:'bentayg',name:'Mahmoud Bentayg',position:'LB',value:1000000},
  {id:'el-moussaoui',name:'Hamza El Moussaoui',position:'LB',value:700000},

  // Right-backs
  {id:'hakimi',name:'Achraf Hakimi',position:'RB',value:80000000},
  {id:'mazraoui',name:'Noussair Mazraoui',position:'RB',value:18000000},
  {id:'el-ouahdi',name:'Zakaria El Ouahdi',position:'RB',value:17000000},
  {id:'el-hilali',name:'Omar El Hilali',position:'RB',value:15000000},
  {id:'maamar',name:'Ali Maamar',position:'RB',value:5000000},
  {id:'chibi',name:'Mohamed Chibi',position:'RB',value:1000000},
  {id:'moufid',name:'Mohamed Moufid',position:'RB',value:1000000},
  {id:'boulacsout',name:'Mohamed Boulacsout',position:'RB',value:700000},

  // Defensive midfielders
  {id:'targhalline',name:'Oussama Targhalline',position:'DM',value:16000000},
  {id:'amrabat',name:'Sofyan Amrabat',position:'DM',value:10000000},
  {id:'belahyane',name:'Reda Belahyane',position:'DM',value:6800000},
  {id:'el-mahdioui',name:'Aschraf El Mahdioui',position:'DM',value:3000000},
  {id:'bach',name:'Anas Bach',position:'DM',value:1700000},
  {id:'hrimat',name:'Mohamed Rabie Hrimat',position:'DM',value:1500000},

  // Central midfielders
  {id:'bouaddi',name:'Ayyoub Bouaddi',position:'CM',value:90000000},
  {id:'el-aynaoui',name:'Neil El Aynaoui',position:'CM',value:23000000},
  {id:'el-mourabet',name:'Samir El Mourabet',position:'CM',value:22000000},
  {id:'louza',name:'Imrân Louza',position:'CM',value:14000000},
  {id:'ounahi',name:'Azzedine Ounahi',position:'CM',value:10000000},
  {id:'el-faouzi',name:'Soufiane El-Faouzi',position:'CM',value:9000000},
  {id:'nadir',name:'Bilal Nadir',position:'CM',value:8000000},
  {id:'belkhdim',name:'Yassin Belkhdim',position:'CM',value:7000000},
  {id:'khairi',name:'Ayoub Khairi',position:'CM',value:1200000},
  {id:'el-karti',name:'Walid El Karti',position:'CM',value:850000},

  // Attacking midfielders
  {id:'saibari',name:'Ismael Saibari',position:'CAM',value:40000000},
  {id:'el-khannouss',name:'Bilal El Khannouss',position:'CAM',value:35000000},
  {id:'ouazane',name:'Abdellah Ouazane',position:'CAM',value:8000000},
  {id:'bounida',name:'Rayane Bounida',position:'CAM',value:5000000},
  {id:'chair',name:'Ilias Chair',position:'CAM',value:5000000},
  {id:'boufal',name:'Sofiane Boufal',position:'CAM',value:1800000},
  {id:'zouhzouh',name:'Amine Zouhzouh',position:'CAM',value:1800000},
  {id:'tannane',name:'Oussama Tannane',position:'CAM',value:1000000},
  {id:'essadak',name:'Hossam Essadak',position:'CAM',value:1000000},
  {id:'ait-ouarkhane',name:'Khalid Aït Ouarkhane',position:'CAM',value:900000},

  // Left wingers
  {id:'abde',name:'Abde Ezzalzouli',position:'LW',value:40000000},
  {id:'adli',name:'Amine Adli',position:'LW',value:20000000},
  {id:'ben-seghir',name:'Eliesse Ben Seghir',position:'LW',value:20000000},
  {id:'sofiane-diop',name:'Sofiane Diop',position:'LW',value:15000000},
  {id:'id­rissi',name:'Oussama Idrissi',position:'LW',value:6000000},
  {id:'harit',name:'Amine Harit',position:'LW',value:5000000},
  {id:'sbai',name:'Amine Sbaï',position:'LW',value:4000000},
  {id:'chouiar',name:'Mounir Chouiar',position:'LW',value:2800000},
  {id:'mehri',name:'Youssef Mehri',position:'LW',value:1200000},
  {id:'el-mahraoui',name:'Anas El Mahraoui',position:'LW',value:400000},

  // Right wingers
  {id:'brahim',name:'Brahim Díaz',position:'RW',value:35000000},
  {id:'talbi',name:'Chemsdine Talbi',position:'RW',value:25000000},
  {id:'gessime',name:'Gessime Yassine',position:'RW',value:20000000},
  {id:'akhomach',name:'Ilias Akhomach',position:'RW',value:12000000},
  {id:'amaimouni',name:'Ayoube Amaimouni-Echghouyab',position:'RW',value:10000000},
  {id:'aboukhlal',name:'Zakaria Aboukhlal',position:'RW',value:6000000},
  {id:'maamma',name:'Othmane Maamma',position:'RW',value:5000000},
  {id:'oufkir',name:'Ayoub Oufkir',position:'RW',value:3000000},

  // Centre-forwards
  {id:'zabiri',name:'Yassir Zabiri',position:'ST',value:20000000},
  {id:'igamane',name:'Hamza Igamane',position:'ST',value:18000000},
  {id:'ennesyri',name:'Youssef En-Nesyri',position:'ST',value:17000000},
  {id:'begraoui',name:'Yanis Begraoui',position:'ST',value:12000000},
  {id:'rahimi',name:'Soufiane Rahimi',position:'ST',value:6000000},
  {id:'el-kaabi',name:'Ayoub El Kaabi',position:'ST',value:4000000},
  {id:'azaro',name:'Walid Azaro',position:'ST',value:3000000},
  {id:'sannadi',name:'Maroan Sannadi',position:'ST',value:3000000},
  {id:'tissoudali',name:'Tarik Tissoudali',position:'ST',value:2500000},
  {id:'benjdida',name:'Soufiane Benjdida',position:'ST',value:2200000}
];

const roles = {
  GK:{name:'Goalkeeper',code:'GK',intro:'Goalkeepers ranked by estimated market value.'},
  RB:{name:'Right back',code:'RB',intro:'Right-sided full-backs ranked by estimated market value.'},
  CB:{name:'Centre-back',code:'CB',intro:'Central defenders. The two centre-back slots share one primary-position pool; each slot is assigned a different player.'},
  LB:{name:'Left back',code:'LB',intro:'Left-sided full-backs ranked by their listed primary position.'},
  DM:{name:'Defensive midfield',code:'DM',intro:'Ball-winning and holding midfielders. The two pivot slots are filled by different players from this position group.'},
  CM:{name:'Central midfield',code:'CM',intro:'Central midfielders ranked by estimated market value.'},
  CAM:{name:'Attacking midfield',code:'CAM',intro:'Attacking midfielders and central creators ranked by market value.'},
  RW:{name:'Right winger',code:'RW',intro:'Right-sided wide forwards ranked by their listed primary position.'},
  LW:{name:'Left winger',code:'LW',intro:'Left-sided wide forwards ranked by their listed primary position.'},
  ST:{name:'Centre-forward',code:'ST',intro:'Central forwards ranked by estimated market value.'}
};

const roleOrder = ['GK','RB','CB','LB','DM','CM','CAM','RW','LW','ST'];
const playersById = new Map(players.map(player=>[player.id,player]));
const normaliseName = name => name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

if (playersById.size !== players.length) throw new Error('Duplicate player IDs in player data.');
if (new Set(players.map(p=>normaliseName(p.name))).size !== players.length) throw new Error('A player appears more than once. Each player must have one primary position.');
if (players.some(p=>!roles[p.position])) throw new Error('A player has an unmapped primary position.');
if (players.some(p=>!Number.isFinite(p.value)||p.value<0)) throw new Error('A player has an invalid market value.');

const valueRanked = role => players
  .filter(p=>p.position===role)
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
    const options=valueRanked(role);
    const player=options[slot];
    node.classList.toggle('selected',node.dataset.nodeId===selectedNodeId);
    const nameEl=node.querySelector('strong');
    const countEl=node.querySelector('.node-count');
    if(nameEl) nameEl.textContent=player?player.name:'No listed option';
    if(countEl) countEl.innerHTML=`${options.length} ranked <i>↗</i>`;
  });
}

function renderRole(role,nodeId=selectedNodeId){
  selectedRole=role;
  selectedNodeId=nodeId;
  const info=roles[role];
  const options=valueRanked(role);
  const positionIndex=roleOrder.indexOf(role)+1;
  document.getElementById('depth-title').innerHTML=`${escapeHTML(info.name)} <span>${role}</span>`;
  document.getElementById('depth-intro').textContent=info.intro;
  document.getElementById('role-index').textContent=`${String(positionIndex).padStart(2,'0')} / 10`;
  document.getElementById('depth-count').textContent=`${options.length} ranked ${options.length===1?'player':'players'}`;
  document.getElementById('depth-list').innerHTML=options.map((player,index)=>`
    <button class="depth-row" type="button" data-player="${player.id}">
      <span class="depth-rank">${String(index+1).padStart(2,'0')}</span>
      <span><span class="depth-player-name">${escapeHTML(player.name)}</span><span class="depth-player-meta">${player.position} · primary position</span></span>
      <span class="value-tag">${formatValue(player.value)}</span>
      <span class="arrow">↗</span>
    </button>`).join('') || '<div class="empty-state">No players found for this position.</div>';
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
  document.getElementById('modal-status').textContent='MOROCCO PLAYER POOL · VALUE RANKED';
  document.getElementById('modal-role').textContent=`${player.position} · ${roles[player.position].name}`;
  document.getElementById('modal-value').textContent=formatValue(player.value);
  document.getElementById('modal-note').textContent=`Market value snapshot: ${DATA_SNAPSHOT}. Values are estimates, not transfer fees or player-performance ratings.`;
  document.getElementById('modal-source-promatch').href=PROMATCH_URL;
  document.getElementById('modal-source-tm').href=TRANSFERMARKT_MARKET_URL;
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
