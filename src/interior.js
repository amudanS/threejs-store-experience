
const generateColor = (Geometry) => {
    const color = [];
    for (let i = 0; i < Geometry.attributes.position.count; i++) {
      color.push(Math.random(),Math.random(), Math.random());  
    }
    return color;
}

// const table2Geometry = new THREE.BoxGeometry(6, 2.5, 30);
// const table2Material = new THREE.MeshBasicMaterial({ color: 0x964B00 });
// const tabel2 = new THREE.Mesh(table2Geometry, table2Material);
// tabel2.position.set(-2,3,-10)
// scene.add(tabel2)

// const sideWallGeometry = new THREE.BoxGeometry(1, 15, 50);
// const colors =  generateColors(sideWallGeometry);
// sideWallGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors,3));
// const SideWallMaterial = new THREE.MeshBasicMaterial({
//   vertexColors: true,
// });
// const sideWall = new THREE.Mesh(sideWallGeometry, SideWallMaterial);
// sideWall.position.set(-14,7.5,0);
// scene.add(sideWall);

const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 2.5, y + 2.5, x + 2, y, x, y );
heartShape.bezierCurveTo( x - 3, y, x - 3, y + 3.5,x - 3, y + 3.5);
heartShape.bezierCurveTo( x - 3, y + 5.5, x - 1.5, y + 7.5, x + 2.5, y + 9.5);
heartShape.bezierCurveTo( x + 6, y + 7.9, x + 8, y + 5.5, x + 8, y + 3.5);
heartShape.bezierCurveTo( x + 8, y + 3.5, x + 8, y, x + 5, y );
heartShape.bezierCurveTo( x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5 );

const geometry = new THREE.ShapeGeometry( heartShape );
const heartColor =  generateColor(geometry);
geometry.setAttribute('color', new THREE.Float32BufferAttribute(heartColor ,3));
const material = new THREE.MeshBasicMaterial( { vertexColors: true } );
const mesh = new THREE.Mesh( geometry, material ) ;

mesh.rotation.z = Math.PI;

mesh.position.set(3,10,-24)

scene.add( mesh );