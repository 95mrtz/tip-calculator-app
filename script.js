/* data ingresada por el usuario */
const ingressBill = document.getElementById("cost");
const btnTip5 = document.getElementById("btn-tip-5");
const btnTip10 = document.getElementById("btn-tip-10");
const btnTip15 = document.getElementById("btn-tip-15");
const btnTip25 = document.getElementById("btn-tip-25");
const btnTip50 = document.getElementById("btn-tip-50");
const btnTipCustom = document.getElementById("custom");
const ingressPeople = document.getElementById("cant-input");

/* data a mostrar */
const tipAmount = document.getElementById("span-tipAmount");
const tipTotal = document.getElementById("span-totalAmount");
const noZero = document.getElementById("noZero");

/* boton de reset */
const btnReset = document.getElementById("btn-reset");

/* variables */
let valorIngresado = 0;
let porcSeleccionado = 0;
let cantPersonas = 0;
let valorTip = "";

calculoTipMount = () => {
  console.log(valorIngresado);
  if (cantPersonas > 0) {
    valorTip = (porcSeleccionado * valorIngresado) / 100;
    console.log(`Esto es valor tip ahora: ${valorTip}`);
    valorTip = valorTip / cantPersonas;
    console.log(`y ahora vale esto: ${valorTip}`);
    tipAmount.innerHTML = valorTip.toFixed(2);
  }
  calculoTotalMount(valorTip);
  console.log(`valor del tip ${valorTip}`);
};

calculoTotalMount = (vTip) => {
  if (cantPersonas > 0) {
    let valorTotal = valorIngresado / cantPersonas;
    valorTotal = valorTotal + vTip;
    console.log(valorTotal);
    tipTotal.innerHTML = valorTotal.toFixed(2);
  }
};

ingressBill.addEventListener("change", () => {
  console.log("cambio " + ingressBill.value);
  valorIngresado = ingressBill.value;
  if (valorIngresado !== "") {
    btnReset.style.filter = "opacity(1)";
  }
  // Pasamos el numero a flotante por si se ingreso con ,
  valorIngresado = parseFloat(valorIngresado);

  calculoTipMount();
});

btnTip5.addEventListener("click", () => {
  porcSeleccionado = btnTip5.value;
  btnTip5.style.backgroundColor = "hsl(172, 67%, 45%)";
  btnTip10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip50.style.backgroundColor = "hsl(183, 100%, 15%)";
  calculoTipMount();
});

btnTip10.addEventListener("click", () => {
  porcSeleccionado = btnTip10.value;
  btnTip5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip10.style.backgroundColor = "hsl(172, 67%, 45%)";
  btnTip15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip50.style.backgroundColor = "hsl(183, 100%, 15%)";
  calculoTipMount();
});

btnTip15.addEventListener("click", () => {
  porcSeleccionado = btnTip15.value;
  btnTip5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip15.style.backgroundColor = "hsl(172, 67%, 45%)";
  btnTip25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip50.style.backgroundColor = "hsl(183, 100%, 15%)";
  calculoTipMount();
});

btnTip25.addEventListener("click", () => {
  porcSeleccionado = btnTip25.value;
  btnTip5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip25.style.backgroundColor = "hsl(172, 67%, 45%)";
  btnTip50.style.backgroundColor = "hsl(183, 100%, 15%)";
  calculoTipMount();
});

btnTip50.addEventListener("click", () => {
  porcSeleccionado = btnTip50.value;
  btnTip5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip50.style.backgroundColor = "hsl(172, 67%, 45%)";
  calculoTipMount();
});

btnTipCustom.addEventListener("click", () => {
  btnTip5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip50.style.backgroundColor = "hsl(183, 100%, 15%)";
});
btnTipCustom.addEventListener("change", () => {
  porcSeleccionado = btnTipCustom.value;
  calculoTipMount();
});

ingressPeople.addEventListener("change", () => {
  cantPersonas = ingressPeople.value;
  if (cantPersonas < 1) {
    noZero.style.display = "inline";
    noZero.style.color = "hsl(11, 91%, 52%)";
    ingressPeople.style.border = "2px solid hsl(11, 91%, 52%)";
  } else {
    noZero.style.display = "none";
    noZero.style.color = "hsl(186, 14%, 43%)";
    ingressPeople.style.border = "2px solid hsl(0, 0%, 100%)";
    calculoTipMount();
  }
});

btnReset.addEventListener("click", () => {
  ingressBill.value = "";
  btnTip5.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip10.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip15.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip25.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTip50.style.backgroundColor = "hsl(183, 100%, 15%)";
  btnTipCustom.value = "";
  ingressPeople.value = "";
  tipAmount.innerHTML = "0.00";
  tipTotal.innerHTML = "0.00";
  valorIngresado = 0;
  porcSeleccionado = 0;
  cantPersonas = 0;
  valorTip = 0;
});
