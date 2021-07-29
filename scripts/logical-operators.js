let age = 25;
if (age > 18 && age < 40) {
  console.log("Jeune");
} else {
  // age <= 18 || age >= 40
  if (age > 40) {
    console.log("Vielle");
  } else {
    console.log("Enfant");
  }
}
