var THREEUtils = THREEUtils || {};
THREEUtils.SkyBox = (function () {
	function skyBox() {
		var skyBoxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
        var skyBoxMaterials = [   	new THREE.MeshBasicMaterial( {
							        	map : new THREE.ImageUtils.loadTexture('images/SkyBox/left.jpg'), 
							        	side: THREE.BackSide
							        }),      
        							new THREE.MeshBasicMaterial( {
        								map : new THREE.ImageUtils.loadTexture('images/SkyBox/right.jpg'),
        								side: THREE.BackSide
        							}),      
        							new THREE.MeshBasicMaterial( {
        								map : new THREE.ImageUtils.loadTexture('images/SkyBox/top.jpg'), 
        								side: THREE.BackSide
        							}),      
        							new THREE.MeshBasicMaterial( {
        								map : new THREE.ImageUtils.loadTexture('images/SkyBox/bottom.jpg'),
        								side: THREE.BackSide
        							}),      
        							new THREE.MeshBasicMaterial( {
        								map : new THREE.ImageUtils.loadTexture('images/SkyBox/back.jpg'),
        								side: THREE.BackSide
        							} ),      
        							new THREE.MeshBasicMaterial( {
        								map : new THREE.ImageUtils.loadTexture('images/SkyBox/front.jpg'),
        								side: THREE.BackSide
        							} )];
        var skyBoxMaterial = new THREE.MeshFaceMaterial(skyBoxMaterials);
        //skyBoxMaterial.side = THREE.BackSide;
        var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
        skyBox.y = skyBoxGeometry.height/2;
		return mesh;
	};
	return {
		get : skyBox
	}
}());