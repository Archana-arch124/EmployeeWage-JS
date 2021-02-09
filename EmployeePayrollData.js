class EmployeePayRoll
{
    constructor(id, name, salary) {
        this._id = id;
        this._name = name;
        this._salary = salary;
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
        this._name = name;
    }
    set salary(salary){
        this._salary = salary;
    }
}

let empPayRoll = new EmployeePayRoll(1, "ArchanaHR", 40000);
console.log(empPayRoll._id+" "+empPayRoll._name+" "+empPayRoll._salary);
