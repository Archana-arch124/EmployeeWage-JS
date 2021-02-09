class Utility{
    // Check employee is present or not
    empWageCal(){
        var totWorkHr = 0;
        const wagePerHr = 20;
        const workDays = 20;
        for(var i=0; i<workDays; i++){
            var check = Math.floor(Math.random()*3);
            //console.log(check);
            switch(check){
                case 0:
                    var workHr = 0;
                    //Absent
                    totWorkHr += workHr;
                break;
                case 1:
                    var workHr = 4;
                    //Part Time
                    totWorkHr += workHr;
                break;
                case 2:
                    var workHr = 8;
                    //Full Time
                    totWorkHr += workHr;
                break;
            }
        }
        console.log("work hours in month is: "+totWorkHr);
        console.log("Wage of the month is: "+(totWorkHr * wagePerHr));
    }
}
module.exports = new Utility();