const generateColors = (Geometry) => {
    const colors = [];
    for (let i = 0; i < Geometry.attributes.position.count; i++) {
      colors.push(Math.random(),500, 200);  
    }
    return colors;
}
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const baseGeometry = new THREE.BoxGeometry(29, 1, 50);
const baseMaterial = new THREE.MeshBasicMaterial({ color: 0xa8968f });
const base = new THREE.Mesh(baseGeometry, baseMaterial);

const sideWallGeometry = new THREE.BoxGeometry(1, 15, 50);
const colors =  generateColors(sideWallGeometry);
sideWallGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors,3));
const SideWallMaterial = new THREE.MeshBasicMaterial({
  vertexColors: true,
});
const sideWall = new THREE.Mesh(sideWallGeometry, SideWallMaterial);
sideWall.position.set(-14,7.5,0);
scene.add(sideWall);


const sideWall1Geometry = new THREE.BoxGeometry(1, 15, 50);
const color =  generateColors(sideWallGeometry);
sideWall1Geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors,3));
const SideWall1Material = new THREE.MeshBasicMaterial({
    vertexColors: true,
  });
const sideWall1 = new THREE.Mesh(sideWall1Geometry, SideWall1Material);
sideWall1.position.set(14,7.5,0)
scene.add(sideWall1)

const backWallGeometry = new THREE.BoxGeometry(27, 15.2, 1);
const backWallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const backWALL = new THREE.Mesh(backWallGeometry, backWallMaterial);
backWALL.position.set(0,7.3,-25)
scene.add(backWALL)

const frontWallGeometry = new THREE.BoxGeometry(10, 15.2, 1);
const frontWallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const frontWall = new THREE.Mesh(frontWallGeometry, frontWallMaterial);
frontWall.position.set(9,7.3,25)
scene.add(frontWall)

const frontWall2Geometry = new THREE.BoxGeometry(10, 15.2, 1);
const frontWall2Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const frontWall2 = new THREE.Mesh(frontWall2Geometry, frontWall2Material);
frontWall2.position.set(-9,7.3,25)
scene.add(frontWall2)

const frontWall3Geometry = new THREE.BoxGeometry(8, 5, 1);
const frontWall3Material = new THREE.MeshBasicMaterial({ color: 0xffffff });
const frontWall3 = new THREE.Mesh(frontWall3Geometry, frontWall3Material);
frontWall3.position.set(-0,12.4,25)
scene.add(frontWall3)

const roofGeometry = new THREE.BoxGeometry(5,5,0.1)
const roofMaterial = new THREE.MeshBasicMaterial({ color: 0xc603fc });
const roof = new THREE.Mesh(roofGeometry, roofMaterial);

const Cgeometry = new THREE.ConeGeometry( 3, 5, 32 ); 
const Cmaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(Cgeometry, Cmaterial ); 

cone.position.set(0,6,0)
//scene.add( cone );

roof.position.set(0, 0, 2.5)



scene.add(base);


camera.position.z = 70;
camera.position.x = 30;
camera.position.y =30;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const floader = new THREE.FontLoader();

floader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('P R E S I D I O', {
        font: font,
        size: 0.7,           
        height: 0.2,          
        curveSegments: 12,   
        bevelEnabled: true,   
        bevelThickness: 0.03, 
        bevelSize: 0.02,     
        bevelSegments: 5      
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x428bca}); 
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Position the text above the cube
    textMesh.position.set(-2.5,11,26); // Adjust x, y, z position
   // backWALL.position.set(0,7.3,-25)

    // Add the text to the scene
   scene.add(textMesh);
});
floader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry('Do something you love everyday!', {
        font: font,
        size: 0.7,           
        height: 0.2,          
        curveSegments: 12,   
        bevelEnabled: true,   
        bevelThickness: 0.03, 
        bevelSize: 0.02,     
        bevelSegments: 5   
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x428bca }); 
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Position the text above the cube
    textMesh.position.set(-6, 11, -24); // Adjust x, y, z position
    //backWALL.position.set(0,7,-15.5)

    // Add the text to the scene
   scene.add(textMesh);
});


// Variables for tracking mouse movement
let mouseX = 0;
let mouseY = 0;

// Add event listener for mouse movement
document.addEventListener('mousemove', (event) => {
  // Normalize mouseX and mouseY to range [-1, 1]
//   mouseX = (event.clientX / window.innerWidth);
//   mouseY = -(event.clientY / window.innerHeight)    ;
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update cube rotation based on mouse movement
//   cube.rotation.x += mouseY * 0.05;
//   cube.rotation.y += mouseX * 0.05;

  controls.update(); // Enable damping in OrbitControls
  renderer.render(scene, camera);
}

animate();




