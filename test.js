const test = document.querySelector("#test");

// let tmp = "";
// function opcionUno() {
//   for (i = 0; i < 1000; i++) {
//     tmp += `<p>Conteto: ${i}</p>`;
//   }
//   test.innerHTML = tmp;
// }
// console.time("t1");
// opcionUno();
// console.timeEnd("t1");

function opcionDos() {
  for (i = 0; i < 1000; i++) {
    test.innerHTML += `<p>Conteto: ${i}</p>`;
  }
}
console.time("t1");
opcionDos();
console.timeEnd("t1");

// Opcion 1: 1000 -> t1: 2.02685546875 ms
// Opcion 2: 1000 -> t1: 811.1337890625 ms
