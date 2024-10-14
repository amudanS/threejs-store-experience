const ringGeometry = new THREE.RingGeometry( 1, 3, 32 ); 
const ringMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const ring = new THREE.Mesh( ringGeometry, ringMaterial ); 
ring.position.set(5,10,25)
scene.add( ring );

const ring1Geometry = new THREE.RingGeometry( 1, 3, 32 ); 
const ring1Material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const ring1 = new THREE.Mesh( ring1Geometry, ring1Material ); 
ring1.position.set(-5,10,25)
scene.add( ring1 );

const planeGeometry = new THREE.BoxGeometry( 1, 0.5, 48 ); 
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x272727, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.position.set(14,15.5,1)
scene.add( plane );


const tableGeometry = new THREE.BoxGeometry( 10, 1, 5); 
const tableMaterial = new THREE.MeshBasicMaterial( {color: 0x272727, side: THREE.DoubleSide} );
const table = new THREE.Mesh( tableGeometry, tableMaterial );
table.position.set(8,5,1)
scene.add( table );

const cylindergeometry = new THREE.CylinderGeometry( 0.2, 0.2, 5, 32 ); 
const cylindermaterial = new THREE.MeshBasicMaterial( {color: 0x272727} ); 
const cylinder = new THREE.Mesh( cylindergeometry, cylindermaterial ); 
cylinder.position.set(5,2,1)
scene.add( cylinder );

const cylinder1geometry = new THREE.CylinderGeometry( 0.2, 0.2, 5, 32 ); 
const cylinder1material = new THREE.MeshBasicMaterial( {color: 0x272727} ); 
const cylinder1 = new THREE.Mesh( cylinder1geometry, cylinder1material ); 
cylinder1.position.set(12,2,1)
scene.add( cylinder1 );

const seatgeometry = new THREE.BoxGeometry( 10, 3.1, 3);
const seatmaterial = new THREE.MeshBasicMaterial( {color: 0x272727} ); 
const seat= new THREE.Mesh( seatgeometry, seatmaterial ); 
seat.position.set(8,2,6)
scene.add( seat );

const seat2geometry = new THREE.BoxGeometry( 10, 3.1, 3);
const seat2material = new THREE.MeshBasicMaterial( {color: 0x272727} ); 
const seat2= new THREE.Mesh( seat2geometry, seat2material ); 
seat2.position.set(8,2,-5)
scene.add( seat2 );

const seat3geometry = new THREE.BoxGeometry(5, 0.5, 10);
const seat3material = new THREE.MeshBasicMaterial( {color: 0x272727} ); 
const seat3= new THREE.Mesh( seat3geometry, seat3material ); 
seat3.position.set(-7,5,19.5)
scene.add( seat3 );

// const seat4geometry = new THREE.BoxGeometry(5, 0.5, 10);
// const seat4material = new THREE.MeshBasicMaterial( {color: 0x272727} ); 
// const seat4 = new THREE.Mesh( seat4geometry, seat4material ); 
// seat3.position.set(-7,5,19.5)
// scene.add( seat3 );