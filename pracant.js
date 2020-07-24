onmessage = function (event) {
  // Něco uděláme
  var info = event.data;
  // console.log(event, info)
  if (info === "Makej!") {
    let a = 0;
    for (let i = 0; i < 100000000; i++) {
      a += Math.random();
    }
    // console.log(a);
    postMessage(a);
  }
};