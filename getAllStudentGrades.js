let grades = [
  { student: "a", grade: 90 },
  { student: "b", grade: 80 },
  { student: "a", grade: 95 },
  { student: "a", grade: 91 },
];

function getAllStudentGrades(studentList, grades) {
  let allStudentsGrades = [];
  let student2grades = {};

  // generate student2grades map
  for (let i = 0; i < grades.length; i++) {
    let student = grades[i].student;
    let grade = grades[i].grade;

    if (student2grades[student] === undefined) {
      student2grades[student] = [grade];
    } else {
      let currentStudentGradesLength = student2grades[student].length;
      student2grades[student][currentStudentGradesLength] = grade;
    }
  }

  // reformat map to desired output
  // [ { student: "a", grade: [90, 95, 91] }, { student: "b", grade: [80] } ]

  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];
    let grades = student2grades[student];
    allStudentsGrades[allStudentsGrades.length] = {
      student: student,
      grade: grades,
    };
  }

  return allStudentsGrades;
}

console.log(getAllStudentGrades(["a", "b"], grades)); // ==>  [ { student: "a", grade: [90, 95, 91] }, { student: "b", grade: [80] } ]
