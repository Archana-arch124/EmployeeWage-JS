class Utility{
    // Check employee is present or not
    empWageCal(){
        var totWorkHr = 0;
        const wagePerHr = 20;
        const totalWorkDays = 20;
        const workHourOfMonth = 160;
        var workDays = 0;

        
        var dailyWageArr = [];
        var totalWageArr = [];
        //let myMap = new Map();
        
        while((totalWorkDays > workDays) && (workHourOfMonth>=totWorkHr)){
            workDays++;
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
            var dailyWage = workHr * wagePerHr;
            totalWageArr.push(dailyWage);
            //var totalWage = totWorkHr * wagePerHr;
        
            // Storing Data into Array    
            let temp = {};
            temp.Day = workDays;
            temp.D_wage = dailyWage;
            dailyWageArr.push(temp);
         

        // total wage of employee.
        var wage = 0;
        totalWageArr.forEach(value => wage += value);   //calculating wage of month
        console.log("The total wage of month is: "+wage);//here printing total wage of month

        // Helper Function map.
        console.log("Day along with Daily Wage is: ");
        dailyWageArr.map( value => console.log(value));

        // using filter function
        console.log("Day and wage Which has earned 160 rs:");
        dailyWageArr.filter( (value) =>{
            if(value.D_wage === 160){
                console.log("day: "+value.Day+" and wage: "+value.D_wage);
            }
        })

        // using find function
        console.log("Part time wage with day and wage :");
        dailyWageArr.find( (value) =>{
            if(value.D_wage === 80){
                console.log("day: "+value.Day+" and wage: "+value.D_wage);
            }
        })
        }
        
    }
}
module.exports = new Utility();