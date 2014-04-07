var THREEUtils = THREEUtils || {};
THREEUtils.ArrowHelper = function ( dir, origin, length, hex, width, headLength, headWidth ) {

		// dir is assumed to be normalized

		THREE.Object3D.call( this );

		if ( hex === undefined ) hex = 0xffff00;
		if ( length === undefined ) length = 1;
		if ( headLength === undefined ) headLength = 0.15 * length;
		if ( headWidth === undefined ) headWidth = 0.15 * headLength;
		if ( width === undefined) width = 1;
		this.position.set(0,0,0);

		var geometry = new THREE.CylinderGeometry( 1, 1, 1, 32,1 );
		var material = new THREE.MeshBasicMaterial( {color: hex} );
		this.line = new THREE.Mesh( geometry, material );
		this.line.position.y = geometry.length/2;
		this.line.matrixAutoUpdate = false;
		this.add( this.line );

		var coneGeometry = new THREE.CylinderGeometry( 0, 0.5, 1, 32, 1 );
		coneGeometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, - 0.5, 0 ) );

		this.cone = new THREE.Mesh( coneGeometry, new THREE.MeshBasicMaterial( { color: hex } ) );
		this.cone.matrixAutoUpdate = false;
		this.add( this.cone );

		this.setDirection( dir );
		this.setLength( length,width, headLength, headWidth );
	};
THREEUtils.ArrowHelper.prototype = Object.create( THREE.ArrowHelper.prototype );
THREEUtils.ArrowHelper.prototype.setLength = function ( length, width, headLength, headWidth ) {

	if ( headLength === undefined ) headLength = 0.15 * length;
	if ( headWidth === undefined ) headWidth = 0.15 * headLength;
	this.line.position.y = length/2;
	this.line.scale.set( width, length, width );
	this.line.updateMatrix();

	this.cone.scale.set( headWidth, headLength, headWidth );
	this.cone.position.y = length;
	this.cone.updateMatrix();

};
THREEUtils.AxisHelper = {};
THREEUtils.AxisHelper.XAxis  = function(length,width) {
	THREE.Object3D.call( this );
	this.position.set(0,0,0);
	var origin = new THREE.Vector3(0,0,0);
	var terminus  = new THREE.Vector3(length,0,0);
	var direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
	var arrow = new THREEUtils.ArrowHelper(direction, origin, length, 0xff0000,width);
	this.add(arrow);
	origin = new THREE.Vector3(0,0,0);
	terminus  = new THREE.Vector3(-length,0,0);
	direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
	arrow = new THREEUtils.ArrowHelper(direction, origin, length, 0xff0000,width);
	this.add(arrow);
}
THREEUtils.AxisHelper.XAxis.prototype = Object.create( THREE.Object3D.prototype );
THREEUtils.AxisHelper.YAxis  = function(length,width) {
	THREE.Object3D.call( this );
	this.position.set(0,0,0);
	var origin = new THREE.Vector3(0,0,0);
	var terminus  = new THREE.Vector3(0,length,0);
	var direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
	var arrow = new THREEUtils.ArrowHelper(direction, origin, length, 0x00ff00,width);
	this.add(arrow);
	origin = new THREE.Vector3(0,0,0);
	terminus  = new THREE.Vector3(0,-length,0);
	direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
	arrow = new THREEUtils.ArrowHelper(direction, origin, length, 0x00ff00,width);
	this.add(arrow);
}
THREEUtils.AxisHelper.YAxis.prototype = Object.create( THREE.Object3D.prototype );
THREEUtils.AxisHelper.ZAxis  = function(length,width) {
	THREE.Object3D.call( this );
	this.position.set(0,0,0);
	var origin = new THREE.Vector3(0,0,0);
	var terminus  = new THREE.Vector3(0,0,length);
	var direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
	var arrow = new THREEUtils.ArrowHelper(direction, origin, length, 0x0000ff,width);
	this.add(arrow);
	origin = new THREE.Vector3(0,0,0);
	terminus  = new THREE.Vector3(0,0,-length);
	direction = new THREE.Vector3().subVectors(terminus, origin).normalize();
	arrow = new THREEUtils.ArrowHelper(direction, origin, length, 0x0000ff,width);
	this.add(arrow);
}
THREEUtils.AxisHelper.ZAxis.prototype = Object.create( THREE.Object3D.prototype );
THREEUtils.AxisHelper.axes = function(length,width) {
	THREE.Object3D.call( this );
	this.position.set(0,0,0);
	var x = new THREEUtils.AxisHelper.XAxis(length,width);
	var y = new THREEUtils.AxisHelper.YAxis(length,width);
	var z = new THREEUtils.AxisHelper.ZAxis(length,width);
	this.add(x);
	this.add(y);
	this.add(z);
}
THREEUtils.AxisHelper.axes.prototype = Object.create( THREE.Object3D.prototype );
	