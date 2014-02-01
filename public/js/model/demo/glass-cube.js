{

"metadata" :
{
	"formatVersion" : 3.2,
	"type"          : "scene",
	"sourceFile"    : "glass-cube.blend",
	"generatedBy"   : "Blender 2.65 Exporter",
	"objects"       : 3,
	"geometries"    : 2,
	"materials"     : 2,
	"textures"      : 0
},

"urlBaseType" : "relativeToHTML",


"objects" :
{
	"Plane" : {
		"geometry"  : "geo_Plane",
		"groups"    : [  ],
		"material"  : "ground",
		"position"  : [ 0, 0, 0 ],
		"rotation"  : [ -1.5708, 0, 0 ],
		"quaternion": [ -0.707107, 0, 0, 0.707107 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Cube" : {
		"geometry"  : "geo_Cube.001",
		"groups"    : [  ],
		"material"  : "Material",
		"position"  : [ 0, 1, 3.42285e-08 ],
		"rotation"  : [ -1.5708, -3.86457e-08, 0.820957 ],
		"quaternion": [ -0.648367, 0.28217, 0.28217, 0.648367 ],
		"scale"     : [ 1, 1, 1 ],
		"visible"       : true,
		"castShadow"    : false,
		"receiveShadow" : false,
		"doubleSided"   : false
	},

	"Sun.001" : {
		"type"       : "AmbientLight",
		"position"   : [ 0, 0, 0 ],
		"rotation"   : [ 1.16301, 0.0208984, 0.966424 ],
		"color"      : 16777215,
		"distance"   : 25.000,
		"intensity"  : 1.000
	}
},


"geometries" :
{
	"geo_Plane" : {
		"type" : "embedded",
		"id"  : "emb_Plane"
	},

	"geo_Cube.001" : {
		"type" : "embedded",
		"id"  : "emb_Cube.001"
	}
},


"materials" :
{
	"ground" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 13421772, "ambient": 13421772, "opacity": 1, "blending": "NormalBlending" }
	},

	"Material" : {
		"type": "MeshLambertMaterial",
		"parameters": { "color": 10724259, "ambient": 10724259, "opacity": 1, "blending": "NormalBlending" }
	}
},


"embeds" :
{
"emb_Plane": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "ground",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.800000011920929, 0.800000011920929, 0.800000011920929],
		"colorDiffuse" : [0.800000011920929, 0.800000011920929, 0.800000011920929],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [10,-10,0,-10,-10,0,10,10,0,-10,10,0],

	"morphTargets" : [],

	"normals" : [0,0,1],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,1,0,2,3,0,0,0,0,0],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
},

"emb_Cube.001": {	"scale" : 1.000000,

	"materials" : [	{
		"DbgColor" : 15658734,
		"DbgIndex" : 0,
		"DbgName" : "Material",
		"blending" : "NormalBlending",
		"colorAmbient" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
		"colorSpecular" : [0.5, 0.5, 0.5],
		"depthTest" : true,
		"depthWrite" : true,
		"shading" : "Lambert",
		"specularCoef" : 50,
		"transparency" : 1.0,
		"transparent" : false,
		"vertexColors" : false
	}],

	"vertices" : [1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,0.999999,1,0.999999,-1,1,-1,-1,1,-1,1,1],

	"morphTargets" : [],

	"normals" : [0.577349,0.577349,-0.577349,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,0.577349,-0.577349,0.577349,0.577349,0.577349,-0.577349,0.577349,0.577349,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349],

	"colors" : [],

	"uvs" : [],

	"faces" : [35,0,1,2,3,0,0,1,2,3,35,4,7,6,5,0,4,5,6,7,35,0,4,5,1,0,0,4,7,1,35,1,5,6,2,0,1,7,6,2,35,2,6,7,3,0,2,6,5,3,35,4,0,3,7,0,4,0,3,5],

	"bones" : [],

	"skinIndices" : [],

	"skinWeights" : [],

	"animations" : []
}
},


"transform" :
{
	"position"  : [ 0, 0, 0 ],
	"rotation"  : [ 0, 0, 0 ],
	"scale"     : [ 1, 1, 1 ]
},

"defaults" :
{
	"bgcolor" : [ 0, 0, 0 ],
	"bgalpha" : 1.000000,
	"camera"  : ""
}

}
