const $NEXT = document.querySelector("#next");
const $SORTIDA = document.querySelector("#sortida");
const $LOTEMPS = document.querySelector("#lotemps");
const $BODY = document.body;


// XIST
const url = "https://icanhazdadjoke.com";

$NEXT.addEventListener("click", () => {
  getXist(url)
});

async function getXist(url) {
  let xist = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  let xistJson = await xist.json();

  console.log(xistJson.joke);
  $SORTIDA.innerHTML = xistJson.joke;
}

// METEO
const urlM = 'https://api.openweathermap.org/data/2.5/weather?q=barcelona,es&lang=es&units=metric&appid=a0e6ac9e92dc18ce3cd493de048052d5';

window.addEventListener("load", () => {
  getMeteo();
});

async function getMeteo() {
  const meteo = await fetch(urlM, {
    method: "GET",
    headers: {}
  });
  const meteoJSON = await meteo.json();
  // console.log("Temperatura: "+ meteoSON.main.temp);
  // console.log("Nubulosidad: "+ meteoSON.wheather.id);
  let place = meteoJSON.name;
  let nuv = meteoJSON.weather[0].description;
  let tempCurrent = meteoJSON.main.temp;
  let tempConfort = meteoJSON.main.feels_like;
  let tempMin = meteoJSON.main.temp_min;
  let tempMax = meteoJSON.main.temp_max;

  let weather = `En ${place} la temperatura actual es de ${tempCurrent}ºC y en cuanto a la nubosidad: ${nuv}. La temperatura mínima es de ${tempMin}ºC y la màxima de ${tempMin}ºC. La sensación térmica es de ${tempConfort}ºC.`;

  // OUTPUT
  console.log(weather);
  $LOTEMPS.innerHTML = weather;

}
