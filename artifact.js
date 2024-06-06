
var data = window.location.search.substring(1);
data = JSON.parse(decodeURIComponent(data))
console.log(data)


//var title = document.getElementById("title")
//var description = document.getElementById("description")
//description.innerHTML = data.itemDescription
//title.innerHTML = data.itemLabel
var img = document.getElementById("image")
img.src = data.pic
var stl_viewer = new StlViewer(document.getElementById("stl_cont"), {models: [{id:0, filename: `${data.model}?origin=*`}]}); 
// = data.itemLabel
//${data.model}?origin=*
//Here you may write your code, after this document.load will fire

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