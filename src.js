async function loadJSON(path) {
    const response = await fetch(path);
    const json = await response.json();
    return json
}

async function loadObjects(path) {
    var objs = await loadJSON(path)
    var table = document.getElementById("results")

    for (i in objs) {
        var obj = objs[i]
        var link = `artifact.html?${encodeURIComponent(JSON.stringify(obj))}`

        var row = ""
        row += `<tr style="display: table-row;">`
        row += `<td><a class="table-entry" href="${link}">${i}</a></td>`
        row += `<td><a class="table-entry" href="${link}"><img src="assets/skull.jpg" style="max-height: 64px; max-width: 128px;"></a></td>`
        row += `<td style="text-align: left;"><a class="table-entry" href="${link}">${obj.itemLabel}<br>${obj.itemDescription}</a></td>`
        row += `<td><a class="table-entry" href="${link}">Yes</a></td>`
        row += `<td><a class="table-entry" href="${link}">No</a></td>`
        row += `</tr>`

        table.innerHTML += row;
    }
}

loadObjects('assets/3dModels.json')