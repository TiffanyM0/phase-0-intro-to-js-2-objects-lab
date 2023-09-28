// Write your solution in this file!
const employee = {
    name : "alice",
    streetAddress : "kikuyu",
}
console.log(employee);

function  updateEmployeeWithKeyAndValue(employee, streetAddress, name){
 const employee2 = {...employee, streetAddress : "11 Broadway", name : "Sam"};
 return (employee2)
}
console.log(employee2);

function destructivelyUpdateEmployeeWithKeyAndValue(employee,streetAddress){
employee.streetAddress = '12 Broadway';
return(employee);
}

function deleteFromEmployeeByKey(){
    let newEmployee = {...employee}
    delete newEmployee.name;
    return (newEmployee);
}
function destructivelyDeleteFromEmployeeByKey(employee){
    delete employee.name;
    return(employee);    
}