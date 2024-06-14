/*
- no builtins

time complexity 
space complexity
*/

let grades = [
  { student: "a", grade: 90 },
  { student: "b", grade: 80 },
  { student: "a", grade: 95 },
  { student: "a", grade: 91 },
];

function getStudentGrades(student, grades) {
  let allGrades = [];

  for (let i = 0; i < grades.length; i++) {
    if (grades[i].student === student) {
      allGrades[allGrades.length] = grades[i].grade;
    }
  }
  return allGrades;
}

console.log(getStudentGrades("a", grades)); // ==>  [90, 95, 91]
console.log(getStudentGrades("b", grades)); // ==>  [80]
