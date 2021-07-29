let i = 1;
let n = prompt("Entrer un nombre: ");
while (i <= 10) {
  console.log(n + " * " + i + " = " + i * n);
  i++;
}

console.log("------------------------------");

for (let j = 10; j > 0; j--) {
  console.log(n + " * " + j + " = " + j * n);
}
