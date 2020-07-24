var pracant = new Worker('pracant.js');



document.querySelector('button').onclick = () => {
  pracant.postMessage("Makej!");

}

pracant.onmessage = function (event) {
  document.querySelector('ul').innerHTML += `<li>${event.data}</li>`;

  // alert(event.data);
}; 