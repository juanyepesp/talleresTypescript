import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var totalSeasonsAvgElem = document.getElementById("seasons-avg");
var serieInfo = document.getElementById('contentSerie');
renderSeriesInTable(dataSeries);
totalSeasonsAvgElem.innerHTML = "".concat(getSeasonsAverage(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var serieIDElement = document.createElement("td");
        serieIDElement.innerHTML = "".concat(serie.id);
        var serieNameElement = document.createElement("td");
        serieNameElement.innerHTML = "<input type = \"button\" value = \"".concat(serie.name, "\" class=\"btn btn-link series-button\"></button>");
        var serieChannelElement = document.createElement("td");
        serieChannelElement.innerHTML = "".concat(serie.channel);
        var serieSeasonsElement = document.createElement("td");
        serieSeasonsElement.innerHTML = "".concat(serie.seasons);
        serieNameElement.addEventListener("click", function () {
            console.log("Rendering series with id = ".concat(serie.id));
            renderSerie(getSerieByID(serie.id + "", dataSeries));
        });
        trElement.appendChild(serieIDElement);
        trElement.appendChild(serieNameElement);
        trElement.appendChild(serieChannelElement);
        trElement.appendChild(serieSeasonsElement);
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return (totalSeasons / series.length);
}
function getSerieByID(idKey, series) {
    return idKey === '' ? dataSeries : series.filter(function (se) { return se.id === parseInt(idKey); });
}
function renderSerie(series) {
    var serieInfo = document.getElementById('contentSerie');
    while (serieInfo.hasChildNodes()) {
        if (serieInfo.firstChild != null) {
            serieInfo.removeChild(serieInfo.firstChild);
        }
    }
    series.forEach(function (serie) {
        console.log("Mostrando serie de id = ".concat(serie.id));
        var titleElement = document.createElement("h1");
        titleElement.append("".concat(serie.name));
        var imgElement = document.createElement("div");
        imgElement.innerHTML = "<img src = \"".concat(serie.imgLink, "\" width=\"250\">");
        var pElement = document.createElement("p");
        pElement.append("".concat(serie.description));
        serieInfo.append(titleElement);
        serieInfo.append(imgElement);
        serieInfo.append(pElement);
        serieInfo.innerHTML += "<a href=\"".concat(serie.link, "\">").concat(serie.link, "</a>");
    });
}
