var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 30 },
  { id: 4, name: "alex",     age: 22 }
];

students.sort(function (a, b) {

  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  if (nameA === nameB) {
    if (a.age > b.age) {
      return 1;
    } else return -1;
  }
});

console.log(students);

/*
Output:

  [
  { id:3, name: "alex",    age:22},
  { id:4, name: "alex",    age:30},
  { id:1, name: "bruce",   age 40}
  { id: 2 name: "zoidberg" age 22}
  ]

  */