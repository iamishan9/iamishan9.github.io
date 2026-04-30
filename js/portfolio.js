import * as THREE from "three";

const canvas = document.querySelector("#world");
const contentPanel = document.querySelector("#content-panel");
const panelKicker = document.querySelector("#panel-kicker");
const panelTitle = document.querySelector("#panel-title");
const panelBody = document.querySelector("#panel-body");
const panelActions = document.querySelector("#panel-actions");
const panelToggle = document.querySelector("#panel-toggle");
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
    name: "Contact",
    label: "Contact",
    color: 0x7ac943,
    position: new THREE.Vector3(26, 0, 22),
    title: "Let's build something.",
    kicker: "Contact",
    body: `
      <p>For collaborations, software work, prototypes, or a good engineering conversation, message me here.</p>
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

const camera = new THREE.PerspectiveCamera(cameraFov(), window.innerWidth / window.innerHeight, 0.1, 260);
camera.position.set(0, 11, -18);

const clock = new THREE.Clock();
const textureLoader = new THREE.TextureLoader();
const world = new THREE.Group();
const stationObjects = new Map();
const visitedStations = new Set();
const collisionBodies = [];
const roadSegments = [];
const carColliderRadius = 1.58;
const carBaseHeight = 0.05;
const stationPlatformRadius = 5.25;
const stationPlatformTop = 0.18;
const worldLimit = 68;
const mobilePanelQuery = window.matchMedia("(max-width: 680px)");
const keys = {
  forward: false,
  backward: false,
  left: false,
  right: false
};

let activeStationId = "about";
let guideTarget = null;
let speed = 0;

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
  addCircleCollider(35, -35, 12.8);
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
  roadSegments.push({
    start: start.clone(),
    end: end.clone(),
    halfWidth: width / 2
  });

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
  let placed = 0;
  let attempts = 0;

  while (placed < 62 && attempts < 240) {
    attempts += 1;
    const besideRoad = moveBesideRoad(random() * 132 - 66, random() * 132 - 66, 4.4);
    const x = besideRoad.x;
    const z = besideRoad.z;

    if (Math.hypot(x, z) < 14 || isNearStation(x, z, 9) || isNearRoad(x, z, 2.2)) {
      continue;
    }

    if (placed % 5 === 0) {
      addBeaconBuilding(x, z, 1 + random() * 2.4, random);
    } else {
      addTree(x, z, 0.8 + random() * 1.2);
    }
    placed += 1;
  }

  addSkillSculpture();
  addExperiencePillars();
  addProjectBillboards();
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
  addCircleCollider(x, z, 0.72 * scale);
}

function addBeaconBuilding(x, z, height, random) {
  const width = 1.4 + random() * 1.2;
  const depth = 1.4 + random() * 1.4;
  const rotation = random() * Math.PI;
  const building = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    materials.building
  );
  building.position.set(x, height / 2, z);
  building.rotation.y = rotation;
  building.castShadow = true;
  building.receiveShadow = true;
  world.add(building);
  addBoxCollider(x, z, width + 0.2, depth + 0.2, rotation);
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

    const base = new THREE.Mesh(new THREE.CylinderGeometry(4.25, 4.75, 0.18, 40), materials.dark);
    base.position.y = stationPlatformTop / 2;
    base.castShadow = true;
    base.receiveShadow = true;
    group.add(base);

    const top = new THREE.Mesh(new THREE.CircleGeometry(4.25, 40), stationMaterial);
    top.rotation.x = -Math.PI / 2;
    top.position.y = stationPlatformTop + 0.006;
    top.receiveShadow = true;
    group.add(top);

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
    stationObjects.set(id, { group, beacon, light, label });
  });
}

function addSkillSculpture() {
  const levels = [8, 7.5, 7.5, 7];
  const colors = [0x39c6e6, 0xf7bd38, 0xff6f61, 0x7ac943];

  levels.forEach((level, index) => {
    const mat = new THREE.MeshStandardMaterial({ color: colors[index], roughness: 0.45, metalness: 0.1 });
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.2, level * 0.55, 1.2), mat);
    const roadside = pointBesideRoad(stationData.skills.position, stationData.projects.position, 0.16 + index * 0.06, 1, 6.2);
    bar.position.set(roadside.x, level * 0.275 + 0.6, roadside.z);
    bar.castShadow = true;
    bar.receiveShadow = true;
    world.add(bar);
    addBoxCollider(bar.position.x, bar.position.z, 1.36, 1.36, 0);
  });
}

function addExperiencePillars() {
  const heights = [2.2, 3.4, 4.6, 3.2, 4.1];

  heights.forEach((height, index) => {
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.54, 0.7, height, 12),
      new THREE.MeshStandardMaterial({ color: index % 2 ? 0xff6f61 : 0xf7bd38, roughness: 0.42, metalness: 0.12 })
    );
    const roadside = pointBesideRoad(stationData.experience.position, stationData.contact.position, 0.16 + index * 0.07, -1, 6.4);
    pillar.position.set(roadside.x, height / 2 + 0.35, roadside.z);
    pillar.castShadow = true;
    world.add(pillar);
    addCircleCollider(pillar.position.x, pillar.position.z, 0.78);
  });
}

function addProjectBillboards() {
  const boardPositions = [
    { from: "projects", to: "contact", t: 0.18, side: -1 },
    { from: "projects", to: "contact", t: 0.34, side: -1 },
    { from: "projects", to: "contact", t: 0.5, side: -1 },
    { from: "projects", to: "skills", t: 0.18, side: 1 },
    { from: "projects", to: "skills", t: 0.34, side: 1 },
    { from: "projects", to: "skills", t: 0.5, side: 1 }
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

    const placement = boardPositions[index];
    const start = stationData[placement.from].position;
    const end = stationData[placement.to].position;
    const roadside = pointBesideRoad(start, end, placement.t, placement.side, 6.5);
    const centerline = pointOnRoad(start, end, placement.t);
    board.position.set(roadside.x, 2.15, roadside.z);
    board.lookAt(centerline.x, 2.15, centerline.z);
    world.add(board);
    addBoxCollider(board.position.x, board.position.z, 4.5, 0.68, board.rotation.y);
  });
}

function addAvatarBoard() {
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

  const frontImage = new THREE.Mesh(new THREE.PlaneGeometry(2.85, 2.85), material);
  frontImage.position.z = 0.16;
  board.add(frontImage);

  const backImage = new THREE.Mesh(new THREE.PlaneGeometry(2.85, 2.85), material);
  backImage.position.z = -0.16;
  backImage.rotation.y = Math.PI;
  board.add(backImage);

  const roadside = pointBesideRoad(stationData.about.position, stationData.contact.position, 0.24, 1, 6.8);
  const centerline = pointOnRoad(stationData.about.position, stationData.contact.position, 0.24);
  board.position.set(roadside.x, 2.6, roadside.z);
  board.lookAt(centerline.x, 2.6, centerline.z);
  world.add(board);
  addBoxCollider(board.position.x, board.position.z, 3.5, 0.72, board.rotation.y);
}

function createCar() {
  const group = new THREE.Group();
  group.position.set(0, carBaseHeight, -7.2);
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

  if (mobilePanelQuery.addEventListener) {
    mobilePanelQuery.addEventListener("change", syncPanelMode);
  } else {
    mobilePanelQuery.addListener(syncPanelMode);
  }

  panelToggle.addEventListener("click", () => {
    setPanelCollapsed(!contentPanel.classList.contains("is-collapsed"));
  });

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

  syncPanelMode();
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
    ArrowRight: "right"
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
  const offset = new THREE.Vector3(0, 0, -7.2).applyAxisAngle(new THREE.Vector3(0, 1, 0), car.group.rotation.y);
  car.group.position.copy(station.position).add(offset);
  car.group.position.y = getDriveHeight(car.group.position);
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
  panelKicker.textContent = station.kicker;
  panelTitle.textContent = station.title;
  panelBody.innerHTML = station.body;
  panelActions.innerHTML = actionMarkup(station.actions);
  stationLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.stationLink === id));

  if (options.collect && !visitedStations.has(id)) {
    visitedStations.add(id);
  }

  if (mobilePanelQuery.matches) {
    setPanelCollapsed(true);
  }
}

function actionMarkup(actions) {
  return actions.map((action) => {
    const classes = action.secondary ? "secondary" : "";
    return `<a class="${classes}" href="${action.href}" target="_blank" rel="noopener">${action.label}</a>`;
  }).join("");
}

function updateDriving(dt) {
  const accel = keys.forward ? 17 : 0;
  const reverse = keys.backward ? 13 : 0;

  speed += accel * dt;
  speed -= reverse * dt;

  speed *= Math.pow(0.64, dt);
  speed = THREE.MathUtils.clamp(speed, -7.2, 15.5);

  const steering = (Number(keys.left) - Number(keys.right)) * Math.min(1, Math.abs(speed) / 8 + 0.34);
  car.group.rotation.y += steering * dt * 1.95 * Math.sign(speed || 1);

  const forward = new THREE.Vector3(Math.sin(car.group.rotation.y), 0, Math.cos(car.group.rotation.y));
  const nextPosition = car.group.position.clone().addScaledVector(forward, speed * dt);
  nextPosition.x = THREE.MathUtils.clamp(nextPosition.x, -worldLimit, worldLimit);
  nextPosition.z = THREE.MathUtils.clamp(nextPosition.z, -worldLimit, worldLimit);

  const collided = resolveCollisions(nextPosition);
  car.group.position.copy(nextPosition);
  car.group.position.y = THREE.MathUtils.lerp(car.group.position.y, getDriveHeight(car.group.position), 0.22);

  if (collided && Math.abs(speed) > 0.2) {
    speed *= -0.18;
  }

  car.wheels.forEach((wheel) => {
    wheel.rotation.x += speed * dt * 2.2;
  });

}

function updateCamera() {
  const rotation = car.group.rotation.y;
  const behind = new THREE.Vector3(-Math.sin(rotation) * 15, 8.4, -Math.cos(rotation) * 15);
  const side = new THREE.Vector3(Math.cos(rotation) * 3.1, 0, -Math.sin(rotation) * 3.1);
  const desired = car.group.position.clone().add(behind).add(side);
  camera.position.lerp(desired, 0.068);
  camera.lookAt(car.group.position.x, car.group.position.y + 1, car.group.position.z);
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
    object.beacon.scale.lerp(new THREE.Vector3(distance < 9 ? 1.16 : 1, distance < 9 ? 1.16 : 1, distance < 9 ? 1.16 : 1), 0.08);
    object.light.intensity = visitedStations.has(id) ? 3.4 : 2.1;
    object.label.material.opacity = THREE.MathUtils.clamp((distance - 8) / 8, 0, 1);
    object.label.visible = object.label.material.opacity > 0.02;
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
  camera.fov = cameraFov();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

function syncPanelMode() {
  setPanelCollapsed(mobilePanelQuery.matches);
}

function setPanelCollapsed(collapsed) {
  contentPanel.classList.toggle("is-collapsed", collapsed);
  panelToggle.setAttribute("aria-expanded", String(!collapsed));
  panelToggle.setAttribute("aria-label", collapsed ? "Show info panel" : "Hide info panel");
  panelToggle.setAttribute("title", collapsed ? "Show info panel" : "Hide info panel");
}

function cameraFov() {
  return window.innerWidth < 680 ? 66 : 62;
}

function getDriveHeight(position) {
  const platformY = stationPlatformTop + carBaseHeight;

  return Object.values(stationData).reduce((height, station) => {
    const distance = flatDistance(position, station.position);

    if (distance < stationPlatformRadius) {
      return Math.max(height, platformY);
    }

    if (distance < stationPlatformRadius + 1.8) {
      const ramp = (distance - stationPlatformRadius) / 1.8;
      return Math.max(height, THREE.MathUtils.lerp(platformY, carBaseHeight, ramp));
    }

    return height;
  }, carBaseHeight);
}

function addCircleCollider(x, z, radius) {
  collisionBodies.push({ type: "circle", x, z, radius });
}

function addBoxCollider(x, z, width, depth, rotation = 0) {
  collisionBodies.push({
    type: "box",
    x,
    z,
    halfWidth: width / 2,
    halfDepth: depth / 2,
    rotation,
    cos: Math.cos(rotation),
    sin: Math.sin(rotation)
  });
}

function resolveCollisions(position) {
  let collided = false;

  for (let pass = 0; pass < 3; pass += 1) {
    let passCollided = false;

    collisionBodies.forEach((body) => {
      const push = body.type === "circle"
        ? getCirclePush(position, body)
        : getBoxPush(position, body);

      if (push) {
        position.x += push.x;
        position.z += push.z;
        position.x = THREE.MathUtils.clamp(position.x, -worldLimit, worldLimit);
        position.z = THREE.MathUtils.clamp(position.z, -worldLimit, worldLimit);
        collided = true;
        passCollided = true;
      }
    });

    if (!passCollided) {
      break;
    }
  }

  return collided;
}

function getCirclePush(position, body) {
  const minDistance = body.radius + carColliderRadius;
  const dx = position.x - body.x;
  const dz = position.z - body.z;
  const distanceSq = dx * dx + dz * dz;

  if (distanceSq >= minDistance * minDistance) {
    return null;
  }

  const distance = Math.sqrt(distanceSq);
  if (distance === 0) {
    return { x: minDistance, z: 0 };
  }

  const pushDistance = minDistance - distance;
  return {
    x: (dx / distance) * pushDistance,
    z: (dz / distance) * pushDistance
  };
}

function getBoxPush(position, body) {
  const dx = position.x - body.x;
  const dz = position.z - body.z;
  const localX = dx * body.cos - dz * body.sin;
  const localZ = dx * body.sin + dz * body.cos;
  const closestX = THREE.MathUtils.clamp(localX, -body.halfWidth, body.halfWidth);
  const closestZ = THREE.MathUtils.clamp(localZ, -body.halfDepth, body.halfDepth);
  let pushX = localX - closestX;
  let pushZ = localZ - closestZ;
  const distanceSq = pushX * pushX + pushZ * pushZ;

  if (distanceSq > carColliderRadius * carColliderRadius) {
    return null;
  }

  if (distanceSq === 0) {
    const overlapX = body.halfWidth + carColliderRadius - Math.abs(localX);
    const overlapZ = body.halfDepth + carColliderRadius - Math.abs(localZ);

    if (overlapX < overlapZ) {
      pushX = (localX < 0 ? -1 : 1) * overlapX;
      pushZ = 0;
    } else {
      pushX = 0;
      pushZ = (localZ < 0 ? -1 : 1) * overlapZ;
    }
  } else {
    const distance = Math.sqrt(distanceSq);
    const pushDistance = carColliderRadius - distance;
    pushX = (pushX / distance) * pushDistance;
    pushZ = (pushZ / distance) * pushDistance;
  }

  return {
    x: pushX * body.cos + pushZ * body.sin,
    z: -pushX * body.sin + pushZ * body.cos
  };
}

function pointOnRoad(start, end, t) {
  return {
    x: THREE.MathUtils.lerp(start.x, end.x, t),
    z: THREE.MathUtils.lerp(start.z, end.z, t)
  };
}

function pointBesideRoad(start, end, t, side, offset) {
  const point = pointOnRoad(start, end, t);
  const dx = end.x - start.x;
  const dz = end.z - start.z;
  const length = Math.hypot(dx, dz) || 1;
  const normalX = -dz / length;
  const normalZ = dx / length;

  return {
    x: THREE.MathUtils.clamp(point.x + normalX * side * offset, -worldLimit, worldLimit),
    z: THREE.MathUtils.clamp(point.z + normalZ * side * offset, -worldLimit, worldLimit)
  };
}

function moveBesideRoad(x, z, clearance) {
  const nearest = nearestRoadInfo(x, z);
  if (!nearest || nearest.distance >= nearest.segment.halfWidth + clearance) {
    return {
      x: THREE.MathUtils.clamp(x, -worldLimit, worldLimit),
      z: THREE.MathUtils.clamp(z, -worldLimit, worldLimit)
    };
  }

  let normalX = x - nearest.closestX;
  let normalZ = z - nearest.closestZ;

  if (nearest.distance < 0.001) {
    normalX = -nearest.directionZ;
    normalZ = nearest.directionX;
    if (x + z < 0) {
      normalX *= -1;
      normalZ *= -1;
    }
  } else {
    normalX /= nearest.distance;
    normalZ /= nearest.distance;
  }

  const distance = nearest.segment.halfWidth + clearance;
  return {
    x: THREE.MathUtils.clamp(nearest.closestX + normalX * distance, -worldLimit, worldLimit),
    z: THREE.MathUtils.clamp(nearest.closestZ + normalZ * distance, -worldLimit, worldLimit)
  };
}

function isNearRoad(x, z, clearance = 0) {
  const nearest = nearestRoadInfo(x, z);
  return Boolean(nearest && nearest.distance < nearest.segment.halfWidth + clearance);
}

function nearestRoadInfo(x, z) {
  return roadSegments.reduce((nearest, segment) => {
    const info = roadDistanceInfo(x, z, segment);
    if (!nearest || info.distance < nearest.distance) {
      return info;
    }
    return nearest;
  }, null);
}

function roadDistanceInfo(x, z, segment) {
  const dx = segment.end.x - segment.start.x;
  const dz = segment.end.z - segment.start.z;
  const lengthSq = dx * dx + dz * dz;
  const t = lengthSq === 0
    ? 0
    : THREE.MathUtils.clamp(((x - segment.start.x) * dx + (z - segment.start.z) * dz) / lengthSq, 0, 1);
  const closestX = segment.start.x + dx * t;
  const closestZ = segment.start.z + dz * t;
  const distanceX = x - closestX;
  const distanceZ = z - closestZ;
  const length = Math.sqrt(lengthSq) || 1;

  return {
    segment,
    closestX,
    closestZ,
    directionX: dx / length,
    directionZ: dz / length,
    distance: Math.hypot(distanceX, distanceZ)
  };
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
