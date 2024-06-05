
var data = window.location.search.substring(1);
data = JSON.parse(decodeURIComponent(data))
console.log(data)


var title = document.getElementById("title")

title.innerHTML = data.itemLabel

var stl_viewer = new StlViewer(document.getElementById("stl_cont"), {models: [{id:0, filename: `${data.model}?origin=*`}]}); 
// = data.itemLabel
//Here you may write your code, after this document.load will fire