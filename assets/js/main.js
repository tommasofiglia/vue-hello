/*************************************
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data.
**************************************/


let root = new Vue({
  // options object
  el: "#root",
  data: {
    welcomeMessage: "Ecco la mia bellissima moto",
    myImage: "assets/img/moto.webp"
  }
});
