class Utility{
    // Check employee is present or not
    empWageCal(){
        
        let check = Math.round(Math.random() *2);
        if(check === 0){
            //console.log("Employee is Absent");
        }
        else{
            //console.log("Employee is Present");
        }
        this.DailyEmpWage(check);
    }

    DailyEmpWage(check){
        let workHour = 0;
        const wagePerHr = 20;
        switch(check){
            case 0:
                workHour = 4;
                //console.log("Employee is Part Time");
            break;
            case 1:
                workHour = 8;
                //console.log("Employee is Full Time")
            break;
            default:
                workHour = 0;
            break;
        }
        console.log("Wage of Employee is: "+(workHour * wagePerHr));
    }
}
module.exports = new Utility();