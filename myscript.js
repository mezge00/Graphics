import threee.js
<script>
var scene=new THREE.Scene();
var camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,5000);
var renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
//1............Home page............
 
//2...........History...............


//3..........Achivements..........


//4..........Future plans/Interests........

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
animate();

</script>