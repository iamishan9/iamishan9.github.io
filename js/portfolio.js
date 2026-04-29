import * as THREE from "three";

const canvas = document.querySelector("#world");
const zoneName = document.querySelector("#zone-name");
const scoreValue = document.querySelector("#score-value");
const speedValue = document.querySelector("#speed-value");
const panelKicker = document.querySelector("#panel-kicker");
const panelTitle = document.querySelector("#panel-title");
const panelBody = document.querySelector("#panel-body");
const panelActions = document.querySelector("#panel-actions");
const toast = document.querySelector("#toast");
const stationLinks = [...document.querySelectorAll("[data-station-link]")];
const touchButtons = [...document.querySelectorAll("[data-control]")];

const projects = [
  {
    title: "Road-Rash",
    description: "A Road Rash inspired game built in vanilla JavaScript.",
    image: "./images/roadrash.jpg",
    href: "https://github.com/iamishan9/Road-Rash",
    label: "GitHub"
  },
  {
    title: "SGeet",
    description: "Music streaming concept with recommendation ideas from social activity.",
    image: "./images/sgeet.png",
    href: "https://github.com/iamishan9/sgeet",
    label: "GitHub"
  },
  {
    title: "Save Nepal",
    description: "A mobile arcade game inspired by Flappy Bird.",
    image: "./images/save-nepal.png",
    href: "https://play.google.com/store/apps/details?id=com.prognepal.SaveNepal",
    label: "Play Store"
  },
  {
    title: "Histogram CUDA",
    description: "Parallel histogram calculation for ASCII input using CUDA.",
    image: "./images/cuda.jpg",
    href: "https://github.com/iamishan9/Histogram-CUDA",
    label: "GitHub"
  },
  {
    title: "Dynamic Carpool",
    description: "Android routing app for lowering vehicle usage and emissions.",
    image: "./images/dynamic-carpool.png",
    href: "https://github.com/iamishan9/DynamicCarpool",
    label: "GitHub"
  },
  {
    title: "Mero Kharcha",
    description: "An expense manager app for tracking personal spending.",
    image: "./images/mero-kharcha.png",
    href: "https://play.google.com/store/apps/details?id=com.prognepal.MeroKharcha",
    label: "Play Store"
  }
];

const stationData = {
  about: {
    name: "Launch Pad",
    label: "About",
    color: 0xf7bd38,
    position: new THREE.Vector3(0, 0, 0),
    title: "Bonjour, I'm Ishan.",
    kicker: "Launch Pad",
    reward: "Signal captured: profile unlocked.",
    body: `
      <p>A software engineer based in France, building across web platforms, IoT, machine learning, mobile apps, and game experiments.</p>
      <div class="stat-strip">
        <div class="stat"><strong>France</strong><span>Current base</span></div>
        <div class="stat"><strong>Full stack</strong><span>Web, apps, data</span></div>
        <div class="stat"><strong>Games</strong><span>Vanilla JS roots</span></div>
      </div>
      <p>I like practical engineering with a playful edge: systems that work, interfaces that feel alive, and prototypes that invite people to explore.</p>
    `,
    actions: [
      { label: "GitHub", href: "https://github.com/iamishan9" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/iamishan/", secondary: true },
      { label: "Email", href: "mailto:iamishan9@gmail.com", secondary: true }
    ]
  },
  skills: {
    name: "Skills Lab",
    label: "Skills",
    color: 0x39c6e6,
    position: new THREE.Vector3(-24, 0, -18),
    title: "Engineering toolkit.",
    kicker: "Skills Lab",
    reward: "Signal captured: skills calibrated.",
    body: `
      <ul class="skill-list">
        <li><div class="skill-row"><span>Python, Django, Flask</span><span>80%</span></div><div class="meter"><span style="--level: 80%"></span></div></li>
        <li><div class="skill-row"><span>JavaScript, React, Node</span><span>75%</span></div><div class="meter"><span style="--level: 75%"></span></div></li>
        <li><div class="skill-row"><span>C, C++, C#</span><span>75%</span></div><div class="meter"><span style="--level: 75%"></span></div></li>
        <li><div class="skill-row"><span>Java</span><span>70%</span></div><div class="meter"><span style="--level: 70%"></span></div></li>
      </ul>
      <div class="tag-cloud">
        <span>Internet of Things</span><span>Programmable Matter</span><span>Mobile Apps</span><span>Machine Learning</span><span>Deep Learning</span><span>Microsoft Dynamics</span><span>Modular Robots</span><span>MSSQL</span><span>MySQL</span><span>MongoDB</span><span>Algorithms</span><span>Docker</span><span>Airflow</span><span>CUDA</span>
      </div>
    `,
    actions: [
      { label: "View GitHub", href: "https://github.com/iamishan9" }
    ]
  },
  experience: {
    name: "Timeline Ridge",
    label: "Experience",
    color: 0xff6f61,
    position: new THREE.Vector3(24, 0, -18),
    title: "A route through software and research.",
    kicker: "Timeline Ridge",
    reward: "Signal captured: timeline mapped.",
    body: `
      <div class="timeline">
        <div class="timeline-item"><time>Oct 2014 - Nov 2018</time><div><strong>Tribhuvan University</strong><span>Full scholarship, Bachelor in Computer Engineering.</span></div></div>
        <div class="timeline-item"><time>Nov 2018 - Aug 2019</time><div><strong>Leapfrog Technology Nepal</strong><span>Associate Software Engineer.</span></div></div>
        <div class="timeline-item"><time>Sep 2019 - Aug 2021</time><div><strong>Universite Bourgogne Franche-Comte</strong><span>Full scholarship, Master in Internet of Things.</span></div></div>
        <div class="timeline-item"><time>Jul 2020 - Sep 2020</time><div><strong>Universite Bourgogne Franche-Comte</strong><span>Student Intern.</span></div></div>
        <div class="timeline-item"><time>Feb 2021 - Jul 2021</time><div><strong>Faurecia Clean Mobility, Bavans</strong><span>Software Engineering Intern.</span></div></div>
      </div>
    `,
    actions: [
      { label: "Leapfrog", href: "https://www.lftechnology.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/iamishan/", secondary: true }
    ]
  },
  projects: {
    name: "Project Circuit",
    label: "Projects",
    color: 0x8f7df2,
    position: new THREE.Vector3(-24, 0, 22),
    title: "Playable ideas and shipped experiments.",
    kicker: "Project Circuit",
    reward: "Signal captured: projects indexed.",
    body: `
      <div class="project-grid">
        ${projects.map((project) => `
          <a class="project-card" href="${project.href}" target="_blank" rel="noopener">
            <img src="${project.image}" alt="">
            <div>
              <strong>${project.title}</strong>
              <p>${project.description}</p>
            </div>
          </a>
        `).join("")}
      </div>
    `,
    actions: [
      { label: "GitHub profile", href: "https://github.com/iamishan9" }
    ]
  },
  contact: {
    name: "Signal Tower",
    label: "Contact",
    color: 0x7ac943,
    position: new THREE.Vector3(26, 0, 22),
    title: "Let's build something.",
    kicker: "Signal Tower",
    reward: "Signal captured: contact online.",
    body: `
      <p>For collaborations, software work, prototypes, or a good engineering conversation, send a signal here.</p>
      <form class="contact-form" action="https://formspree.io/iamishan9@gmail.com" method="post">
        <label>Name<input type="text" name="name" autocomplete="name" placeholder="Your name"></label>
        <label>Email<input type="email" name="_replyto" autocomplete="email" placeholder="you@example.com"></label>
        <label>Message<textarea name="message" rows="4" placeholder="What are we making?"></textarea></label>
        <button type="submit">Send message</button>
      </form>
      <div class="service-grid">
        <div class="service-card"><strong>Software development</strong><p>Scripts, desktop tools, services, and web products.</p></div>
        <div class="service-card"><strong>Mobile apps</strong><p>Utility apps, Android builds, and game concepts.</p></div>
        <div class="service-card"><strong>IoT systems</strong><p>Connected devices, data collection, and automation.</p></div>
        <div class="service-card"><strong>ML and data</strong><p>Analysis, modeling, and decision support.</p></div>
      </div>
    `,
    actions: [
      { label: "Email directly", href: "mailto:iamishan9@gmail.com" },
      { label: "Instagram", href: "https://instagram.com/iishan9", secondary: true }
    ]
  }
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x11171a);
scene.fog = new THREE.Fog(0x11171a, 36, 116);

let renderer;

try {
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance"
  });
} catch (error) {
  document.body.classList.add("webgl-failed");
  panelTitle.textContent = "3D could not start here.";
  panelBody.innerHTML = "<p>Your browser blocked WebGL for this page, but the portfolio links are still available.</p>";
  panelActions.innerHTML = actionMarkup(stationData.about.actions);
  throw error;
}

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 240);
camera.position.set(0, 10, -14);

const clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();
const world = new THREE.Group();
const stationObjects = new Map();
const visitedStations = new Set();
const keys = {
  forward: false,
  backward: false,
  left: false,
  right: false,
  brake: false
};

let activeStationId = "about";
let guideTarget = null;
let speed = 0;
let toastTimer = 0;

const materials = {
  grass: new THREE.MeshStandardMaterial({ color: 0x2e8a57, roughness: 0.92, metalness: 0.02 }),
  road: new THREE.MeshStandardMaterial({ color: 0x252a2f, roughness: 0.78, metalness: 0.02 }),
  roadEdge: new THREE.MeshStandardMaterial({ color: 0xf7bd38, roughness: 0.56, metalness: 0.05 }),
  white: new THREE.MeshStandardMaterial({ color: 0xf7fbff, roughness: 0.38, metalness: 0.02 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x111418, roughness: 0.55, metalness: 0.05 }),
  glass: new THREE.MeshStandardMaterial({ color: 0x39c6e6, roughness: 0.18, metalness: 0.05, transparent: true, opacity: 0.72 }),
  trunk: new THREE.MeshStandardMaterial({ color: 0x74543a, roughness: 0.9 }),
  leaf: new THREE.MeshStandardMaterial({ color: 0x7ac943, roughness: 0.84 }),
  building: new THREE.MeshStandardMaterial({ color: 0xdfe8ed, roughness: 0.7 }),
  purple: new THREE.MeshStandardMaterial({ color: 0x8f7df2, roughness: 0.45, metalness: 0.08 })
};

scene.add(world);
addLights();
addGround();
addRoadNetwork();
addScenery();
addStations();
const car = createCar();
scene.add(car.group);
const guideArrow = createGuideArrow();
scene.add(guideArrow);

setActiveStation("about", { collect: true, silent: true });
applyInitialHash();
bindEvents();
animate();

function addLights() {
  const hemisphere = new THREE.HemisphereLight(0xcfefff, 0x20351f, 1.25);
  scene.add(hemisphere);

  const sun = new THREE.DirectionalLight(0xffffff, 2.2);
  sun.position.set(-18, 32, 20);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 90;
  sun.shadow.camera.left = -48;
  sun.shadow.camera.right = 48;
  sun.shadow.camera.top = 48;
  sun.shadow.camera.bottom = -48;
  scene.add(sun);
}

function addGround() {
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(150, 150), materials.grass);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  world.add(ground);

  const grid = new THREE.GridHelper(150, 30, 0x94c77b, 0x3f7651);
  grid.position.y = 0.025;
  grid.material.transparent = true;
  grid.material.opacity = 0.18;
  world.add(grid);

  const water = new THREE.Mesh(
    new THREE.CircleGeometry(13, 48),
    new THREE.MeshStandardMaterial({ color: 0x2a91a7, roughness: 0.28, metalness: 0.05, transparent: true, opacity: 0.84 })
  );
  water.rotation.x = -Math.PI / 2;
  water.position.set(35, 0.035, -35);
  world.add(water);
}

function addRoadNetwork() {
  const ids = ["skills", "experience", "contact", "projects", "skills"];
  const about = stationData.about.position;

  Object.values(stationData).forEach((station) => {
    if (station.position !== about) {
      addRoad(about, station.position, 4.8);
    }
  });

  ids.forEach((id, index) => {
    const next = ids[index + 1];
    if (next) {
      addRoad(stationData[id].position, stationData[next].position, 4.2);
    }
  });
}

function addRoad(start, end, width) {
  const delta = new THREE.Vector3().subVectors(end, start);
  const length = Math.hypot(delta.x, delta.z);
  const road = new THREE.Mesh(new THREE.BoxGeometry(width, 0.08, length), materials.road);
  road.position.set((start.x + end.x) / 2, 0.045, (start.z + end.z) / 2);
  road.rotation.y = Math.atan2(delta.x, delta.z);
  road.receiveShadow = true;
  world.add(road);

  const stripeCount = Math.max(1, Math.floor(length / 6));
  for (let i = 0; i < stripeCount; i += 1) {
    const t = (i + 0.5) / stripeCount;
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.09, 2.1), materials.roadEdge);
    stripe.position.lerpVectors(start, end, t);
    stripe.position.y = 0.105;
    stripe.rotation.y = road.rotation.y;
    world.add(stripe);
  }
}

function addScenery() {
  const random = seededRandom(7);

  for (let i = 0; i < 62; i += 1) {
    const x = random() * 132 - 66;
    const z = random() * 132 - 66;
    if (Math.hypot(x, z) < 14 || isNearStation(x, z, 9)) {
      continue;
    }
    if (i % 5 === 0) {
      addBeaconBuilding(x, z, 1 + random() * 2.4, random);
    } else {
      addTree(x, z, 0.8 + random() * 1.2);
    }
  }

  addSkillSculpture();
  addExperiencePillars();
  addProjectBillboards();
  addContactTower();
  addAvatarBoard();
}

function addTree(x, z, scale) {
  const tree = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18 * scale, 0.25 * scale, 1.2 * scale, 8), materials.trunk);
  trunk.position.y = 0.6 * scale;
  trunk.castShadow = true;
  tree.add(trunk);

  const crown = new THREE.Mesh(new THREE.ConeGeometry(0.86 * scale, 2.2 * scale, 9), materials.leaf);
  crown.position.y = 1.9 * scale;
  crown.castShadow = true;
  tree.add(crown);

  tree.position.set(x, 0, z);
  world.add(tree);
}

function addBeaconBuilding(x, z, height, random) {
  const building = new THREE.Mesh(
    new THREE.BoxGeometry(1.4 + random() * 1.2, height, 1.4 + random() * 1.4),
    materials.building
  );
  building.position.set(x, height / 2, z);
  building.rotation.y = random() * Math.PI;
  building.castShadow = true;
  building.receiveShadow = true;
  world.add(building);
}

function addStations() {
  Object.entries(stationData).forEach(([id, station]) => {
    const group = new THREE.Group();
    group.position.copy(station.position);

    const stationMaterial = new THREE.MeshStandardMaterial({
      color: station.color,
      roughness: 0.36,
      metalness: 0.2,
      emissive: station.color,
      emissiveIntensity: 0.16
    });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.8, 0.55, 32), materials.dark);
    base.position.y = 0.28;
    base.castShadow = true;
    base.receiveShadow = true;
    group.add(base);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(4.9, 0.12, 8, 64), stationMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.66;
    group.add(ring);

    const beacon = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 1), stationMaterial);
    beacon.position.y = 3.4;
    beacon.castShadow = true;
    group.add(beacon);

    const light = new THREE.PointLight(station.color, 2.2, 18, 1.6);
    light.position.y = 3.3;
    group.add(light);

    const label = makeLabel(station.label, station.color);
    label.position.set(0, 4.4, 0);
    group.add(label);

    world.add(group);
    stationObjects.set(id, { group, beacon, ring, light, label });
  });
}

function addSkillSculpture() {
  const base = stationData.skills.position;
  const levels = [8, 7.5, 7.5, 7];
  const colors = [0x39c6e6, 0xf7bd38, 0xff6f61, 0x7ac943];

  levels.forEach((level, index) => {
    const mat = new THREE.MeshStandardMaterial({ color: colors[index], roughness: 0.45, metalness: 0.1 });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.2, level * 0.55, 1.2), mat);
    bar.position.set(base.x - 3 + index * 2, level * 0.275 + 0.6, base.z + 7.2);
    bar.castShadow = true;
    bar.receiveShadow = true;
    world.add(bar);
  });
}

function addExperiencePillars() {
  const base = stationData.experience.position;
  const heights = [2.2, 3.4, 4.6, 3.2, 4.1];

  heights.forEach((height, index) => {
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.54, 0.7, height, 12),
      new THREE.MeshStandardMaterial({ color: index % 2 ? 0xff6f61 : 0xf7bd38, roughness: 0.42, metalness: 0.12 })
    );
    pillar.position.set(base.x - 5 + index * 2.5, height / 2 + 0.35, base.z + 7.2);
    pillar.castShadow = true;
    world.add(pillar);
  });
}

function addProjectBillboards() {
  const base = stationData.projects.position;
  const boardPositions = [
    [-7, 5.8],
    [-2.4, 7.2],
    [2.4, 7.2],
    [7, 5.8],
    [-4.5, -7.1],
    [4.5, -7.1]
  ];

  projects.forEach((project, index) => {
    const board = new THREE.Group();
    const frame = new THREE.Mesh(new THREE.BoxGeometry(4.3, 2.9, 0.24), materials.dark);
    frame.castShadow = true;
    board.add(frame);

    const imageMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    textureLoader.load(project.image, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      imageMaterial.map = texture;
      imageMaterial.needsUpdate = true;
    });

    const image = new THREE.Mesh(new THREE.PlaneGeometry(3.9, 2.25), imageMaterial);
    image.position.z = 0.13;
    board.add(image);

    const [x, z] = boardPositions[index];
    board.position.set(base.x + x, 2.15, base.z + z);
    board.lookAt(base.x, 2.15, base.z);
    world.add(board);
  });
}

function addContactTower() {
  const base = stationData.contact.position;
  const tower = new THREE.Group();

  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 6.4, 16), materials.white);
  mast.position.y = 3.4;
  mast.castShadow = true;
  tower.add(mast);

  const dish = new THREE.Mesh(
    new THREE.TorusGeometry(1.8, 0.12, 8, 32),
    new THREE.MeshStandardMaterial({ color: 0x7ac943, roughness: 0.38, metalness: 0.12 })
  );
  dish.position.set(0, 6.6, 0.25);
  dish.rotation.x = Math.PI / 2.8;
  tower.add(dish);

  const pulse = new THREE.Mesh(
    new THREE.TorusGeometry(2.8, 0.05, 8, 48),
    new THREE.MeshBasicMaterial({ color: 0x7ac943, transparent: true, opacity: 0.5 })
  );
  pulse.position.set(0, 6.6, 0.25);
  pulse.rotation.x = Math.PI / 2.8;
  tower.add(pulse);

  tower.position.set(base.x + 6.8, 0, base.z - 3.4);
  tower.userData.pulse = pulse;
  world.add(tower);
}

function addAvatarBoard() {
  const base = stationData.about.position;
  const board = new THREE.Group();

  const frame = new THREE.Mesh(new THREE.BoxGeometry(3.3, 3.3, 0.28), materials.dark);
  frame.castShadow = true;
  board.add(frame);

  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  textureLoader.load("./images/ishan1.jpg", (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    material.map = texture;
    material.needsUpdate = true;
  });

  const image = new THREE.Mesh(new THREE.PlaneGeometry(2.85, 2.85), material);
  image.position.z = 0.16;
  board.add(image);

  board.position.set(base.x - 6.5, 2.6, base.z + 4.8);
  board.rotation.y = Math.PI / 5;
  world.add(board);
}

function createCar() {
  const group = new THREE.Group();
  group.position.set(0, 0.05, -6);
  group.rotation.y = 0.35;

  const body = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.62, 2.75), new THREE.MeshStandardMaterial({ color: 0xff6f61, roughness: 0.36, metalness: 0.12 }));
  body.position.y = 0.65;
  body.castShadow = true;
  group.add(body);

  const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.72, 1.05), materials.glass);
  cabin.position.set(0, 1.25, -0.22);
  cabin.castShadow = true;
  group.add(cabin);

  const hood = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.24, 0.88), new THREE.MeshStandardMaterial({ color: 0xf7bd38, roughness: 0.4, metalness: 0.1 }));
  hood.position.set(0, 1.02, 0.92);
  hood.castShadow = true;
  group.add(hood);

  const wheels = [];
  const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x0b0f12, roughness: 0.5 });
  [
    [-0.98, 0.38, 0.9],
    [0.98, 0.38, 0.9],
    [-0.98, 0.38, -0.9],
    [0.98, 0.38, -0.9]
  ].forEach(([x, y, z]) => {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.34, 24), wheelMaterial);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(x, y, z);
    wheel.castShadow = true;
    wheels.push(wheel);
    group.add(wheel);
  });

  const headlightMaterial = new THREE.MeshBasicMaterial({ color: 0xfff5c8 });
  [-0.45, 0.45].forEach((x) => {
    const light = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.15, 0.08), headlightMaterial);
    light.position.set(x, 0.72, 1.42);
    group.add(light);
  });

  return { group, wheels };
}

function createGuideArrow() {
  const group = new THREE.Group();
  const cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.8, 1.8, 3),
    new THREE.MeshBasicMaterial({ color: 0xf7bd38, transparent: true, opacity: 0.82 })
  );
  cone.rotation.x = Math.PI / 2;
  group.add(cone);
  group.visible = false;
  return group;
}

function makeLabel(text, color) {
  const canvasLabel = document.createElement("canvas");
  const context = canvasLabel.getContext("2d");
  canvasLabel.width = 512;
  canvasLabel.height = 144;

  context.clearRect(0, 0, canvasLabel.width, canvasLabel.height);
  context.fillStyle = "rgba(13, 17, 21, 0.78)";
  roundRect(context, 20, 28, 472, 88, 18);
  context.fill();
  context.strokeStyle = `#${color.toString(16).padStart(6, "0")}`;
  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = "#f7fbff";
  context.font = "900 44px system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, 256, 72, 420);

  const texture = new THREE.CanvasTexture(canvasLabel);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(4.2, 1.18, 1);
  return sprite;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function bindEvents() {
  window.addEventListener("resize", onResize);

  window.addEventListener("keydown", (event) => {
    const control = keyMap(event);
    if (!control) {
      return;
    }
    keys[control] = true;
    event.preventDefault();
  });

  window.addEventListener("keyup", (event) => {
    const control = keyMap(event);
    if (!control) {
      return;
    }
    keys[control] = false;
    event.preventDefault();
  });

  stationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.dataset.stationLink;
      event.preventDefault();
      jumpToStation(id);
    });
  });

  touchButtons.forEach((button) => {
    const control = button.dataset.control;
    const setPressed = (pressed, event) => {
      event.preventDefault();
      keys[control] = pressed;
      button.classList.toggle("is-pressed", pressed);
      if (pressed && event.pointerId !== undefined) {
        button.setPointerCapture(event.pointerId);
      }
    };
    button.addEventListener("pointerdown", (event) => setPressed(true, event));
    button.addEventListener("pointerup", (event) => setPressed(false, event));
    button.addEventListener("pointercancel", (event) => setPressed(false, event));
    button.addEventListener("pointerleave", (event) => setPressed(false, event));
  });
}

function keyMap(event) {
  const map = {
    KeyW: "forward",
    ArrowUp: "forward",
    KeyS: "backward",
    ArrowDown: "backward",
    KeyA: "left",
    ArrowLeft: "left",
    KeyD: "right",
    ArrowRight: "right",
    Space: "brake"
  };
  return map[event.code];
}

function applyInitialHash() {
  const id = window.location.hash.replace("#", "");
  if (stationData[id]) {
    jumpToStation(id, { silent: true });
  }
}

function jumpToStation(id, options = {}) {
  const station = stationData[id];
  if (!station) {
    return;
  }
  const offset = new THREE.Vector3(0, 0, -6).applyAxisAngle(new THREE.Vector3(0, 1, 0), car.group.rotation.y);
  car.group.position.copy(station.position).add(offset);
  car.group.position.y = 0.05;
  speed = 0;
  guideTarget = station.position.clone();
  setActiveStation(id, { collect: true, silent: options.silent });
  history.replaceState(null, "", `#${id}`);
}

function setActiveStation(id, options = {}) {
  const station = stationData[id];
  if (!station) {
    return;
  }

  activeStationId = id;
  zoneName.textContent = station.name;
  panelKicker.textContent = station.kicker;
  panelTitle.textContent = station.title;
  panelBody.innerHTML = station.body;
  panelActions.innerHTML = actionMarkup(station.actions);
  stationLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.stationLink === id));

  if (options.collect && !visitedStations.has(id)) {
    visitedStations.add(id);
    if (!options.silent) {
      showToast(station.reward);
    }
  }

  scoreValue.textContent = `${visitedStations.size}/5`;
}

function actionMarkup(actions) {
  return actions.map((action) => {
    const classes = action.secondary ? "secondary" : "";
    return `<a class="${classes}" href="${action.href}" target="_blank" rel="noopener">${action.label}</a>`;
  }).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function updateDriving(dt) {
  const accel = keys.forward ? 17 : 0;
  const reverse = keys.backward ? 13 : 0;

  speed += accel * dt;
  speed -= reverse * dt;

  if (keys.brake) {
    speed *= Math.pow(0.18, dt);
  }

  speed *= Math.pow(0.64, dt);
  speed = THREE.MathUtils.clamp(speed, -7.2, 15.5);

  const steering = (Number(keys.left) - Number(keys.right)) * Math.min(1, Math.abs(speed) / 8 + 0.34);
  car.group.rotation.y += steering * dt * 1.95 * Math.sign(speed || 1);

  const forward = new THREE.Vector3(Math.sin(car.group.rotation.y), 0, Math.cos(car.group.rotation.y));
  car.group.position.addScaledVector(forward, speed * dt);
  car.group.position.x = THREE.MathUtils.clamp(car.group.position.x, -68, 68);
  car.group.position.z = THREE.MathUtils.clamp(car.group.position.z, -68, 68);

  car.wheels.forEach((wheel) => {
    wheel.rotation.x += speed * dt * 2.2;
  });

  speedValue.textContent = Math.round(Math.abs(speed) * 7).toString();
}

function updateCamera() {
  const rotation = car.group.rotation.y;
  const behind = new THREE.Vector3(-Math.sin(rotation) * 10, 6.4, -Math.cos(rotation) * 10);
  const side = new THREE.Vector3(Math.cos(rotation) * 2.2, 0, -Math.sin(rotation) * 2.2);
  const desired = car.group.position.clone().add(behind).add(side);
  camera.position.lerp(desired, 0.075);
  camera.lookAt(car.group.position.x, car.group.position.y + 1.2, car.group.position.z);
}

function updateStations(elapsed) {
  let nearest = activeStationId;
  let nearestDistance = Infinity;

  Object.entries(stationData).forEach(([id, station]) => {
    const object = stationObjects.get(id);
    const distance = flatDistance(car.group.position, station.position);
    if (distance < nearestDistance) {
      nearest = id;
      nearestDistance = distance;
    }

    object.beacon.rotation.y += 0.016;
    object.beacon.position.y = 3.4 + Math.sin(elapsed * 2.2 + station.position.x) * 0.18;
    object.ring.rotation.z += 0.01;
    object.light.intensity = visitedStations.has(id) ? 3.4 : 2.1;
    object.label.material.opacity = THREE.MathUtils.clamp((distance - 8) / 8, 0, 1);
    object.label.visible = object.label.material.opacity > 0.02;
    object.group.scale.lerp(new THREE.Vector3(distance < 9 ? 1.08 : 1, distance < 9 ? 1.08 : 1, distance < 9 ? 1.08 : 1), 0.08);
  });

  if (nearestDistance < 8.6 && nearest !== activeStationId) {
    setActiveStation(nearest, { collect: true });
    history.replaceState(null, "", `#${nearest}`);
  }
}

function updateGuide(elapsed) {
  if (!guideTarget) {
    guideArrow.visible = false;
    return;
  }

  const distance = flatDistance(car.group.position, guideTarget);
  if (distance < 7.5) {
    guideTarget = null;
    guideArrow.visible = false;
    return;
  }

  guideArrow.visible = true;
  const direction = new THREE.Vector3().subVectors(guideTarget, car.group.position);
  const angle = Math.atan2(direction.x, direction.z);
  guideArrow.position.copy(car.group.position);
  guideArrow.position.y = 3.3 + Math.sin(elapsed * 4) * 0.22;
  guideArrow.rotation.y = angle;
}

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.elapsedTime;
  updateDriving(dt);
  updateCamera();
  updateStations(elapsed);
  updateGuide(elapsed);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onResize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function isNearStation(x, z, radius) {
  return Object.values(stationData).some((station) => Math.hypot(x - station.position.x, z - station.position.z) < radius);
}

function flatDistance(a, b) {
  return Math.hypot(a.x - b.x, a.z - b.z);
}

function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}
