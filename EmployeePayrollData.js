const Input = require('readline-sync');

class EmployeePayRoll
{
    constructor(id, name, salary, gender, date) {
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._gender = gender;
        this._date = date;
    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get salary(){
        return this._salary;
    }
    set id(id){
        this._id = id;
    }
    set name(name){
        try{
            var pattern = RegExp("^[A-Z][1][a-z]{3,}$")
            if(pattern.test(name)){
                this._name = name;
            }
            else{
                throw "Enter valid name";
            }
        }
        catch(err) {
            console.error(err);
        }
        
    }
    set salary(salary){
        this._salary = salary;
    }
}



let empId = Input.questionInt("Enter Id: ");
let empName = Input.question("Enter Name: ");
let empSalary = Input.questionInt("Enter Salary: ");
let gender = Input.question("Enter your Gender: ");
let date = Input.question("Enter Start Date: ");
let empPayRoll = new EmployeePayRoll(empId, empName, empSalary, gender, date);
console.log("Employee PayRoll Data: ");
console.log(empPayRoll._id+" "+empPayRoll._name+" "+empPayRoll._salary+" "+empPayRoll._gender+" "+empPayRoll._date);
