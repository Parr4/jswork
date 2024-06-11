let imageBor = document.querySelector("#img-border");
let borde = false;

imageBor.addEventListener("click", () => {
  if (borde == false) {
    document.querySelector("#img-border").style.border = "solid 2px orange";
    borde = true;
  } else {
    document.querySelector("#img-border").style.border = "";
    borde = false;
  }
});

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");

cantidad1 = 0;
cantidad2 = 0;
cantidad3 = 0;
total = 0;
let stickerCant = document.querySelector("#cantidad");
let stickerMsg = document.querySelector("#stickerMsg");

function suma() {
  (total = cantidad1 + cantidad2 + cantidad3), console.log("total:", total);
  if (total >= 10) {
    stickerMsg.innerHTML =
      "Te pasaste, no puedes llevar mas de 10 stickers! llevas:  ";
    (stickerCant.innerHTML = total), (stickerCant.className = "red");
  } else {
    (stickerMsg.innerHTML = "Bien, llevas esta cantidad:  "),
      (stickerCant.innerHTML = total),
      (stickerCant.className = "green");
  }
  if (total <= 0) {
    stickerMsg.innerHTML = "Aun no has agregado stickers, llevas:  ";
    (stickerCant.innerHTML = total), (stickerCant.className = "red");
  }
}

input1.addEventListener("input", () => {
  (cantidad1 = parseInt(document.querySelector("#input1").value)), suma();
});

input2.addEventListener("input", () => {
  (cantidad2 = parseInt(document.querySelector("#input2").value)), suma();
});

input3.addEventListener("input", () => {
  (cantidad3 = parseInt(document.querySelector("#input3").value)), suma();
});

let pw1 = document.querySelector("#pw1");
let pw2 = document.querySelector("#pw2");
let pw3 = document.querySelector("#pw3");
let pswtry = undefined;
let resultado = document.querySelector("#resultado");
let submitBTN = document.querySelector("#submit");

submitBTN.addEventListener("click", () => {
  pswtry = pw1.value + pw2.value + pw3.value;
  if (pswtry === "911" || "714") {
    if (pswtry==="911"){resultado.innerHTML = "Password 1 es correcta";}else{
        if (pswtry==="714"){
          resultado.innerHTML = "Password 2 es correcta";
        }else{resultado.innerHTML = "Password Incorrecta";}
    }}else{
        resultado.innerHTML = "Password Incorrecta";
    }
});
