/** Problem -01 ( Divide the Asset ) */
var area = 800;
var halfArea = area / 2;
console.log(area);
console.log(halfArea);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}


/** Prrroblem -03 ( Medicine Planner ) */
var lastDay = 11;
for (var day = 1; day <= lastDay; day++) {
  if (day % 3 === 0) {
    console.log(day + " - medicine");
  } else {
    console.log(day + " - rest");
  }
}

/** Prrroblem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
if (
  fileName[0] === "#" ||
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "Arafat", roll: 56805, department: "cse" };
var email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email);

