// ========== GESTION DES CLICS ==========
let discoveredClues = [];
const cluesListElem = document.getElementById('cluesList');
const statusDivLocal = document.getElementById('status'); // déjà défini

function addClue(objId, clueText, message) {
  if (discoveredClues.includes(objId)) return false;
  discoveredClues.push(objId);
  const li = document.createElement('li');
  li.textContent = `🔍 ${clueText}`;
  cluesListElem.appendChild(li);
  if (cluesListElem.querySelector('li em')) cluesListElem.innerHTML = '';
  statusDivLocal.innerText = message;
  statusDivLocal.style.background = "#3a6b4a";
  playSound('click');
  const el = document.getElementById(objId);
  if (el) {
    el.style.transform = 'scale(1.05)';
    setTimeout(() => { if(el) el.style.transform = ''; }, 200);
  }
  return true;
}

function onObjectClick(objId) {
  if (!gameActive) {
    statusDivLocal.innerText = "Partie terminée. Recommencez.";
    playSound('error');
    return;
  }
  const data = cluesData[objId];
  if (!data) return;
  if (!data.hasClue && data.penalty !== undefined) {
    penalizeTime(data.penalty);
    const li = document.createElement('li');
    li.textContent = `⚠️ ${data.message}`;
    cluesListElem.appendChild(li);
    return;
  }
  if (!discoveredClues.includes(objId)) {
    addClue(objId, data.clue, data.message);
  } else {
    statusDivLocal.innerText = `(Déjà vu) ${data.message}`;
    playSound('click');
  }
}

function bindObjectClicks() {
  for (const id of Object.keys(objectsConfig)) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => onObjectClick(id));
  }
}// ========== GESTION DES CLICS ==========
let discoveredClues = [];
const cluesListElem = document.getElementById('cluesList');
const statusDivLocal = document.getElementById('status'); // déjà défini

function addClue(objId, clueText, message) {
  if (discoveredClues.includes(objId)) return false;
  discoveredClues.push(objId);
  const li = document.createElement('li');
  li.textContent = `🔍 ${clueText}`;
  cluesListElem.appendChild(li);
  if (cluesListElem.querySelector('li em')) cluesListElem.innerHTML = '';
  statusDivLocal.innerText = message;
  statusDivLocal.style.background = "#3a6b4a";
  playSound('click');
  const el = document.getElementById(objId);
  if (el) {
    el.style.transform = 'scale(1.05)';
    setTimeout(() => { if(el) el.style.transform = ''; }, 200);
  }
  return true;
}

function onObjectClick(objId) {
  if (!gameActive) {
    statusDivLocal.innerText = "Partie terminée. Recommencez.";
    playSound('error');
    return;
  }
  const data = cluesData[objId];
  if (!data) return;
  if (!data.hasClue && data.penalty !== undefined) {
    penalizeTime(data.penalty);
    const li = document.createElement('li');
    li.textContent = `⚠️ ${data.message}`;
    cluesListElem.appendChild(li);
    return;
  }
  if (!discoveredClues.includes(objId)) {
    addClue(objId, data.clue, data.message);
  } else {
    statusDivLocal.innerText = `(Déjà vu) ${data.message}`;
    playSound('click');
  }
}

function bindObjectClicks() {
  for (const id of Object.keys(objectsConfig)) {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => onObjectClick(id));
  }
}
