/**
 * @namespace $.ui
 */


var myCamera, scene, renderer;
var geometry, material, loader, spotlight, sceneLoader;
var speed = 10;
var documentInited = false;

(function($){


    $(document).ready(function(){

        $(document).click(function(){
            initialize(function(){
                animate();
            });

        });

        function pointerLockChange(event){
            var renderer = getRenderer();
            if (document.pointerLockElement === renderer.domElement ||
                document.mozPointerLockElement === renderer.domElement ||
                document.webkitPointerLockElement === renderer.domElement) {
                // Pointer was just locked
                // Enable the mousemove listener
                //document.addEventListener("mousemove", pointerMove, false);

            } else {
                // Pointer was just unlocked
                // Disable the mousemove listener
                //document.removeEventListener("mousemove", pointerMove, false);

            }
            console.log('pointer lock change', event);
        }

        function pointerLockError(event){
            console.log('pointer lock error', event);
        }

        function pointerMove(event){
            var  deltaX = ((event.webkitMovementX)/ window.innerWidth) * 2*Math.PI;
            var  deltaY = ((event.webkitMovementY)/ window.innerHeight) * 2*Math.PI;

            var camera = getCamera();
            camera.rotateY(-deltaX);
            camera.rotateX(deltaY);
        }

        function updateScene(geometry, materials){
            var material = new THREE.MeshFaceMaterial( materials );
            var model = new THREE.Mesh( geometry, material );
            //model.scale.set(1,1,1);
            getScene().add(model);
        }

        function getScene(){
            if (!scene){
                scene = new THREE.Scene();
                var ambientLight = new THREE.AmbientLight(0x111111);
                scene.add(ambientLight);
            }
            return scene;
        }

        function getSpotlight(){
            if (!spotlight){
                spotlight = new THREE.PointLight( 0xFFFFDD );
                spotlight.position.set( -15, 10, 15 );
                getScene().add( spotlight );
            }
            return spotlight;
        }

        function getCamera(){
            if (!myCamera) {
                myCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
                myCamera.position.z = 1000;
            }
            return myCamera;
        }

        function getRenderer(){
            if (!renderer){
                renderer = new THREE.WebGLRenderer();
                renderer.setSize( window.innerWidth, window.innerHeight );
                renderer.domElement.requestFullscreen = renderer.domElement.requestFullscreen    ||
                    renderer.domElement.mozRequestFullscreen ||
                    renderer.domElement.mozRequestFullScreen || // Older API upper case 'S'.
                    renderer.domElement.webkitRequestFullscreen;

                renderer.domElement.requestPointerLock = renderer.domElement.requestPointerLock ||
                    renderer.domElement.mozRequestPointerLock ||
                    renderer.domElement.webkitRequestPointerLock;
            }
            return renderer;
        }

        function getModelLoader(){
            if (!loader){
                loader = new THREE.JSONLoader(true);
            }

            return loader;
        }

        function getSceneLoader(){
            if (!sceneLoader){
                sceneLoader = new THREE.SceneLoader();
            }

            return sceneLoader;
        }

        function getDocument(){
            if (!documentInited){
                var myCamera = getCamera();

                document.addEventListener('pointerlockchange', pointerLockChange, false);
                document.addEventListener('mozpointerlockchange', pointerLockChange, false);
                document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

                document.addEventListener("mousemove", pointerMove, false);
                document.addEventListener('pointerlockerror', pointerLockError, false);
                document.addEventListener('mozpointerlockerror', pointerLockError, false);
                document.addEventListener('webkitpointerlockerror', pointerLockError, false);

                $(document).keydown(function(event){
                    event.preventDefault();
                    if(event.which == $.ui.keyCode.UPPER_W || event.which == $.ui.keyCode.LOWER_W){
                        myCamera.translateZ(-speed);
                    } else if(event.which == $.ui.keyCode.UPPER_A || event.which == $.ui.keyCode.LOWER_A){
                        myCamera.translateX(-speed);
                    } else if(event.which == $.ui.keyCode.UPPER_S || event.which == $.ui.keyCode.LOWER_S){
                        myCamera.translateZ(speed);
                    } else if(event.which == $.ui.keyCode.UPPER_D || event.which == $.ui.keyCode.LOWER_D){
                        myCamera.translateX(speed);
                    }
                });

                documentInited = true;
            }
            return document;
        }

        function setScene(newScene){
            console.log(newScene);
            scene = newScene;
        }

        function initialize(callback) {
            var loader = getSceneLoader();
            var renderer = getRenderer();
            var myDocument = getDocument();

            loader.load("/js/model/demo/torus-knot.json", function(myScene){
                console.log(myScene);
                setScene(myScene);
                myDocument.body.appendChild( renderer.domElement );

                var fullscreen = false;
                if (fullscreen){
                    renderer.domElement.requestFullscreen();
                    renderer.domElement.requestPointerLock();
                }

                callback();

            });



        }



        function animate() {

            // note: three.js includes requestAnimationFrame shim
            requestAnimationFrame( animate );

            //mesh.rotation.x += 0.01;
            //mesh.rotation.y += 0.01;

            renderer.render( getScene(), getCamera() );

        }
    });

})(jQuery);