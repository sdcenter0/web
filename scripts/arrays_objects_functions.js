function getUser() {
  let n = prompt("Enter the name of the student: ");
  let s = parseFloat(prompt("Enter a score: "));
  let user = {
    fullname: n,
    score: s,
  };
  return user;
}

function getMax(scores) {
  let max = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (max.score < scores[i].score) {
      max = scores[i];
    }
  }
  return max;
}

function getMin(scores) {
  let min = scores[0];
  for (let i = 0; i < scores.length; i++) {
    if (min.score > scores[i].score) {
      min = scores[i];
    }
  }
  return min;
}

function getAVG(scores) {
  let avg = 0;
  for (let i = 0; i < scores.length; i++) {
    avg += scores[i].score;
  }
  return avg / scores.length;
}

function init() {
  let scores = [];
  let wantToContinue = false;
  do {
    scores.push(getUser());
    wantToContinue = confirm("Are you want to continue? ");
  } while (wantToContinue);

  return scores;
}

let scores = init();
console.log("AVG : " + getAVG(scores));
let max = getMax(scores);
let min = getMin(scores);
console.log(max.fullname + " has the highest score = " + max.score);
console.log(min.fullname + " has the lowest score = " + min.score);
