console.log("Hello World!");
console.log(THREE)

// Crear un color rojo intenso (RGB: 1, 0, 0)
const colorRojo = new THREE.Color(1, 0, 0);

// Crear un color verde con menos intensidad (RGB: 0, 0.5, 0)
const colorVerde = new THREE.Color(0, 0.5, 0);

// Crear un color azul claro (RGB: 0.5, 0.5, 1)
const colorAzul = new THREE.Color(0.5, 0.5, 1);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: colorAzul , wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}

animate();