const employeeNo: number = 10;
const employeeName: string = 'saif';
const employeeBonus: boolean = true; 

let myTuple: [number, string] = [employeeNo,employeeName];

console.log(myTuple);
console.log(myTuple[0]);
console.log(myTuple[1]);

// below line will throw an error because only the declared data type values can be added in the tuple
// myTuple.push(employeeBonus);

