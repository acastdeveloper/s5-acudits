const $NEXT = document.querySelector("#next");
const $SORTIDA = document.querySelector("#sortida");
const $LOTEMPS = document.querySelector("#lotemps");
const $BODY = document.body;

// XIST
const url = "https://icanhazdadjoke.com";
const urlChuck = "https://api.chucknorris.io/jokes/random";

let c = 0;

$NEXT.addEventListener("click", () => {

  console.log(c);
  c++;
  if (c > 0) {
    $NEXT.innerHTML = "Següent Acudit";
  } else {
    $NEXT.innerHTML = "Llençar Acudit";
  }

  let rand = 100 * Math.random();

  if (rand > 50) {
    getXist(url);
  } else {
    getXistChuck(urlChuck);
  }

});

async function getXist(url) {
  let xist = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  let xistJson = await xist.json();
  let joke = xistJson.joke;

  $SORTIDA.innerHTML = `" ${joke} "`;
}

async function getXistChuck(urlChuck) {
  let xistChuck = await fetch(urlChuck);
  let xistChuckJSON = await xistChuck.json();

  console.log(xistChuckJSON.value);
  $SORTIDA.innerHTML = `" ${xistChuckJSON.value} "`;
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

  let weather = `<strong>Ahora en ${place}:</strong> ${tempCurrent}ºC y ${nuv} `;

  // OUTPUT
  console.log(weather);
  $LOTEMPS.innerHTML = weather;
}
