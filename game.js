// CAMINHOS DOS ARQUIVOS DE ÁUDIO (.OGG)
const AUDIO_FILES = {
  transito: 'audio/transito.ogg',         // Zona A
  eca: 'audio/eca.ogg',                   // Zona B
  crusp: 'audio/crusp.ogg',               // Zona C
  vento: 'audio/vento.ogg',               // Zona D
  bandejao: 'audio/bandejao.ogg',         // Zona E
  subterraneo: 'audio/subterraneo.ogg',   // Zona F
  queroQuero: 'audio/quero_quero.ogg',    // Quero-Queros
  bateria: 'audio/bateria.ogg'            // Bateria Universitária
};

const GRID_COLS = 18;
const GRID_ROWS = 40;
const CELL_SIZE = 2.4; 
const WALL_HEIGHT = 2.8;

const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

const startPos = { r: 26, c: 0 };
const exitPos  = { r: 18, c: 17 };

const ZONES = {
  A: { name: "A (Trânsito - Av. Melo Moraes)", centerR: 3, centerC: 9, audioKey: 'transito' },
  B: { name: "B (ECA - Música/Artes)", centerR: 12, centerC: 4, audioKey: 'eca' },
  C: { name: "C (CRUSP Sup - Residencial)", centerR: 12, centerC: 13, audioKey: 'crusp' },
  D: { name: "D (Reitoria - Vento/Entrada)", centerR: 25, centerC: 4, audioKey: 'vento' },
  E: { name: "E (Bandejão - Canos/Pratos)", centerR: 25, centerC: 13, audioKey: 'bandejao' },
  F: { name: "F (Gualberto - Subterrâneo Profundo)", centerR: 36, centerC: 9, audioKey: 'subterraneo' }
};

const QUERO_QUERO_SPOTS = [
  { r: 23, c: 3 }, { r: 25, c: 1 }, { r: 27, c: 5 }, { r: 24, c: 7 }
];

const BATERIA_SPOTS = [
  { r: 24, c: 4 }, { r: 26, c: 3 }, { r: 27, c: 5 },
  { r: 25, c: 2 }, { r: 25, c: 3 }, { r: 25, c: 4 }, { r: 25, c: 5 }
];

let playerPos = { x: 0, z: 0 };
let playerAngle = -Math.PI / 2;
let steps = 0, seconds = 0, timerInterval = null, gameActive = false, isInitialized = false;
let distTravelledAcc = 0, headBobTimer = 0;

const inputState = { forward: false, backward: false, turnLeft: false, turnRight: false };
let scene, camera, renderer, torchLight, clock;
let flickeringLights = [], dustParticles;

let audioCtx = null;
let masterGain = null;
let isMuted = false;
let audioBuffers = {};
let audioGains = {};
let audioSources = {};

function createWallTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#2b221b';
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = '#18120d';
  ctx.lineWidth = 4;
  const rows = 16, cols = 8;
  const rh = 512 / rows, cw = 512 / cols;

  for (let r = 0; r < rows; r++) {
    const offset = (r % 2) * (cw / 2);
    for (let c = -1; c <= cols; c++) {
      const varColor = Math.floor(Math.random() * 20 - 10);
      ctx.fillStyle = `rgb(${43 + varColor}, ${34 + varColor}, ${27 + varColor})`;
      ctx.fillRect(c * cw + offset, r * rh, cw, rh);
      ctx.strokeRect(c * cw + offset, r * rh, cw, rh);
    }
  }

  for (let i = 0; i < 5000; i++) {
    ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.04)';
    ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createFloorTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 512;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#1c1714';
  ctx.fillRect(0, 0, 512, 512);

  const tileSize = 128;
  ctx.strokeStyle = '#080605';
  ctx.lineWidth = 6;

  for (let x = 0; x < 512; x += tileSize) {
    for (let y = 0; y < 512; y += tileSize) {
      const shade = Math.floor(Math.random() * 16 - 8);
      ctx.fillStyle = `rgb(${30 + shade}, ${24 + shade}, ${20 + shade})`;
      ctx.fillRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
      ctx.strokeRect(x, y, tileSize, tileSize);
    }
  }

  for (let i = 0; i < 8000; i++) {
    const nx = Math.random() * 512;
    const ny = Math.random() * 512;
    const opacity = Math.random() * 0.15;
    const size = Math.random() > 0.85 ? 3 : 1;
    ctx.fillStyle = Math.random() > 0.4 ? `rgba(0,0,0,${opacity})` : `rgba(180,160,140,${opacity})`;
    ctx.fillRect(nx, ny, size, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(GRID_COLS / 2, GRID_ROWS / 2);
  return texture;
}

async function loadAudioFile(key, url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Arquivo não encontrado");
    const arrayBuffer = await response.arrayBuffer();
    audioBuffers[key] = await audioCtx.decodeAudioData(arrayBuffer);
    
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffers[key];
    source.loop = true;

    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;

    source.connect(gainNode);
    gainNode.connect(masterGain);
    source.start(0);

    audioSources[key] = source;
    audioGains[key] = gainNode;
  } catch (err) {
    console.warn(`Áudio "${url}" não carregado. Continuará sem som.`, err);
  }
}

async function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(isMuted ? 0 : 1, audioCtx.currentTime);
  masterGain.connect(audioCtx.destination);

  const loadPromises = Object.entries(AUDIO_FILES).map(([key, path]) => loadAudioFile(key, path));
  await Promise.all(loadPromises);
}

function toggleMute() {
  isMuted = !isMuted;
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(isMuted ? 0 : 1, audioCtx.currentTime);
  }
  document.getElementById('muteBtn').textContent = isMuted ? '🔇' : '🔊';
}

function updateAudioPositional(r, c) {
  if (!audioCtx) return;

  const maxDistance = 20;
  const now = audioCtx.currentTime;

  let dominantZoneKey = 'D';
  let minDistance = Infinity;

  Object.keys(ZONES).forEach(key => {
    const zone = ZONES[key];
    const dist = Math.hypot(r - zone.centerR, c - zone.centerC);

    if (dist < minDistance) {
      minDistance = dist;
      dominantZoneKey = key;
    }

    let volume = Math.max(0, 1 - (dist / maxDistance));
    volume = Math.pow(volume, 2) * 0.4;

    if (audioGains[zone.audioKey]) {
      audioGains[zone.audioKey].gain.setTargetAtTime(volume, now, 0.3);
    }
  });

  let minQueroDist = Infinity;
  QUERO_QUERO_SPOTS.forEach(spot => {
    const d = Math.hypot(r - spot.r, c - spot.c);
    if (d < minQueroDist) minQueroDist = d;
  });

  let queroVolume = Math.max(0, 1 - (minQueroDist / 12));
  queroVolume = Math.pow(queroVolume, 2) * 0.5;

  if (audioGains['queroQuero']) {
    audioGains['queroQuero'].gain.setTargetAtTime(queroVolume, now, 0.2);
  }

  let minBateriaDist = Infinity;
  BATERIA_SPOTS.forEach(spot => {
    const d = Math.hypot(r - spot.r, c - spot.c);
    if (d < minBateriaDist) minBateriaDist = d;
  });

  let bateriaVolume = Math.max(0, 1 - (minBateriaDist / 12));
  bateriaVolume = Math.pow(bateriaVolume, 2) * 0.5;

  if (audioGains['bateria']) {
    audioGains['bateria'].gain.setTargetAtTime(bateriaVolume, now, 0.2);
  }

  const zoneDisplay = document.getElementById('zoneDisplay');
  if (zoneDisplay) {
    zoneDisplay.textContent = ZONES[dominantZoneKey].name;
  }
}

function playFootstepSound() {
  if (!audioCtx || isMuted) return;
  const now = audioCtx.currentTime;

  const bufferSize = audioCtx.sampleRate * 0.08;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(250 + Math.random() * 100, now);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  noise.start(now);
}

function playWinSound() {
  if (!audioCtx || isMuted) return;
  const notes = [261.63, 329.63, 392.00, 523.25];
  notes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12);
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime + i * 0.12);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.5);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(audioCtx.currentTime + i * 0.12);
    osc.stop(audioCtx.currentTime + i * 0.12 + 0.5);
  });
}

function gridTo3D(r, c) {
  return {
    x: (c - GRID_COLS / 2) * CELL_SIZE + CELL_SIZE / 2,
    z: (r - GRID_ROWS / 2) * CELL_SIZE + CELL_SIZE / 2
  };
}

function isWall(r, c) {
  if (r < 0 || r >= GRID_ROWS || c < 0 || c >= GRID_COLS) return true;
  return maze[r][c] === 1;
}

function isColliding(x, z) {
  const radius = 0.65;
  const numPoints = 12;

  for (let i = 0; i < numPoints; i++) {
    const angle = (i * Math.PI * 2) / numPoints;
    const px = x + Math.cos(angle) * radius;
    const pz = z + Math.sin(angle) * radius;

    const c = Math.floor((px / CELL_SIZE) + (GRID_COLS / 2));
    const r = Math.floor((pz / CELL_SIZE) + (GRID_ROWS / 2));

    if (isWall(r, c)) return true;
  }
  return false;
}

function init3D() {
  const container = document.getElementById('webgl-container');

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0705);
  scene.fog = new THREE.FogExp2(0x0a0705, 0.08);

  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.y = 1.3;

  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  clock = new THREE.Clock();

  const ambientLight = new THREE.AmbientLight(0x4a321a, 1.2);
  scene.add(ambientLight);

  torchLight = new THREE.PointLight(0xffaa44, 2.2, 18);
  scene.add(torchLight);

  buildTunnelMesh();
  addFlickeringLanterns();
  createDustParticles();

  const exit3D = gridTo3D(exitPos.r, exitPos.c);
  const exitLight = new THREE.PointLight(0xf1c40f, 3.5, 14);
  exitLight.position.set(exit3D.x, 1.5, exit3D.z);
  scene.add(exitLight);

  const exitBeaconGeo = new THREE.CylinderGeometry(0.6, 0.6, WALL_HEIGHT, 16);
  const exitBeaconMat = new THREE.MeshBasicMaterial({ color: 0xf1c40f, transparent: true, opacity: 0.5 });
  const exitBeacon = new THREE.Mesh(exitBeaconGeo, exitBeaconMat);
  exitBeacon.position.set(exit3D.x, WALL_HEIGHT/2, exit3D.z);
  scene.add(exitBeacon);

  const start3D = gridTo3D(startPos.r, startPos.c);
  playerPos.x = start3D.x;
  playerPos.z = start3D.z;

  window.addEventListener('resize', onWindowResize);
}

function buildTunnelMesh() {
  let wallCount = 0;
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (maze[r][c] === 1) wallCount++;
    }
  }

  const wallTexture = createWallTexture();
  const wallGeo = new THREE.BoxGeometry(CELL_SIZE, WALL_HEIGHT, CELL_SIZE);
  const wallMat = new THREE.MeshStandardMaterial({ map: wallTexture, roughness: 0.85 });
  const instancedWalls = new THREE.InstancedMesh(wallGeo, wallMat, wallCount);

  const dummy = new THREE.Object3D();
  let idx = 0;
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      if (maze[r][c] === 1) {
        const pos = gridTo3D(r, c);
        dummy.position.set(pos.x, WALL_HEIGHT / 2, pos.z);
        dummy.updateMatrix();
        instancedWalls.setMatrixAt(idx++, dummy.matrix);
      }
    }
  }
  scene.add(instancedWalls);

  const floorTexture = createFloorTexture();
  const floorGeo = new THREE.PlaneGeometry(GRID_COLS * CELL_SIZE, GRID_ROWS * CELL_SIZE);
  const floorMat = new THREE.MeshStandardMaterial({ map: floorTexture, roughness: 0.7 });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x100b07, roughness: 0.9 });
  const ceiling = new THREE.Mesh(floorGeo, ceilingMat);
  ceiling.position.y = WALL_HEIGHT;
  ceiling.rotation.x = Math.PI / 2;
  scene.add(ceiling);
}

function addFlickeringLanterns() {
  const lanternPositions = [
    { r: 26, c: 2 }, { r: 21, c: 3 }, { r: 15, c: 3 },
    { r: 9, c: 5 }, { r: 5, c: 8 }, { r: 11, c: 10 },
    { r: 17, c: 12 }, { r: 23, c: 12 }, { r: 33, c: 12 },
    { r: 38, c: 14 }, { r: 28, c: 16 }, { r: 18, c: 16 }
  ];

  lanternPositions.forEach(p => {
    const pos = gridTo3D(p.r, p.c);
    const light = new THREE.PointLight(0xff9933, 1.8, 8);
    light.position.set(pos.x, WALL_HEIGHT - 0.5, pos.z);
    scene.add(light);

    const sphereGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffcc66 });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.copy(light.position);
    scene.add(sphere);

    flickeringLights.push({ light, baseIntensity: 1.8, offset: Math.random() * 100 });
  });
}

function createDustParticles() {
  const particleCount = 700;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * GRID_COLS * CELL_SIZE;
    positions[i + 1] = Math.random() * WALL_HEIGHT;
    positions[i + 2] = (Math.random() - 0.5) * GRID_ROWS * CELL_SIZE;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0xffcc88,
    size: 0.04,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending
  });

  dustParticles = new THREE.Points(geometry, material);
  scene.add(dustParticles);
}

function updateDustParticles(dt) {
  if (!dustParticles) return;
  const positions = dustParticles.geometry.attributes.position.array;
  for (let i = 1; i < positions.length; i += 3) {
    positions[i] -= dt * 0.12;
    if (positions[i] < 0) positions[i] = WALL_HEIGHT;
  }
  dustParticles.geometry.attributes.position.needsUpdate = true;
}

function updatePlayer(dt) {
  if (!gameActive) return;

  const moveSpeed = 3.6;
  const turnSpeed = 2.4;

  if (inputState.turnLeft)  playerAngle += turnSpeed * dt;
  if (inputState.turnRight) playerAngle -= turnSpeed * dt;

  let moveDir = 0;
  if (inputState.forward) moveDir += 1;
  if (inputState.backward) moveDir -= 1;

  if (moveDir !== 0) {
    const forwardX = -Math.sin(playerAngle);
    const forwardZ = -Math.cos(playerAngle);

    const dx = forwardX * moveDir * moveSpeed * dt;
    const dz = forwardZ * moveDir * moveSpeed * dt;

    const nextX = playerPos.x + dx;
    const nextZ = playerPos.z + dz;

    if (!isColliding(nextX, nextZ)) {
      playerPos.x = nextX;
      playerPos.z = nextZ;
    } else if (!isColliding(nextX, playerPos.z)) {
      playerPos.x = nextX;
    } else if (!isColliding(playerPos.x, nextZ)) {
      playerPos.z = nextZ;
    }

    headBobTimer += dt * 9;
    camera.position.y = 1.3 + Math.sin(headBobTimer) * 0.04;

    distTravelledAcc += Math.hypot(dx, dz);
    if (distTravelledAcc >= CELL_SIZE) {
      steps++;
      document.getElementById('stepCount').textContent = steps;
      distTravelledAcc = 0;
      playFootstepSound();
    }
  } else {
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.3, dt * 5);
  }

  camera.position.x = playerPos.x;
  camera.position.z = playerPos.z;
  camera.rotation.y = playerAngle;

  torchLight.position.set(playerPos.x, camera.position.y, playerPos.z);

  const currentC = Math.floor((playerPos.x / CELL_SIZE) + (GRID_COLS / 2));
  const currentR = Math.floor((playerPos.z / CELL_SIZE) + (GRID_ROWS / 2));
  updateAudioPositional(currentR, currentC);

  const time = clock.getElapsedTime();
  torchLight.intensity = 2.0 + Math.sin(time * 15) * 0.25 + (Math.random() - 0.5) * 0.15;

  flickeringLights.forEach(item => {
    item.light.intensity = item.baseIntensity + Math.sin(time * 12 + item.offset) * 0.4 + (Math.random() - 0.5) * 0.2;
  });

  updateDustParticles(dt);

  const exit3D = gridTo3D(exitPos.r, exitPos.c);
  if (Math.hypot(playerPos.x - exit3D.x, playerPos.z - exit3D.z) < CELL_SIZE * 0.5) {
    handleWin();
  }
}

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  updatePlayer(dt);
  renderer.render(scene, camera);
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  seconds = 0;
  timerInterval = setInterval(() => {
    seconds++;
    document.getElementById('timer').textContent = `${seconds}s`;
  }, 1000);
}

function handleWin() {
  gameActive = false;
  clearInterval(timerInterval);
  playWinSound();
  document.getElementById('winStats').textContent = `Você atravessou o túnel em ${steps} passos e ${seconds} segundos!`;
  document.getElementById('winModal').style.display = 'flex';
}

function resetGame() {
  const start3D = gridTo3D(startPos.r, startPos.c);
  playerPos.x = start3D.x;
  playerPos.z = start3D.z;
  playerAngle = -Math.PI / 2;
  steps = 0;
  distTravelledAcc = 0;
  document.getElementById('stepCount').textContent = steps;
  document.getElementById('winModal').style.display = 'none';
  gameActive = true;
  startTimer();
}

function returnToStartScreen() {
  gameActive = false;
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById('gameUI').style.display = 'none';
  document.getElementById('winModal').style.display = 'none';
  document.getElementById('startScreen').style.display = 'flex';
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// INICIALIZACAO E EVENTOS
document.getElementById('startBtn').addEventListener('click', async () => {
  document.getElementById('startScreen').style.display = 'none';

  if (!isInitialized) {
    document.getElementById('loadingScreen').style.display = 'flex';
    await new Promise(resolve => setTimeout(resolve, 50));

    await initAudio();
    init3D();
    animate();

    document.getElementById('loadingScreen').style.display = 'none';
    isInitialized = true;
  }

  resetGame();
  document.getElementById('gameUI').style.display = 'flex';
});

document.getElementById('muteBtn').addEventListener('click', toggleMute);
document.getElementById('homeBtn').addEventListener('click', returnToStartScreen);

window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'w' || k === 'arrowup') inputState.forward = true;
  if (k === 's' || k === 'arrowdown') inputState.backward = true;
  if (k === 'a' || k === 'arrowleft') inputState.turnLeft = true;
  if (k === 'd' || k === 'arrowright') inputState.turnRight = true;
});

window.addEventListener('keyup', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'w' || k === 'arrowup') inputState.forward = false;
  if (k === 's' || k === 'arrowdown') inputState.backward = false;
  if (k === 'a' || k === 'arrowleft') inputState.turnLeft = false;
  if (k === 'd' || k === 'arrowright') inputState.turnRight = false;
});

function setupTouchButton(id, action) {
  const btn = document.getElementById(id);
  const start = (e) => { e.preventDefault(); inputState[action] = true; };
  const end = (e) => { e.preventDefault(); inputState[action] = false; };

  btn.addEventListener('touchstart', start, { passive: false });
  btn.addEventListener('touchend', end, { passive: false });
  btn.addEventListener('mousedown', start);
  btn.addEventListener('mouseup', end);
  btn.addEventListener('mouseleave', end);
}

setupTouchButton('btnUp', 'forward');
setupTouchButton('btnDown', 'backward');
setupTouchButton('btnLeft', 'turnLeft');
setupTouchButton('btnRight', 'turnRight');