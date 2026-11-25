const players = [
  // Latest 26-man senior selection announced 4 November 2026.
  {id:'bounou',name:'Yassine Bounou',short:'Bono',initials:'YB',primary:'GK',status:'current',note:'First-choice goalkeeper in the latest announced senior squad.'},
  {id:'munir',name:'Munir Mohamedi',short:'Munir',initials:'MM',primary:'GK',status:'current',note:'Goalkeeper selected in the latest announced senior squad.'},
  {id:'tagnaouti',name:'Ahmed Reda Tagnaouti',short:'Tagnaouti',initials:'AT',primary:'GK',status:'current',note:'Goalkeeper selected in the latest announced senior squad.'},
  {id:'bellaarouch',name:'Alaa Bellaarouch',short:'Bellaarouch',initials:'AB',primary:'GK',status:'current',note:'Young goalkeeper selected in the latest announced senior squad.'},
  {id:'hakimi',name:'Achraf Hakimi',short:'Hakimi',initials:'AH',primary:'RB',status:'current',note:'Right-sided defender and one of the senior squad’s established leaders.'},
  {id:'mazraoui',name:'Noussair Mazraoui',short:'Mazraoui',initials:'NM',primary:'RB',status:'current',note:'Defender who can cover either full-back role.'},
  {id:'salah-eddine',name:'Anass Salah-Eddine',short:'Salah-Eddine',initials:'AS',primary:'LB',status:'current',note:'Left-sided defender selected in the latest senior squad.'},
  {id:'el-karouani',name:'Soufiane El Karouani',short:'El Karouani',initials:'SE',primary:'LB',status:'current',note:'Left-back option in the latest senior squad.'},
  {id:'aguerd',name:'Nayef Aguerd',short:'Aguerd',initials:'NA',primary:'CB',status:'current',note:'Centre-back selected in the latest senior squad.'},
  {id:'halhal',name:'Redouane Halhal',short:'Halhal',initials:'RH',primary:'CB',status:'current',note:'Centre-back selected in the latest senior squad.'},
  {id:'diop',name:'Issa Diop',short:'Diop',initials:'ID',primary:'CB',status:'current',note:'Centre-back selected in the latest senior squad.'},
  {id:'ait-boudlal',name:'Abdelhamid Aït Boudlal',short:'Aït Boudlal',initials:'AB',primary:'CB',status:'current',note:'Young centre-back selected in the latest senior squad.'},
  {id:'maamar',name:'Ali Maamar',short:'Maamar',initials:'AM',primary:'RB',status:'current',note:'Defender selected in the latest senior squad; included as a full-back option.'},
  {id:'bouaddi',name:'Ayyoub Bouaddi',short:'Bouaddi',initials:'AB',primary:'DM',status:'current',note:'Young central midfielder selected in the latest senior squad.'},
  {id:'el-aynaoui',name:'Neil El Aynaoui',short:'El Aynaoui',initials:'NE',primary:'DM',status:'current',note:'Central-midfield option in the latest senior squad.'},
  {id:'targhalline',name:'Oussama Targhalline',short:'Targhalline',initials:'OT',primary:'DM',status:'current',note:'Deep-midfield option in the latest senior squad.'},
  {id:'el-khannouss',name:'Bilal El Khannouss',short:'El Khannouss',initials:'BE',primary:'CAM',status:'current',note:'Creative central-midfield option in the latest senior squad.'},
  {id:'belahyane',name:'Reda Belahyane',short:'Belahyane',initials:'RB',primary:'DM',status:'current',note:'Central-midfield option selected in the latest senior squad.'},
  {id:'sbai',name:'Amine Sbaï',short:'Sbaï',initials:'AS',primary:'RW',status:'current',note:'Attacking option selected in the latest senior squad; mapped to wide roles here.'},
  {id:'ouazane',name:'Abdellah Ouazane',short:'Ouazane',initials:'AO',primary:'CAM',status:'current',note:'Young attacking-midfield option selected in the latest senior squad.'},
  {id:'brahim',name:'Brahim Díaz',short:'Brahim',initials:'BD',primary:'RW',status:'current',note:'Attacking midfielder/forward selected in the latest senior squad.'},
  {id:'gessime',name:'Yassine Gessime',short:'Gessime',initials:'YG',primary:'RW',status:'current',note:'Wide attacking option selected in the latest senior squad.'},
  {id:'abde',name:'Abdessamad Ezzalzouli',short:'Abde',initials:'AE',primary:'LW',status:'current',note:'Left-sided forward selected in the latest senior squad.'},
  {id:'oufkir',name:'Ayoub Oufkir',short:'Oufkir',initials:'AO',primary:'RW',status:'current',note:'Young attacking option selected in the latest senior squad.'},
  {id:'ennesyri',name:'Youssef En-Nesyri',short:'En-Nesyri',initials:'YE',primary:'ST',status:'current',note:'Centre-forward recalled to the latest senior squad.'},
  {id:'zabiri',name:'Yassir Zabiri',short:'Zabiri',initials:'YZ',primary:'ST',status:'current',note:'Young forward selected in the latest senior squad.'},

  // Additional senior options from the 17 September 2026 squad, not in the November group.
  {id:'saadane',name:'Marouane Saadane',short:'Saadane',initials:'MS',primary:'CB',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'el-ouahdi',name:'Zakaria El Ouahdi',short:'El Ouahdi',initials:'ZE',primary:'RB',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'el-mourabet',name:'Samir El Mourabet',short:'El Mourabet',initials:'SM',primary:'DM',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'el-faouzi',name:'Soufian El Faouzi',short:'El Faouzi',initials:'SF',primary:'LW',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'ounahi',name:'Azzedine Ounahi',short:'Ounahi',initials:'AO',primary:'CM',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'saibari',name:'Ismaël Saibari',short:'Saibari',initials:'IS',primary:'CAM',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'rahimi',name:'Soufiane Rahimi',short:'Rahimi',initials:'SR',primary:'LW',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'},
  {id:'bentayeb',name:'Tawfik Bentayeb',short:'Bentayeb',initials:'TB',primary:'ST',status:'extended',note:'Included in the September 2026 senior squad; not in the November group.'}
];

const roles = {
  GK:{name:'Goalkeeper',intro:'The last line. Goalkeepers included in the latest senior group.',players:['bounou','munir','tagnaouti','bellaarouch']},
  RB:{name:'Right back',intro:'Right-sided full-backs and defenders who can cover the flank.',players:['hakimi','mazraoui','maamar','el-ouahdi']},
  RCB:{name:'Right centre-back',intro:'Centre-backs mapped to the right side of the central pairing.',players:['aguerd','diop','halhal','ait-boudlal','saadane','mazraoui']},
  LCB:{name:'Left centre-back',intro:'Centre-backs mapped to the left side of the central pairing.',players:['aguerd','ait-boudlal','diop','halhal','saadane','mazraoui']},
  LB:{name:'Left back',intro:'Left-sided full-backs, with versatile defenders included as cover.',players:['el-karouani','salah-eddine','mazraoui','hakimi','el-ouahdi','maamar']},
  LDM:{name:'Left holding midfielder',intro:'The deeper midfield pair: screening the back four and helping progression.',players:['targhalline','el-aynaoui','bouaddi','belahyane','el-mourabet','ounahi','saibari','el-khannouss']},
  RDM:{name:'Right holding midfielder',intro:'The deeper midfield pair: ball recovery, circulation and support between the lines.',players:['el-aynaoui','bouaddi','targhalline','belahyane','el-mourabet','ounahi','saibari','el-khannouss']},
  RW:{name:'Right winger',intro:'Wide attackers and creative forwards who can start from the right.',players:['brahim','gessime','oufkir','sbai','el-faouzi','el-khannouss','saibari','ounahi']},
  CAM:{name:'Attacking midfielder',intro:'The central connector between midfield and the front line.',players:['el-khannouss','brahim','ounahi','saibari','ouazane','gessime','sbai']},
  LW:{name:'Left winger',intro:'Direct wide options who can attack from the left or move inside.',players:['abde','rahimi','gessime','sbai','el-faouzi','oufkir','zabiri']},
  ST:{name:'Striker',intro:'Central reference point. Options who can lead the line and attack the space behind.',players:['ennesyri','zabiri','bentayeb','rahimi','oufkir','abde']}
};

const currentXI = {ST:'ennesyri',LW:'abde',CAM:'el-khannouss',RW:'brahim',LDM:'targhalline',RDM:'el-aynaoui',LB:'el-karouani',LCB:'diop',RCB:'aguerd',RB:'hakimi',GK:'bounou'};
const roleOrder = ['ST','LW','CAM','RW','LDM','RDM','LB','LCB','RCB','RB','GK'];
let selectedRole = 'ST';
let activeFilter = 'all';
let activePoolFilter = 'all';
let searchTerm = '';

const playerById = id => players.find(p => p.id === id);
const positionLabels = {GK:'Goalkeeper',RB:'Right back',LB:'Left back',CB:'Centre-back',DM:'Defensive midfielder',CM:'Central midfielder',CAM:'Attacking midfielder',RW:'Right winger',LW:'Left winger',ST:'Striker'};
const escapeHTML = str => String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const initials = name => name.split(/\s+/).filter(Boolean).slice(0,2).map(s => s[0]).join('').toUpperCase();

function renderRole(role){
  selectedRole = role;
  const info = roles[role];
  document.querySelectorAll('.position-node').forEach(node => node.classList.toggle('selected',node.dataset.role===role));
  document.getElementById('depth-title').innerHTML = `${escapeHTML(info.name)} <span>${role}</span>`;
  document.getElementById('depth-intro').textContent = info.intro;
  document.getElementById('role-index').textContent = `${String(roleOrder.indexOf(role)+1).padStart(2,'0')} / 11`;
  const ids = info.players.filter(id => {
    const p = playerById(id);
    return p && (activeFilter==='all' || p.status==='current');
  });
  const list = document.getElementById('depth-list');
  list.innerHTML = ids.map((id,index)=>{
    const p=playerById(id);
    return `<button class="depth-row" type="button" data-player="${p.id}"><span class="depth-rank">${String(index+1).padStart(2,'0')}</span><span><span class="depth-player-name">${escapeHTML(p.name)}</span><span class="depth-player-meta">${p.primary} · ${p.status==='current'?'Latest squad':'Recent call-up'}</span></span><span class="status-tag ${p.status==='extended'?'extended':''}">${p.status==='current'?'NOV 26':'SEP 26'}</span><span class="arrow">↗</span></button>`;
  }).join('') || '<div class="empty-state">No players in this filter.</div>';
  document.getElementById('depth-count').textContent = `${ids.length} ${ids.length===1?'player':'players'}`;
  document.querySelectorAll('.filter-chip').forEach(b=>b.classList.toggle('active',b.dataset.filter===activeFilter));
  list.querySelectorAll('[data-player]').forEach(btn=>btn.addEventListener('click',()=>openPlayer(btn.dataset.player,role)));
  document.querySelectorAll(`.position-node[data-role="${role}"] .node-count`).forEach(el=>el.innerHTML=`${ids.length} options <i>↗</i>`);
}

function renderPool(){
  const grid = document.getElementById('player-grid');
  const filtered = players.filter(p=>{
    const poolMatch = activePoolFilter==='all' || (activePoolFilter==='current' ? p.status==='current' : p.status==='extended');
    const text = `${p.name} ${p.primary} ${roles[p.primary]?.name||''}`.toLowerCase();
    const searchMatch = !searchTerm || text.includes(searchTerm.toLowerCase());
    return poolMatch && searchMatch;
  });
  grid.innerHTML = filtered.map(p=>`<button class="player-card" type="button" data-player="${p.id}"><span class="player-monogram">${p.initials||initials(p.name)}</span><span class="player-card-info"><span class="player-card-name">${escapeHTML(p.name)}</span><span class="player-card-role">${escapeHTML(p.primary)} · ${escapeHTML(positionLabels[p.primary]||'Footballer')}</span><span class="player-card-status ${p.status==='extended'?'extended':''}">${p.status==='current'?'LATEST SQUAD':'RECENT CALL-UP'}</span></span></button>`).join('');
  document.getElementById('empty-state').hidden = filtered.length>0;
  grid.querySelectorAll('[data-player]').forEach(btn=>btn.addEventListener('click',()=>openPlayer(btn.dataset.player)));
}

function openPlayer(id,role){
  const p=playerById(id); if(!p) return;
  document.getElementById('modal-avatar').textContent=p.initials||initials(p.name);
  document.getElementById('modal-name').textContent=p.name;
  const status=document.getElementById('modal-status');
  status.textContent=p.status==='current'?'LATEST SENIOR SQUAD · NOVEMBER 2026':'RECENT SENIOR CALL-UP · SEPTEMBER 2026';
  document.getElementById('modal-role').textContent=role ? `${role} · ${roles[role].name}` : `${p.primary} · ${positionLabels[p.primary]||'Footballer'}`;
  document.getElementById('modal-pool').textContent=p.status==='current'?'November selection':'September selection';
  document.getElementById('modal-note').textContent=p.note;
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

// Initial content
renderRole(selectedRole);
renderPool();
document.getElementById('all-count').textContent=players.length;
document.getElementById('stat-players').textContent=players.filter(p=>p.status==='current').length;
