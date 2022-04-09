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
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td><input type = \"button\" onclick = \"applyFilterById(").concat(serie.id, ")\" value = \"").concat(serie.name, "\" id = serieID class=\"btn btn-link\"></button></td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasonsAverage(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return (totalSeasons / series.length);
}
function getSerieByName(idKey, series) {
    return idKey === '' ? dataSeries : series.filter(function (se) { return se.id === parseInt(idKey); });
}
function applyFilterById(id) {
    console.log("Rendering series with id = ".concat(id));
    renderSerie(getSerieByName(id, dataSeries));
}
function renderSerie(series) {
    series.forEach(function (serie) {
        console.log("Mostrando serie de id = ".concat(serie.id));
        var titleElement = document.createElement("h1");
        titleElement.append("".concat(serie.name));
        var imgElement = document.createElement("div");
        imgElement.innerHTML = "<img src = \"".concat(serie.imgLink, "\"><img style='height: 100%; width: 100%; object-fit: contain'/>");
        var pElement = document.createElement("p");
        pElement.append("".concat(serie.description));
        serieInfo.append(titleElement);
        serieInfo.append(imgElement);
        serieInfo.append(pElement);
    });
}
