
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

    let serieIDElement = document.createElement("td");
    serieIDElement.innerHTML = `${serie.id}`;

    let serieNameElement = document.createElement("td");
    serieNameElement.innerHTML = `<input type = "button" value = "${serie.name}" class="btn btn-link series-button"></button>`;
      
    let serieChannelElement = document.createElement("td");
    serieChannelElement.innerHTML = `${serie.channel}`;

    let serieSeasonsElement = document.createElement("td");
    serieSeasonsElement.innerHTML = `${serie.seasons}`;

    serieNameElement.addEventListener("click", function(){
      console.log(`Rendering series with id = ${serie.id}`)
      renderSerie(getSerieByID(serie.id+"", dataSeries));
    })

    trElement.appendChild(serieIDElement);
    trElement.appendChild(serieNameElement);
    trElement.appendChild(serieChannelElement);
    trElement.appendChild(serieSeasonsElement);

    seriesTbody.appendChild(trElement);
  });
}

function getSeasonsAverage(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  return (totalSeasons/series.length);
}

function getSerieByID(idKey: string, series: Serie[] ){
  return idKey === '' ?  dataSeries : series.filter(se => se.id === parseInt(idKey));
}

  
function renderSerie(series: Serie[]): void {
  let serieInfo: HTMLElement = document.getElementById('contentSerie')!;
  
  while (serieInfo.hasChildNodes()) {
    if (serieInfo.firstChild != null) {
      serieInfo.removeChild(serieInfo.firstChild);
      
    }
  }

  series.forEach((serie) => {
      console.log(`Mostrando serie de id = ${serie.id}`)
  
      let titleElement = document.createElement("h1")
      titleElement.append(`${serie.name}`);
  
      let imgElement = document.createElement("div")
      imgElement.innerHTML = `<img src = "${serie.imgLink}" width="250">`
  
  
      let pElement = document.createElement("p")
      pElement.append(`${serie.description}`)
  
  
      serieInfo.append(titleElement);
      serieInfo.append(imgElement);
      serieInfo.append(pElement);
      serieInfo.innerHTML += `<a href="${serie.link}">${serie.link}</a>`;
  });
  }
