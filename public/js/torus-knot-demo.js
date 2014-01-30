/**
 * @namespace $.ui
 */


var playerCamera, scene, renderer, geometry, material, loader, jsonObjectLoader, clock,
    spotlight, threeJSEditorSceneExportObjectLoader, playerControls, startTime, lastStepTime,
    worldInitialized = false;

(function ($) {
    function pointerLockChange(event) {
        var renderer = getRenderer();
        if (document.pointerLockElement === renderer.domElement ||
            document.mozPointerLockElement === renderer.domElement ||
            document.webkitPointerLockElement === renderer.domElement
            ) {
            getPlayerControls().enabled = true;
            $('#splash-screen').hide();
        } else {
            $('#splash-screen').show();
            getPlayerControls().enabled = false;
        }
    }

    function pointerLockError(event) {
        console.log('pointer lock error', event);
    }

    function getClock(){
        if (!clock){
            clock = new THREE.Clock();
        }
        return clock;
    }



    function getScene() {
        if (!scene) {
            scene = new THREE.Scene();
        }
        return scene;
    }

    function getPlayerCamera() {
        if (!playerCamera) {
            playerCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        }
        return playerCamera;
    }

    function getRenderer() {
        if (!renderer) {
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.domElement.requestFullscreen = renderer.domElement.requestFullscreen ||
                renderer.domElement.mozRequestFullscreen ||
                renderer.domElement.mozRequestFullScreen || // Older API upper case 'S'.
                renderer.domElement.webkitRequestFullscreen;

            renderer.domElement.requestPointerLock = renderer.domElement.requestPointerLock ||
                renderer.domElement.mozRequestPointerLock ||
                renderer.domElement.webkitRequestPointerLock;
        }
        return renderer;
    }


    /**
     * Must use the object loader to load scenes exported by the three.js editor see links below
     *
     * @link http://threejs.org/editor/
     * @link https://github.com/mrdoob/three.js/issues/4068
     * @returns {*}
     */
    function getThreeJSEditorSceneExportObjectLoader() {
        if (!threeJSEditorSceneExportObjectLoader) {
            threeJSEditorSceneExportObjectLoader = new THREE.ObjectLoader();
        }

        return threeJSEditorSceneExportObjectLoader;
    }

    function getJSONObjectLoader() {
        if (!jsonObjectLoader){
            jsonObjectLoader = new THREE.JSONLoader();
        }
        return jsonObjectLoader;
    }

    function getDocument() {
        return document;
    }

    function getWindow(){
        return window;
    }

    function setScene(newScene) {
        scene = newScene;
        //bad practice... move this during class factoring
        scene.fog = new THREE.Fog( 0xffffff, 0, 750 );
    }

    function getPlayerControls(){
        if (!playerControls){
            playerControls = new THREE.PointerLockControls( getPlayerCamera());
            playerControls.getObject().rotation.y = (2 * Math.PI) * (70/360);//70 degrees (translated to radians)
        }

        return playerControls;
    }

    function initializeWorld(){
        if (!worldInitialized) {
            getWindow().addEventListener('resize', function(){
                getPlayerCamera().aspect = window.innerWidth / window.innerHeight;
                getPlayerCamera().updateProjectionMatrix();

                getRenderer().setSize( window.innerWidth, window.innerHeight );

            }, false);

            getDocument().addEventListener('pointerlockchange', pointerLockChange, false);
            getDocument().addEventListener('mozpointerlockchange', pointerLockChange, false);
            getDocument().addEventListener('webkitpointerlockchange', pointerLockChange, false);

            getDocument().addEventListener('pointerlockerror', pointerLockError, false);
            getDocument().addEventListener('mozpointerlockerror', pointerLockError, false);
            getDocument().addEventListener('webkitpointerlockerror', pointerLockError, false);

            worldInitialized = true;
        }

    }

    function initialize(onInitialize) {
        initializeWorld();

        $('#splash-screen').click(function(){
            getRenderer().domElement.requestFullscreen();
            getRenderer().domElement.requestPointerLock();
        });


        getThreeJSEditorSceneExportObjectLoader().load("/js/model/demo/torus-knot.json", function (loadedScene) {

            setScene(loadedScene);

            loadedScene.add( getPlayerControls().getObject() );

            getDocument().body.appendChild(getRenderer().domElement);


            getJSONObjectLoader().load("/js/model/demo/mydroid-cube.json", function(loadedObject) {
                getScene().add(loadedObject);
                onInitialize();
            }, '/img/textures');


        });




    }

    function start() {
        lastStepTime = startTime = Date.now();
        updateScreen();
    }

    function updateScreen(){
        var thisStepTime = Date.now();
        var stepTimeDelta = thisStepTime - lastStepTime;
        lastStepTime = thisStepTime;

        getPlayerControls().update(stepTimeDelta);
        getRenderer().render(getScene(), getPlayerCamera());
        requestAnimationFrame(updateScreen);

    }

    $(document).ready(function () {
        initialize(function () {
            start();
        });
    });

})(jQuery);
