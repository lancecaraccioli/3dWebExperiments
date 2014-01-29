/**
 * @namespace $.ui
 */


var camera, scene, renderer;
var geometry, material, mesh;
var speed = 10;
(function($){


    $(document).ready(function(){

        $(document).click(function(){
            initFullScreen();
        });

        function pointerLockChange(event){
            if (document.pointerLockElement === renderer.domElement ||
                document.mozPointerLockElement === renderer.domElement ||
                document.webkitPointerLockElement === renderer.domElement) {
                // Pointer was just locked
                // Enable the mousemove listener
                document.addEventListener("mousemove", pointerMove, false);
                animate();
            } else {
                // Pointer was just unlocked
                // Disable the mousemove listener
                document.removeEventListener("mousemove", pointerMove, false);

            }
            console.log('pointer lock change', event);
        }

        function pointerLockError(event){
            console.log('pointer lock error', event);
        }

        function pointerMove(event){
            var  deltaX = ((event.webkitMovementX)/ window.innerWidth) * 2*Math.PI;
            var  deltaY = ((event.webkitMovementY)/ window.innerHeight) * 2*Math.PI;

            camera.rotateY(-deltaX);
            camera.rotateX(deltaY);
        }


        function initFullScreen() {

            //rotating box
            geometry = new THREE.CubeGeometry( 200, 200, 200 );
            material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
            mesh = new THREE.Mesh( geometry, material );

            var walls = new THREE.CubeGeometry(4000, 4000, 4000);
            var paint = new THREE.MeshFaceMaterial({color:0x00ff00, wireframe:true});
            var room = new THREE.Mesh(walls, paint);

            //renderer
            renderer = new THREE.CanvasRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );

            //camera
            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

            camera.position.z = 1000;


            //scene
            scene = new THREE.Scene();
            scene.add( mesh );
            scene.add(room);

            document.body.appendChild( renderer.domElement );

            document.addEventListener('pointerlockchange', pointerLockChange, false);
            document.addEventListener('mozpointerlockchange', pointerLockChange, false);
            document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

            renderer.domElement.requestFullscreen = renderer.domElement.requestFullscreen    ||
                renderer.domElement.mozRequestFullscreen ||
                renderer.domElement.mozRequestFullScreen || // Older API upper case 'S'.
                renderer.domElement.webkitRequestFullscreen;
            renderer.domElement.requestFullscreen();

            renderer.domElement.requestPointerLock = renderer.domElement.requestPointerLock ||
                renderer.domElement.mozRequestPointerLock ||
                renderer.domElement.webkitRequestPointerLock;


            document.addEventListener("mousemove", pointerMove, false);
            document.addEventListener('pointerlockerror', pointerLockError, false);
            document.addEventListener('mozpointerlockerror', pointerLockError, false);
            document.addEventListener('webkitpointerlockerror', pointerLockError, false);

            renderer.domElement.requestPointerLock();

            $(document).keydown(function(event){
                event.preventDefault();
                if(event.which == $.ui.keyCode.UPPER_W || event.which == $.ui.keyCode.LOWER_W){
                    camera.translateZ(-speed);
                } else if(event.which == $.ui.keyCode.UPPER_A || event.which == $.ui.keyCode.LOWER_A){
                    camera.translateX(-speed);
                } else if(event.which == $.ui.keyCode.UPPER_S || event.which == $.ui.keyCode.LOWER_S){
                    camera.translateZ(speed);
                } else if(event.which == $.ui.keyCode.UPPER_D || event.which == $.ui.keyCode.LOWER_D){
                    camera.translateX(speed);
                }
            });

        }



        function animate() {

            // note: three.js includes requestAnimationFrame shim
            requestAnimationFrame( animate );

            //mesh.rotation.x += 0.01;
            //mesh.rotation.y += 0.01;

            renderer.render( scene, camera );

        }
    });

})(jQuery);
