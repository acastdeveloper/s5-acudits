const $NEXT = document.querySelector("#next");
const $SORTIDA = document.querySelector("#sortida");

const url = "https://icanhazdadjoke.com";

$NEXT.addEventListener("click", () => getXist(url));

async function getXist(url) {
    let xist = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json"
        }
      });

    let xistJson = await xist.json();

    console.log(xistJson.joke);
    $SORTIDA.innerHTML=xistJson.joke;

}
