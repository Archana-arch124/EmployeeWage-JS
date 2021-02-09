class Utility{
    // Check employee is present or absent
    checkEmpAttendence(){
        var check = Math.round(Math.random() *1);
        if(check === 1){
            console.log("Employee is present");
        }
        else{
            console.log("Employee is absent");
        }
    };
}
module.exports = new Utility();