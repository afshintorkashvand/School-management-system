const school = { 
  name: "Code School", 
  classes: [ 
    { 
      title: "Class A", 
      students: [ 
        { 
          id: 1, 
          name: "Sara", 
          scores: [ 
            { title: "Math", score: 18 }, 
            { title: "English", score: 16 } 
          ] 
        }, 
        { 
          id: 2, 
          name: "Ali", 
          scores: [ 
            { title: "Math", score: 12 }, 
            { title: "English", score: 15 } 
          ] 
        } 
      ] 
    }, 
    { 
      title: "Class B", 
      students: [ 
        { 
          id: 3, 
          name: "Nima", 
          scores: [ 
            { title: "Math", score: 8 }, 
            { title: "English", score: 10 } 
          ] 
        }, 
        { 
          id: 4, 
          name: "Mina", 
          scores: [ 
            { title: "Math", score: 19 }, 
            { title: "English", score: 18 } 
          ] 
        } 
      ] 
    } 
  ] 
}; 



// 19. Display the school name and the names of all classes.
console.log(school.name);
school.classes.forEach( (schoolClass) => console.log(schoolClass.title));

// 20. Display the names of all students in the school. 
school.classes.forEach( (schoolClass) => schoolClass.students.forEach( (student) => console.log(student.name)));

// 21. Write a function named getClassStudents that receives a class name and returns the array of students in that class.
function getClassStudents(className){
    const selectedClass = school.classes.find( (schoolClass) => schoolClass.title === className)
    return selectedClass?.students
};
console.log(getClassStudents("Class A"));

// 22. Write a function named findStudent that receives a student id and searches for that student in all classes. Return the student object if found; otherwise, return an appropriate value. 


function findStudentInSchool (id){
    let foundStudent;
    school.classes.forEach(function (schoolClass){
        const studentInClass = schoolClass.students.find(function (student){
            return student.id === id
        });
        if(studentInClass){
            foundStudent = studentInClass
        }
    });
    return foundStudent
};
console.log(findStudentInSchool(4));

// 23. Write a function named getSchoolAverage that calculates and returns the average of all recorded subject scores across all students in the school.
function getSchoolAverage(){
    let totalScore = 0;
    let scoreCount = 0;
    school.classes.forEach(function (schoolClass){
        schoolClass.students.forEach(function (student){
            const avg = student.scores.reduce(function (total,subScore){
                scoreCount++
                return total+=subScore.score
            }, 0);
            totalScore += avg
        })
    })
    return totalScore / scoreCount
};
console.log(getSchoolAverage());

 
