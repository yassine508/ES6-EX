const students = [
    { name: 'Alice', grade: 12 },
    { name: 'Bob', grade: 8 },
    { name: 'Charlie', grade: 15 }
  ];
  
const getPassedStudents = () => students.filter(i => i.grade >= 10).map(g=>g.name);
console.log(getPassedStudents())
const passedSt=getPassedStudents()
var [t]=passedSt
console.log(t)


             
  

  