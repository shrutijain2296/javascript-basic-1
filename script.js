/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(value) { 
    if(value.marks > 50){
      console.log(value);  
    }

  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  arr.forEach(function(value){
    if (value.marks > 50) {
      console.log(value);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id: 4, name: "susan", age: "20", marks: 45});
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let filterArray = arr.filter((value) => value.marks < 50);
  console.log(filterArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newStudents = [
    {id: 4, name: "alice", age: "21", marks: 90},
    {id: 5, name: "bob", age: "22", marks: 75},
    {id: 6, name: "charlie", age: "20", marks: 60}
  ];

  let secondArray = arr.concat(newStudents);
  console.log(secondArray);
  console.log(arr);
}

