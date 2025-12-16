const managers = [
  {name:"Arteta", multiplier:1.1}, {name:"Klopp", multiplier:1.5},
  {name:"Pep Guardiola", multiplier:1.6}, {name:"Mourinho", multiplier:1.5},
  {name:"Ferguson", multiplier:1.8}, {name:"Ancelotti", multiplier:1.7},
  {name:"Xabi", multiplier:1.3}
];

const stadiums = [
  {name:"Anfield", value:27}, {name:"Etihad", value:25}, {name:"San Siro", value:26},
  {name:"Santiago Bernabéu", value:29}, {name:"Camp Nou", value:30},
  {name:"Allianz Arena", value:28}, {name:"Parc de Princes", value:28}
];

const positions = ["GK","RB","LB","CB","CB","CDM","CM","AMF","RW","LW","ST"];
const footballers = [
  {name:"Alisson", club:"Liverpool", pos:"GK", value:95},
  {name:"Ederson", club:"Man City", pos:"GK", value:92},
  {name:"Courtois", club:"Real Madrid", pos:"GK", value:90},
  {name:"Donnarumma", club:"PSG", pos:"GK", value:88},
  {name:"Ter Stegen", club:"Barcelona", pos:"GK", value:92},
  {name:"Mike Maignan", club:"AC Milan", pos:"GK", value:87},
  {name:"Wojciech Szczęsny", club:"Juventus", pos:"GK", value:83},
  {name:"David de Gea", club:"Man United", pos:"GK", value:76},
  {name:"Aaron Ramsdale", club:"Arsenal", pos:"GK", value:75},
  {name:"Robert Sánchez", club:"Chelsea", pos:"GK", value:77},
  {name:"Jordan Pickford", club:"Everton", pos:"GK", value:80},
  {name:"Unai Simón", club:"Athletic", pos:"GK", value:81},
  {name:"Matt Turner", club:"Aston Villa", pos:"GK", value:73},
  {name:"Alphonse Areola", club:"West Ham", pos:"GK", value:74},
  {name:"Illan Meslier", club:"Leeds", pos:"GK", value:78},
  {name:"Keylor Navas", club:"PSG", pos:"GK", value:75},
  {name:"Guglielmo Vicario", club:"Tottenham", pos:"GK", value:84},
  {name:"Lukáš Hrádecký", club:"Bayer Leverkusen", pos:"GK", value:70},
  {name:"Alex Meret", club:"Napoli", pos:"GK", value:69},
  {name:"Ivan Provedel", club:"Lazio", pos:"GK", value:68},
  {name:"Van Dijk", club:"Liverpool", pos:"CB", value:125},
  {name:"Rúben Dias", club:"Man City", pos:"CB", value:115},
  {name:"Skriniar", club:"Inter", pos:"CB", value:112},
  {name:"Militao", club:"Real Madrid", pos:"CB", value:110},
  {name:"Koundé", club:"Barcelona", pos:"CB", value:108},
  {name:"Marquinhos", club:"PSG", pos:"CB", value:107},
  {name:"Maguire", club:"Man United", pos:"CB", value:105},
  {name:"De Ligt", club:"Juventus", pos:"CB", value:115},
  {name:"Bailly", club:"Man United", pos:"CB", value:90},
  {name:"Salisu", club:"Southampton", pos:"CB", value:82},
  {name:"Fofana", club:"Leicester", pos:"CB", value:88},
  {name:"Gabriel", club:"Arsenal", pos:"CB", value:94},
  {name:"Bastoni", club:"Inter", pos:"CB", value:96},
  {name:"Stefan de Vrij", club:"Inter", pos:"CB", value:85},
  {name:"Pau Torres", club:"Villarreal", pos:"CB", value:82},
  {name:"Ezri Konsa", club:"Aston Villa", pos:"CB", value:79},
  {name:"Vanheusden", club:"Standard Liege", pos:"CB", value:70},
  {name:"Tah", club:"Bayer Leverkusen", pos:"CB", value:70},
  {name:"Laporte", club:"Man City", pos:"CB", value:95},
  {name:"Eric García", club:"Barcelona", pos:"CB", value:76},
  {name:"Koulibaly", club:"Chelsea", pos:"CB", value:97},
  {name:"Sule", club:"Bayern", pos:"CB", value:87},
  {name:"Gvardiol", club:"Man City", pos:"CB", value:112},
  {name:"Marash Kumbulla", club:"Roma", pos:"CB", value:65},
  {name:"Nikola Milenković", club:"Juventus", pos:"CB", value:82},
  {name:"Jonathan Tah", club:"Bayer Leverkusen", pos:"CB", value:70},
  {name:"Danilo", club:"Juventus", pos:"CB", value:78},
  {name:"Hermoso", club:"Atletico Madrid", pos:"CB", value:74},
  {name:"Smalling", club:"Roma", pos:"CB", value:73},
  {name:"Boateng", club:"Besiktas", pos:"CB", value:62},
  {name:"Soyuncu", club:"Leicester", pos:"CB", value:80},
  {name:"Alderweireld", club:"Al-Duhail", pos:"CB", value:70},
  {name:"Süleymanov", club:"Bayern", pos:"CB", value:68},
  {name:"Varane", club:"Man United", pos:"CB", value:95},
  {name:"Mings", club:"Aston Villa", pos:"CB", value:70},
  {name:"L. Martinez", club:"Man United", pos:"CB", value:90},
  {name:"Umtiti", club:"Lyon", pos:"CB", value:65},
  {name:"Trent Alexander-Arnold", club:"Liverpool", pos:"RB", value:105},
  {name:"Walker", club:"Man City", pos:"RB", value:100},
  {name:"Hakimi", club:"PSG", pos:"RB", value:103},
  {name:"Reece James", club:"Chelsea", pos:"RB", value:98},
  {name:"Trippier", club:"Newcastle", pos:"RB", value:79},
  {name:"Wan-Bissaka", club:"Man United", pos:"RB", value:72},
  {name:"Neco Williams", club:"Nottingham Forest", pos:"RB", value:68},
  {name:"Ricardo Pereira", club:"Leicester", pos:"RB", value:70},
  {name:"Cancelo", club:"Man City", pos:"RB", value:102},
  {name:"Pedro Porro", club:"Tottenham", pos:"RB", value:75},
  {name:"Tariq Lamptey", club:"Brighton", pos:"RB", value:68},
  {name:"Matty Cash", club:"Aston Villa", pos:"RB", value:67},
  {name:"Gibbs", club:"Free Agent", pos:"RB", value:50},
  {name:"Sydnei", club:"Olympiakos", pos:"RB", value:55},
  {name:"Dest", club:"Barcelona", pos:"RB", value:83},
  {name:"Alphonso Davies", club:"Bayern", pos:"LB", value:110},
  {name:"Firpo", club:"Barcelona", pos:"LB", value:85},
  {name:"Shaw", club:"Man United", pos:"LB", value:80},
  {name:"Mendy", club:"Real Madrid", pos:"LB", value:87},
  {name:"Gosens", club:"Inter", pos:"LB", value:76},
  {name:"Tagliafico", club:"Ajax", pos:"LB", value:72},
  {name:"Robinson", club:"Tottenham", pos:"LB", value:69},
  {name:"Theo Hernández", club:"AC Milan", pos:"LB", value:93},
  {name:"Digne", club:"Aston Villa", pos:"LB", value:75},
  {name:"Kurzawa", club:"PSG", pos:"LB", value:71},
  {name:"Gaya", club:"Valencia", pos:"LB", value:70},
  {name:"Dalot", club:"AC Milan", pos:"LB", value:69},
  {name:"Alaba", club:"Real Madrid", pos:"LB", value:95},
  {name:"Dest LB", club:"Barca", pos:"LB", value:83},
  {name:"Baldé", club:"Inter", pos:"LB", value:65},
];
footballers.push(
  {name:"Casemiro", club:"Man United", pos:"CDM", value:95},
  {name:"Rodri", club:"Man City", pos:"CDM", value:88},
  {name:"Kanté", club:"Chelsea", pos:"CDM", value:85},
  {name:"Fabinho", club:"Liverpool", pos:"CDM", value:84},
  {name:"Thiago Mendes", club:"Lyon", pos:"CDM", value:70},
  {name:"Jorginho", club:"Chelsea", pos:"CDM", value:82},
  {name:"Sandro Tonali", club:"AC Milan", pos:"CDM", value:80},
  {name:"Aouar", club:"Lyon", pos:"CDM", value:78},
  {name:"Kessie", club:"Barcelona", pos:"CDM", value:83},
  {name:"Bakayoko", club:"Monaco", pos:"CDM", value:70},
  {name:"Soumare", club:"Leicester", pos:"CDM", value:76},
  {name:"Partey", club:"Arsenal", pos:"CDM", value:85},
  {name:"Bender", club:"Bayer Leverkusen", pos:"CDM", value:65},
  {name:"Vidal", club:"Inter", pos:"CDM", value:60},
  {name:"Fernandinho", club:"Man City", pos:"CDM", value:62}
);
footballers.push(
  {name:"De Bruyne", club:"Man City", pos:"CM", value:150},
  {name:"Modrić", club:"Real Madrid", pos:"CM", value:85},
  {name:"Kroos", club:"Real Madrid", pos:"CM", value:88},
  {name:"Fabián Ruiz", club:"Napoli", pos:"CM", value:78},
  {name:"Gündogan", club:"Man City", pos:"CM", value:85},
  {name:"Pedri", club:"Barcelona", pos:"CM", value:95},
  {name:"Henderson", club:"Liverpool", pos:"CM", value:80},
  {name:"Bernardo Silva", club:"Man City", pos:"CM", value:92},
  {name:"Canales", club:"Real Betis", pos:"CM", value:70},
  {name:"Verratti", club:"PSG", pos:"CM", value:90},
  {name:"Tielemans", club:"Leicester", pos:"CM", value:78},
  {name:"Paredes", club:"PSG", pos:"CM", value:75},
  {name:"Milinkovic-Savic", club:"Lazio", pos:"CM", value:85},
  {name:"Lo Celso", club:"Villarreal", pos:"CM", value:70},
  {name:"Castrovilli", club:"Fiorentina", pos:"CM", value:72}
);
footballers.push(
  {name:"De Jong", club:"Barcelona", pos:"AMF", value:110},
  {name:"Bruno Fernandes", club:"Man United", pos:"AMF", value:120},
  {name:"Odegaard", club:"Arsenal", pos:"AMF", value:88},
  {name:"Bernardeschi", club:"Juventus", pos:"AMF", value:72},
  {name:"Kimmich", club:"Bayern", pos:"AMF", value:125},
  {name:"Pedri AMF", club:"Barcelona", pos:"AMF", value:95},
  {name:"Fekir", club:"Real Betis", pos:"AMF", value:75},
  {name:"Ödegaard AMF", club:"Real Madrid", pos:"AMF", value:88},
  {name:"Dybala", club:"Roma", pos:"AMF", value:85},
  {name:"Ziyech", club:"Chelsea", pos:"AMF", value:82},
  {name:"Pogba", club:"Juventus", pos:"AMF", value:90},
  {name:"Fabian Ruiz AMF", club:"Napoli", pos:"AMF", value:78},
  {name:"Havertz", club:"Chelsea", pos:"AMF", value:88},
  {name:"Insigne", club:"Napoli", pos:"AMF", value:80},
  {name:"Kante AMF", club:"Chelsea", pos:"AMF", value:85}
);
footballers.push(
  {name:"Haaland", club:"Man City", pos:"ST", value:182},
  {name:"Lewandowski", club:"Barcelona", pos:"ST", value:95},
  {name:"Kane", club:"Tottenham", pos:"ST", value:120},
  {name:"Vlahovic", club:"Juventus", pos:"ST", value:90},
  {name:"Giroud", club:"AC Milan", pos:"ST", value:70},
  {name:"Mbappe", club:"PSG", pos:"ST", value:180},
  {name:"Rashford", club:"Man United", pos:"ST", value:95},
  {name:"Lukaku", club:"Inter", pos:"ST", value:95},
  {name:"Vinicius Jr", club:"Real Madrid", pos:"ST", value:105},
  {name:"João Félix", club:"Atletico Madrid", pos:"ST", value:90},
  {name:"Neymar", club:"PSG", pos:"ST", value:130},
  {name:"Sterling", club:"Chelsea", pos:"ST", value:90},
  {name:"Sancho", club:"Manchester United", pos:"ST", value:85},
  {name:"Callejon", club:"Napoli", pos:"ST", value:65},
  {name:"Milik", club:"Roma", pos:"ST", value:70}
);
footballers.push(
  {name:"Salah", club:"Liverpool", pos:"LW", value:145},
  {name:"Son", club:"Tottenham", pos:"LW", value:105},
  {name:"Neymar LW", club:"PSG", pos:"LW", value:130},
  {name:"Coman", club:"Bayern", pos:"LW", value:95},
  {name:"Raphinha", club:"Barcelona", pos:"LW", value:88},
  {name:"Pulisic", club:"Chelsea", pos:"LW", value:85},
  {name:"Vlahovic LW", club:"Juventus", pos:"LW", value:90},
  {name:"Bernardo Silva LW", club:"Man City", pos:"LW", value:92},
  {name:"Depay", club:"Atletico Madrid", pos:"LW", value:80},
  {name:"Perisic", club:"Inter", pos:"LW", value:75},
  {name:"Insigne LW", club:"Napoli", pos:"LW", value:80},
  {name:"Hazard", club:"Real Madrid", pos:"LW", value:82},
  {name:"Sterling LW", club:"Chelsea", pos:"LW", value:90},
  {name:"Giacomo Raspadori", club:"Napoli", pos:"LW", value:72},
  {name:"Mane", club:"Bayern", pos:"LW", value:105}
);
footballers.push(
  {name:"Messi", club:"PSG", pos:"RW", value:130},
  {name:"Mahrez", club:"Man City", pos:"RW", value:95},
  {name:"Neymar RW", club:"PSG", pos:"RW", value:130},
  {name:"Sterling RW", club:"Chelsea", pos:"RW", value:90},
  {name:"Pulisic RW", club:"Chelsea", pos:"RW", value:85},
  {name:"Rashford RW", club:"Man United", pos:"RW", value:95},
  {name:"Salah RW", club:"Liverpool", pos:"RW", value:145},
  {name:"Sancho RW", club:"Man United", pos:"RW", value:85},
  {name:"João Félix RW", club:"Atletico Madrid", pos:"RW", value:90},
  {name:"Perisic RW", club:"Inter", pos:"RW", value:75},
  {name:"Coman RW", club:"Bayern", pos:"RW", value:95},
  {name:"Depay RW", club:"Barcelona", pos:"RW", value:80},
  {name:"Vlahovic RW", club:"Juventus", pos:"RW", value:90},
  {name:"Insigne RW", club:"Napoli", pos:"RW", value:80},
  {name:"Raphinha RW", club:"Barcelona", pos:"RW", value:88}
);
let gameState = {
  numPlayers:0,
  players:[],
  currentRound:1,
  marketOpen:false,
  availablePlayers:[...footballers]
};
function shuffleArray(array){
  for(let i=array.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [array[i],array[j]]=[array[j],array[i]];
  }
  return array;
}
function assignManagers(){
  const shuffled = shuffleArray([...managers]);
  gameState.players.forEach((p,i)=>{
    p.manager=shuffled[i];
  });
}
function assignStadiums(){
  const shuffled = shuffleArray([...stadiums]);
  gameState.players.forEach((p,i)=>{
    p.stadium=shuffled[i]; p.cash=Math.floor(p.manager.multiplier*p.stadium.value*500+500); // millions
    p.squad=[];
    p.substitutes=[];
  });
}
function initialSquadShuffle(){
  gameState.players.forEach(player=>{
    const squad=[];
    const usedIndices=[];
    positions.forEach(pos=>{
      let options = gameState.availablePlayers.filter(f=>f.pos===pos);
      if(options.length===0) return;
      const chosen = options[Math.floor(Math.random()*options.length)];
      squad.push(chosen);
      player.substitutes.push(chosen);
      gameState.availablePlayers = gameState.availablePlayers.filter(p=>p.name!==chosen.name);
    });
    player.squad=squad;
  });
}
document.getElementById("startBtn").addEventListener("click",()=>{
  const num=parseInt(document.getElementById("numPlayers").value);
  if(num>=2 && num<=6){
    gameState.numPlayers=num; document.getElementById("setupScreen").style.display="none";
    const container=document.getElementById("playerInputs");
    container.innerHTML="";
    for(let i=0;i<num;i++){
      const input=document.createElement("input");
      input.placeholder=`Player ${i+1} Name`;
      input.id=`playerName${i}`;
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
    document.getElementById("playerNamesScreen").style.display="block";
  }
});
document.getElementById("confirmPlayers").addEventListener("click",()=>{
  for(let i=0;i<gameState.numPlayers;i++){
    const name=document.getElementById(`playerName${i}`).value || `Player${i+1}`;
    gameState.players.push({name});
  }
  assignManagers();
  assignStadiums();
  document.getElementById("playerNamesScreen").style.display="none";
  document.getElementById("gameScreen").style.display="block";
});
document.getElementById("shuffleBtn").addEventListener("click",()=>{
  initialSquadShuffle();
  alert("Initial squads assigned! First 11 are enforced.");
});
function displayPlayerMenus(){
  const area=document.getElementById("playersArea");
  area.innerHTML="";
  gameState.players.forEach(p=>{
    const card=document.createElement("div");
    card.classList.add("player-card");
    card.innerHTML=`
      <strong>${p.name}</strong><br>
      Manager: ${p.manager.name} (${p.manager.multiplier})<br>
      Stadium: ${p.stadium.name} (${p.stadium.value})<br>
      Cash: €${p.cash}M<br>
      <button onclick="showSquad('${p.name}')">My Team</button>
      <button onclick="openNegotiations('${p.name}')">Open Negotiations</button>
    `;
    area.appendChild(card);
  });
}
function showSquad(playerName){
  const player=gameState.players.find(p=>p.name===playerName);
  let msg="Starting 11:\n";
  player.squad.forEach(pl=>{ msg+=`${pl.pos} - ${pl.name} (${pl.club}) €${pl.value}M\n`; });
  msg+="\nSubstitutes:\n";
  player.substitutes.forEach(pl=>{ msg+=`${pl.pos} - ${pl.name} (${pl.club}) €${pl.value}M\n`; });
  alert(msg);
}
function openNegotiations(playerName){
  const player=gameState.players.find(p=>p.name===playerName);
  let otherPlayers=gameState.players.filter(p=>p.name!==playerName);
  if(otherPlayers.length===0){ alert("No other players to negotiate with."); return; }
  let target=otherPlayers[Math.floor(Math.random()*otherPlayers.length)];
  alert(`${playerName} can now negotiate with ${target.name}.`);
}
function getRandomPosition(){
  const positionsRemaining = [...new Set(gameState.availablePlayers.map(f=>f.pos))];
  if(positionsRemaining.length===0) return null;
  return positionsRemaining[Math.floor(Math.random()*positionsRemaining.length)];
}

function transferRound(){
  document.getElementById("roundDisplay").innerText=`ROUND ${gameState.currentRound}`;
  gameState.players.forEach(player=>{
    const pos = getRandomPosition();
    if(!pos){ alert("No more players available in market."); return; }
    document.getElementById("positionDisplay").innerText=`${player.name}'s turn. Position: ${pos}`;
    
    const options = gameState.availablePlayers.filter(p=>p.pos===pos);
    if(options.length===0){ alert("Position empty. Skipping."); return; }
    
    const choice = options[Math.floor(Math.random()*options.length)];
    
    player.cash -= choice.value;
    
    player.substitutes.push(choice);
    gameState.availablePlayers = gameState.availablePlayers.filter(p=>p.name!==choice.name);
    
    alert(`${player.name} bought ${choice.name} (${choice.pos}) for €${choice.value}M`);
  });
}

document.getElementById("nextRoundBtn").addEventListener("click",()=>{
  if(gameState.currentRound>=5){
    calculateWinner();
  } else {
    gameState.currentRound++;
    transferRound();
  }
});

document.getElementById("openMarketBtn").addEventListener("click",()=>{
  gameState.marketOpen=true;
  const display=document.createElement("div");
  display.innerText="The window is now open";
  document.getElementById("playersArea").appendChild(display);
  setTimeout(()=>{ display.remove(); },1500);
});
function calculateWinner(){
  let rankings=[];
  gameState.players.forEach(p=>{
    const starting11Value = p.squad.reduce((acc,curr)=>acc+curr.value,0);
    const remainingCashBonus = 0.1*p.cash;
    const marketValue = starting11Value + remainingCashBonus;
    p.marketValue=marketValue;
    rankings.push({name:p.name, value:marketValue});
  });
  rankings.sort((a,b)=>b.value-a.value);
  let msg="Final Rankings:\n";
  rankings.forEach((r,i)=>{ msg+=`${i+1}. ${r.name} - €${r.value.toFixed(1)}M\n`; });
  alert(msg);
  document.getElementById("nextRoundBtn").style.display="none";
}
document.getElementById("shuffleBtn").addEventListener("click",()=>{
  initialSquadShuffle();
  displayPlayerMenus();
  document.getElementById("shuffleBtn").style.display="none";
  document.getElementById("nextRoundBtn").style.display="inline-block";
  transferRound();
});

const formations = {
  "4-3-3":["GK","RB","CB","CB","LB","CDM","CM","AMF","RW","LW","ST"],
  "3-5-2":["GK","CB","CB","CB","CDM","CM","CM","AMF","RW","LW","ST"],
  "3-4-3":["GK","CB","CB","CB","CDM","CM","AMF","RW","LW","ST"],
  "4-2-3-1":["GK","RB","CB","CB","LB","CDM","CDM","AMF","RW","LW","ST"],
  "4-4-2":["GK","RB","CB","CB","LB","CM","CM","AMF","RW","LW","ST"],
  "4-5-1":["GK","RB","CB","CB","LB","CDM","CM","CM","AMF","LW","ST"],
  "3-1-4-2":["GK","CB","CB","CB","CDM","CM","CM","AMF","RW","LW","ST"],
  "3-4-1-2":["GK","CB","CB","CB","CDM","CM","AMF","RW","LW","ST"],
  "3-2-3-2":["GK","CB","CB","CB","CDM","CDM","CM","AMF","RW","LW","ST"]
};
let currentFormation = "4-3-3";
function renderFormation(player){
  const area = document.getElementById("playersArea");
  area.innerHTML="";
  const squadContainer = document.createElement("div");
  squadContainer.innerHTML=`<h3>${player.name} - Formation: ${currentFormation}</h3>`;
  
  const formationGrid = document.createElement("div");
  formationGrid.style.display="grid";
  formationGrid.style.gridTemplateColumns="repeat(5,1fr)";
  formationGrid.style.gap="10px";
  
  currentFormation.split("").forEach(pos=>{
    const pl = player.substitutes.find(f=>f.pos===pos) || {name:"Empty", pos:pos, club:"-", value:0};
    const card = document.createElement("div");
    card.classList.add("player-card");
    card.setAttribute("draggable","true");
    card.innerHTML=`${pl.pos} - ${pl.name} (${pl.club}) €${pl.value}M`;
    card.addEventListener("dragstart",dragStart);
    card.addEventListener("dragover",dragOver);
    card.addEventListener("drop",(e)=>drop(e,player,pl));
    formationGrid.appendChild(card);
  });
  
  squadContainer.appendChild(formationGrid);
  area.appendChild(squadContainer);
}
let draggedCard=null;
function dragStart(e){
  draggedCard = e.target;
}
function dragOver(e){
  e.preventDefault();
}
function drop(e,player,targetPlayer){
  const draggedText = draggedCard.innerText;
  draggedCard.innerText = e.target.innerText;
  e.target.innerText = draggedText;
  const dragIndex = player.substitutes.findIndex(f=>`${f.pos} - ${f.name} (${f.club}) €${f.value}M`===draggedText);
  const targetIndex = player.substitutes.findIndex(f=>`${f.pos} - ${f.name} (${f.club}) €${f.value}M`===e.target.innerText);
  if(dragIndex>=0 && targetIndex>=0){
    const temp = player.substitutes[dragIndex];
    player.substitutes[dragIndex]=player.substitutes[targetIndex];
    player.substitutes[targetIndex]=temp;
  }
}
function changeFormation(player,newFormation){
  if(formations[newFormation]){
    currentFormation=newFormation;
    renderFormation(player);
  }
}
function addFormationSelector(player){
  const area=document.getElementById("playersArea");
  const select=document.createElement("select");
  for(let f in formations){
    const option=document.createElement("option");
    option.value=f;
    option.text=f;
    select.appendChild(option);
  }
  select.addEventListener("change",()=>changeFormation(player,select.value));
  area.appendChild(select);
}
document.getElementById("shuffleBtn").addEventListener("click",()=>{
  initialSquadShuffle();
  displayPlayerMenus();
  document.getElementById("shuffleBtn").style.display="none";
  document.getElementById("nextRoundBtn").style.display="inline-block";
  transferRound();
  renderFormation(gameState.players[0]);
  addFormationSelector(gameState.players[0]);
});



// --- Game State ---
let gameState={
  numPlayers:0,
  players:[],
  currentRound:1,
  marketOpen:false,
  currentPlayerIndex:0,
  availablePlayers:[...footballers]
};

// --- Shuffle & Utility Functions ---
function shuffleArray(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]];}return array;}

function assignManagers(){const shuffled=shuffleArray([...managers]);gameState.players.forEach((p,i)=>{p.manager=shuffled[i];});}

function assignStadiums(){const shuffled=shuffleArray([...stadiums]);gameState.players.forEach((p,i)=>{p.stadium=shuffled[i];p.cash=Math.floor(p.manager.multiplier*p.stadium.value*500+500);p.squad=[];p.substitutes=[];});}

function initialSquadShuffle(){gameState.players.forEach(player=>{positions.forEach(pos=>{let options=gameState.availablePlayers.filter(f=>f.pos===pos);if(options.length===0)return;let chosen=options[Math.floor(Math.random()*options.length)];player.squad.push(chosen);player.substitutes.push(chosen);gameState.availablePlayers=gameState.availablePlayers.filter(p=>p.name!==chosen.name);});});}
function displayPlayerMenus(){const area=document.getElementById("playersArea");area.innerHTML="";gameState.players.forEach(p=>{const card=document.createElement("div");card.classList.add("player-card");card.innerHTML=`<strong>${p.name}</strong><br>Manager: ${p.manager.name} (${p.manager.multiplier})<br>Stadium: ${p.stadium.name} (${p.stadium.value})<br>Cash: €${p.cash}M<br><button onclick="showSquad('${p.name}')">My Team</button><button onclick="openNegotiations('${p.name}')">Open Negotiations</button>`;area.appendChild(card);});}

function showSquad(playerName){const player=gameState.players.find(p=>p.name===playerName);let msg="Starting 11:\n";player.squad.forEach(pl=>{msg+=`${pl.pos} - ${pl.name} (${pl.club}) €${pl.value}M\n`;});msg+="\nSubstitutes:\n";player.substitutes.forEach(pl=>{msg+=`${pl.pos} - ${pl.name} (${pl.club}) €${pl.value}M\n`;});alert(msg);}
function openNegotiations(playerName){const player=gameState.players.find(p=>p.name===playerName);let otherPlayers=gameState.players.filter(p=>p.name!==playerName);if(otherPlayers.length===0){alert("No other players to negotiate with.");return;}let target=otherPlayers[Math.floor(Math.random()*otherPlayers.length)];alert(`${playerName} can now negotiate with ${target.name}.`);}
function getRandomPosition(){const positionsRemaining=[...new Set(gameState.availablePlayers.map(f=>f.pos))];if(positionsRemaining.length===0)return null;return positionsRemaining[Math.floor(Math.random()*positionsRemaining.length)];}

function transferRound(){const player=gameState.players[gameState.currentPlayerIndex];const pos=getRandomPosition();if(!pos){alert("No more players available in market.");return;}document.getElementById("positionDisplay").innerText=`${player.name}'s turn. Position: ${pos}`;const options=gameState.availablePlayers.filter(p=>p.pos===pos);if(options.length===0){alert("Position empty. Skipping.");return;}const choice=options[Math.floor(Math.random()*options.length)];player.cash-=choice.value;player.substitutes.push(choice);gameState.availablePlayers=gameState.availablePlayers.filter(p=>p.name!==choice.name);alert(`${player.name} bought ${choice.name} (${choice.pos}) for €${choice.value}M`);displayPlayerMenus();}
document.getElementById("nextRoundBtn").addEventListener("click",()=>{
  gameState.currentPlayerIndex++;
  if(gameState.currentPlayerIndex>=gameState.players.length){
    gameState.currentRound++;
    gameState.currentPlayerIndex=0;
    if(gameState.currentRound>5){
      calculateWinner();
      return;
    }
  }
  transferRound();
});
document.getElementById("openMarketBtn").addEventListener("click",()=>{
  gameState.marketOpen=true;
  const display=document.createElement("div");
  display.innerText="The window is now open";
  document.getElementById("playersArea").appendChild(display);
  setTimeout(()=>{display.remove();},1500);
});
function calculateWinner(){
  let rankings=[];
  gameState.players.forEach(p=>{const starting11Value=p.squad.reduce((acc,curr)=>acc+curr.value,0);const remainingCashBonus=0.1*p.cash;const marketValue=starting11Value+remainingCashBonus;p.marketValue=marketValue;rankings.push({name:p.name,value:marketValue});});
  rankings.sort((a,b)=>b.value-a.value);
  const board=document.getElementById("winnerBoard");
  board.innerHTML="<h3>Final Rankings</h3>";
  rankings.forEach((r,i)=>{const div=document.createElement("div");div.innerText=`${i+1}. ${r.name} - €${r.value.toFixed(1)}M`;board.appendChild(div);});
}
document.getElementById("startBtn").addEventListener("click",()=>{
  const num=parseInt(document.getElementById("numPlayers").value);
  if(num>=2 && num<=6){
    gameState.numPlayers=num;
    document.getElementById("setupScreen").style.display="none";
    const container=document.getElementById("playerInputs");
    container.innerHTML="";
    for(let i=0;i<num;i++){
      const input=document.createElement("input");
      input.placeholder=`Player ${i+1} Name`;
      input.id=`playerName${i}`;
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
    document.getElementById("playerNamesScreen").style.display="block";
  }
});

document.getElementById("confirmPlayers").addEventListener("click",()=>{
  for(let i=0;i<gameState.numPlayers;i++){
    const name=document.getElementById(`playerName${i}`).value||`Player${i+1}`;
    gameState.players.push({name});
  }
  assignManagers();
  assignStadiums();
  document.getElementById("playerNamesScreen").style.display="none";
  document.getElementById("gameScreen").style.display="block";
});
document.getElementById("shuffleBtn").addEventListener("click",()=>{
  initialSquadShuffle();
  displayPlayerMenus();
  document.getElementById("shuffleBtn").style.display="none";
  document.getElementById("nextRoundBtn").style.display="inline-block";
  transferRound();
});

