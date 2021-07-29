let scores = [];
let wantToContinue = false;

do {
  let n = prompt("Enter the name of the student: ");
  let s = parseFloat(prompt("Enter a score: "));
  let user = {
    fullname: n,
    score: s,
  };
  scores.push(user);
  wantToContinue = confirm("Are you want to continue? ");
} while (wantToContinue);

let moyen = 0;
let max = scores[0];
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i].score);
  moyen = moyen + scores[i].score;

  if (max.score < scores[i].score) {
    max = scores[i];
  }
}

moyen = moyen / scores.length;
console.log("AVG : " + moyen);
console.log(max.fullname + " has the highest score = " + max.score);
