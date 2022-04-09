
import { Serie } from './serie.js';

import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const totalSeasonsAvgElem: HTMLElement = document.getElementById("seasons-avg")!;
let serieInfo: HTMLElement = document.getElementById('contentSerie')!;



renderSeriesInTable(dataSeries);


totalSeasonsAvgElem.innerHTML = `${getSeasonsAverage(dataSeries)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.id}</td>
                           <td><input type = "button" onclick = "applyFilterById(${serie.id})" value = "${serie.name}" id = serieID class="btn btn-link"></button></td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getSeasonsAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return (totalSeasons/series.length);
}

function getSerieByName(idKey: string, series: Serie[] ){
  return idKey === '' ?  dataSeries : series.filter(se => se.id === parseInt(idKey));
}


function applyFilterById(id: string){
  console.log(`Rendering series with id = ${id}`)
  renderSerie(getSerieByName(id, dataSeries));
}

function renderSerie(series: Serie[]): void {
  
  series.forEach((serie) => {
    console.log(`Mostrando serie de id = ${serie.id}`)

    let titleElement = document.createElement("h1")
    titleElement.append(`${serie.name}`);

    let imgElement = document.createElement("div")
    imgElement.innerHTML = `<img src = "${serie.imgLink}"><img style='height: 100%; width: 100%; object-fit: contain'/>`


    let pElement = document.createElement("p")
    pElement.append(`${serie.description}`)


    serieInfo.append(titleElement);
    serieInfo.append(imgElement);
    serieInfo.append(pElement);
  });
}
