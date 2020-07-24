var pracant = new Worker('pracant.js');

const progress = document.querySelector('small');

document.querySelector('button').onclick = () => {
  pracant.postMessage("Makej!");
  progress.innerText = "Generuji číslo"
}

pracant.onmessage = function (event) {
  document.querySelector('ul').innerHTML += `<li>${event.data}</li>`;
  progress.innerText = ""

  // alert(event.data);
}; 