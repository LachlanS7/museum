
var data = window.location.search.substring(1);
data = JSON.parse(decodeURIComponent(data))
console.log(data)


//var title = document.getElementById("title")
//var description = document.getElementById("description")
//description.innerHTML = data.itemDescription
//title.innerHTML = data.itemLabel
var img = document.getElementById("image")
var loading = document.getElementById("loadingProgress")
console.log(loading)
img.src = data.pic
var stl_viewer = new StlViewer(document.getElementById("stl_cont"), {models: [{id:0, filename: `${data.model}`}], 
	canvas_width: "8cm", 
	all_loaded_callback: ()=>{ loading.style.display = 'None' },
	loading_progress_callback: (status,session)=>{loading.innerText = status[0].loaded / status[0].total}
}); 

function switchImage() {
	var oldIndex = 0;
	var images = document.getElementById("images")
	for (i = 0; i < images.children.length; i++) {
		if (images.children[i].style.display == "block") {
			oldIndex = i
		}
		images.children[i].style.display = "none"
	}

	images.children[(oldIndex + 1) % images.children.length].style.display = "block" 
}