const studentsStage2 = [
  {
    id: 1,
    name: "Sara",
    scores: [
      { title: "Math", score: 18 },
      { title: "English", score: 16 },
      { title: "Science", score: 20 },
    ],
  },
  {
    id: 2,
    name: "Ali",
    scores: [
      { title: "Math", score: 12 },
      { title: "English", score: 15 },
      { title: "Science", score: 14 },
    ],
  },
  {
    id: 3,
    name: "Nima",
    scores: [
      { title: "Math", score: 8 },
      { title: "English", score: 10 },
      { title: "Science", score: 19 },
    ],
  },
];

// 12. Display each student's name and all of their subject scores. 
studentsStage2.forEach(function (student){
    console.log(student.name);
    student.scores.forEach(function (subjectScore){
        console.log(subjectScore.title, subjectScore.score);
    });
});

// 13. Write a function named calculateAverage that receives a student and returns the average of their scores (2).
function calculateAverage(student){
        const avg = student.scores.reduce(function (total,subjectScore){
            return total+=subjectScore.score
        },0);
    return avg / student.scores.length
};
console.log(calculateAverage(studentsStage2[2]));

// 14. Calculate and display the average score of each student along with their name. use Q13
function showNameAndAvg(){
    studentsStage2.forEach(function (student){
        const studentAvg = calculateAverage(student)
        console.log(student.name, studentAvg);
    });
};
showNameAndAvg()

// 15. Find the students whose average score is greater than or equal to 15. use Q13
const avgMore15 = studentsStage2.filter(function (student){
    const studentAvg =calculateAverage(student)
    return studentAvg >= 15
});
console.log(avgMore15);

// 16. Find and display the Math score for the student whose id is 1.

const findStudentMath = studentsStage2.find(function(student){
    return student.id === 1
});
const mathSubject = findStudentMath.scores.find(function(subject){
    return subject.title === "Math"
});
console.log(mathSubject.score);

// 17. Write a function named getSubjectScore that receives a student and a subject name, then returns the score for that subject. 
function getSubjectScore(student, subjectName){
    const subject = student.scores.find(function (sub){
        return sub.title === subjectName
    });
    return subject.score
};
console.log(getSubjectScore(studentsStage2[1],"Science"));

// 18. Write a function named hasFailed that receives a student. It should return true if the student has a score below 10 in at least one subject; otherwise, return false.
 function hasFailed(student){
    const failedSubject = student.scores.some(function (sub){
        return sub.score < 10 ;
    });
    return failedSubject
 }
 console.log(hasFailed(studentsStage2[1]));
 