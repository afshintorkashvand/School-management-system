const students = [
  { id: 1, name: "Sara", age: 20, score: 15, isActive: true },
  { id: 2, name: "Ali", age: 22, score: 20, isActive: true },
  { id: 3, name: "Nima", age: 22, score: 12, isActive: false },
  { id: 4, name: "Mina", age: 21, score: 9, isActive: false },
  { id: 5, name: "Reza", age: 23, score: 13, isActive: true },
];

// 1. Display the names of all students in the console. 
function logStudent (student){
    console.log(student.name);
}
students.forEach(logStudent);

// 2. Find and display the student whose id is 3.
const findStudent = students.find(function(student){
    return student.id === 3
});
console.log(findStudent);

// 3. Display only the students who are active.
const activeStudents = students.filter(function(student){
    return student.isActive
});
console.log(activeStudents);

// 4. Create a new array containing only the students' names. 
const studentsName = students.map(function(student){
    return student.name;
});
console.log(studentsName);

// 5. Use a traditional for loop to display the name and score of every student. 
for(let i = 0; i < students.length; i++){
    const name = students[i].name;
    const score = students[i].score;

    console.log(name, score);
};

// 6. Check whether there is any student whose score is greater than 17. 
const hasStudentWithHighScore = students.find(function (student){
    return student.score >= 17;
});
console.log(hasStudentWithHighScore);

// 7. Find the students whose scores are greater than or equal to 15.
const studentWithHighScore = students.filter(function (student){
    return student.score >= 15 ;
});
console.log(studentWithHighScore);

// 8. Write a function named getStudentById that receives an id and returns the matching student (4). 
function getStudentById(id){
  const findStudent = students.find(function (student){
    return student.id === id
  })  
  return findStudent
};
console.log(getStudentById(4));


// 9. Write a function named getPassedStudents that returns an array of students who passed (score 10 or higher).
function getPassedStudents(){
    const passedStudents = students.filter(function (student){
        return student.score >= 10;
    });
    return passedStudents
};
console.log(getPassedStudents());


// 10. Write a function named getAverageScore that calculates and returns the average score of all students. 
function getAverageScore(){
    const avg = students.reduce(function (total, grade){
        return total+= grade.score
    },0);
    return avg / students.length
};
console.log(getAverageScore());

// 11. Write a function named getStudentStatus that receives a student and returns "Active" or "Inactive" based on the isActive property (2). 
function getStudentStatus(student){
    return student.isActive ? "Active" : "Inactive";
};
console.log(getStudentStatus(students[2]));
