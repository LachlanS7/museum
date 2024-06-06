async function loadJSON(path) {
    const response = await fetch(path);
    const json = await response.json();
    return json
}

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

async function loadObjects(path) {
    var objs = await loadJSON(path)
    var table = document.getElementById("results")

    var queryString = window.location.search.substring(1);
    queryString = parseQuery(queryString)
    var page = Number(queryString.page)

    if (isNaN(page)) {
        page = 0
    }


    var pageCounter = document.getElementById("page-counter")
    console.log(pageCounter)
    pageCounter.innerHTML = page + 1
    var lower = 10 * page
    var upper = lower + 10 < objs.length ? lower + 10 : objs.length

    if (page != 0) {
        var prev = document.getElementById("prev")
        prev.href = `artifacts.html?page=${page - 1}`
    } else {
        ;        
    }

    if (page * 10 + 10 < objs.length) {
        var prev = document.getElementById("next")
        prev.href = `artifacts.html?page=${page + 1}`
    }


    for (var i = lower; i < upper; i++) {
        var obj = objs[i]
        var link = `artifact.html?${encodeURIComponent(JSON.stringify(obj))}`

        var row = ""
        row += `<tr style="display: table-row;">`
        row += `<td><a class="table-entry" href="${link}">${i}</a></td>`
        row += `<td><a class="table-entry" href="${link}"><img src="${obj.thumb}" style="max-height: 64px; max-width: 128px;"></a></td>`
        row += `<td style="text-align: left;"><a class="table-entry" href="${link}">${obj.itemLabel}<br>${obj.itemDescription}</a></td>`
        row += `<td><a class="table-entry" href="${link}">Yes</a></td>`
        row += `<td><a class="table-entry" href="${link}">No</a></td>`
        row += `</tr>`

        table.innerHTML += row;
    }
}

loadObjects('assets/3dModels.json')