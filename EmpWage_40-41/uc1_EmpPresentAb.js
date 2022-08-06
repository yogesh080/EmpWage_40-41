//uc1
// const is_Absent = 0
// let empCheck = Math.floor(Math.random() * 10) % 2;
// if(empCheck ==is_Absent){
//     console.log("Employee is absent")
    
// } else {
//     console.log("Employee present")
// }

//uc2
// const is_partTime =1;
// const is_fullTime =2;
// const part_time_Hours =4;
// const Full_time_Hours = 8;
// const wage_per_hours = 20;
// let empHrs = 0;
// let empCheck2 = Math.floor(Math.random() * 10) % 3;
// switch(empCheck2){
//     case is_partTime:
//         empHrs = part_time_Hours;
//         break;
//     case is_fullTime:
//         empHrs = Full_time_Hours;
//         break;
//     default:
//         empHrs=0        
// }
// let empWage = empHrs *wage_per_hours;
// console.log("Emp wage:" + empWage);

// uc - 3
// const is_partTime =1;
// const is_fullTime =2;
// const part_time_Hours =4;
// const Full_time_Hours = 8;
// const wage_per_hours = 20;
// function GetWorkingHours(empCheck){
//     switch(empCheck) {
//         case is_partTime:
//             return part_time_Hours
//         case is_fullTime:
//             return Full_time_Hours
//         default:
//             return 0;
//     }
// }
// let empHrs = 0;
// let empCheck = Math.floor(Math.random() * 10) % 3;
// empHrs = GetWorkingHours(empCheck);
// let empWage = empHrs * wage_per_hours;
// console.log("EmpWage:" + empWage) ;


// uc4
// const is_partTime =1;
// const is_fullTime =2;
// const part_time_Hours =4;
// const Full_time_Hours = 8;
// const wage_per_hours = 20;
// function GetWorkingHours(empCheck){
//     switch(empCheck) {
//         case is_partTime:
//             return part_time_Hours
//         case is_fullTime:
//             return Full_time_Hours
//         default:
//             return 0;
//     }
// }
// const NUM_OF_WORKING_DAYS =2;
// let empHrs =0;
// for (let day =0; day< NUM_OF_WORKING_DAYS; day++){
// let empCheck = Math.floor(Math.random() * 10) % 3;
// empHrs += GetWorkingHours(empCheck)
// }
// let empWage = empHrs*wage_per_hours;
// console.log("Total Hrs: " + empHrs + "empWage: " + empWage);


// uc-5
// const is_partTime =1;
// const is_fullTime =2;
// const part_time_Hours =4;
// const Full_time_Hours = 8;
// const wage_per_hours = 20;
function GetWorkingHours(empCheck){
    switch(empCheck) {
        case is_partTime:
            return part_time_Hours
        case is_fullTime:
            return Full_time_Hours
        default:
            return 0;
    }
}
// const Max_hrs_in_month =1000;
// const Num_of_working_days = 10;
// let TotalEmpHrs = 0;
// let TotalWorkingDays = 0;
// while(TotalEmpHrs <= Max_hrs_in_month &&
//     TotalWorkingDays < Num_of_working_days){
//         TotalWorkingDays++;
//         let empCheck = Math.floor(Math.random() * 10) % 3;
//         TotalEmpHrs += GetWorkingHours(empCheck)
//     }
// let empWage = TotalEmpHrs * wage_per_hours;
// console.log("Uc-5 Total days: " + TotalWorkingDays + " " + "total Hrs: " + TotalEmpHrs  + " " + "Total wage : " + empWage)    


// uc6

const is_partTime =1;
const is_fullTime =2;
const part_time_Hours =4;
const Full_time_Hours = 8;
const wage_per_hours = 20;
function GetWorkingHours(empCheck){
    switch(empCheck) {
        case is_partTime:
            return part_time_Hours
        case is_fullTime:
            return Full_time_Hours
        default:
            return 0;
    }
}
const calcDailyWage = empHrs => {
    return empHrs * wage_per_hours;
}
const Max_hrs_in_month = 160;
const Num_of_working_days = 20;
let TotalEmpHrs = 0;
let TotalWorkingDays = 0;
// uc10
let empDailyHrsAndWageArr = new Array();

let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();




// while (TotalEmpHrs <= Max_hrs_in_month &&
//     TotalWorkingDays< Num_of_working_days){
//         TotalWorkingDays++;
//         let empCheck = Math.floor(Math.random() *10)%3;
//         let empHrs = GetWorkingHours(empCheck);
//         TotalEmpHrs += empHrs;
//         empDailyWageArr.push(calcDailyWage(empHrs));
//         empDailyHrsMap.set(TotalWorkingDays,empHrs);
//         empDailyWageMap.set(TotalWorkingDays,calcDailyWage(empHrs));
//     }

// let empWage = calcDailyWage(TotalEmpHrs);
// console.log("Uc-6 Total days: " + TotalWorkingDays + " " + "total Hrs: " + TotalEmpHrs  + " " + "Total wage : " + empWage);

// uc -7
// function totaWages(totalWage, dailywage){
//     return totalWage + dailywage
// }
// console.log("uc7a - Emloyee wage with reduce " +empDailyWageArr.reduce(totalWages,0))

// // uc7b
let dailyCntr = 0;
function mapdaywithWage(dailywage){
    dailyCntr++;
    return dailyCntr +" = " + dailywage
}

let mapdaywithWageArr = empDailyWageArr.map(mapdaywithWage);
// console.log(mapdaywithWageArr)
// console.log(empDailyWageArr)

// console.log("daily wage map")
// console.log(mapdaywithWage)

// uc7C
function fullTimeWage(dailWage){
    return dailWage.includes("160")
}
let fullDayWageArr = empDailyWageArr.map(mapdaywithWage);
// console.log(mapdaywithWageArr);
// uc7d
function findFullTimeWage(dailWage){
    return dailWage.includes("160")
}
// console.log("First time fulltime wage was earned on day: "+ mapdaywithWageArr.find(findFullTimeWage));

// // UC7E
function isAllFullTimeWage(dailWage){
    return dailWage.includes("160")
}
// console.log("check all elemet have full time wage:" + fulldayWageArr.every(isAllFullTimeWage))

// // uc7F
function isAnyPartTimeWage(dailWage){
    return dailWage.includes("80")
}
// console.log("check if any part time Wage: " + mapdaywithWageArr.some(isAnyPartTimeWage));

// // uc7g
function totalDaysWorked(numofDays, dailWage){
    if(dailWage>0) return numofDays+1;
    return numofDays;
}
// console.log("Number of days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked,0))


// uc9
const FindTotal = (totalval,dailyval) => {
    return totalval + dailyval
}
let count =0;
// let totalHours = Array.from(empDailyHrsMap.values()).reduce(FindTotal,0);
let totalsalary = empDailyWageArr.filter(dailywage => dailywage>0).reduce(FindTotal,0);
// console.log("uc9- emp wage: " + "total Hours: " + totalHours+" "+ "total wages: " + totalsalary);

// uc10

while (TotalEmpHrs <= Max_hrs_in_month &&
        TotalWorkingDays< Num_of_working_days){
            TotalWorkingDays++;
            let empCheck = Math.floor(Math.random() *10)%3;
            let empHrs = GetWorkingHours(empCheck);
            TotalEmpHrs += empHrs;
            empDailyHrsAndWageArr.push({
                dayNum: TotalWorkingDays,
                dailyHours:empHrs,
                dailywage:calcDailyWage(empHrs),
                toString(){
                    return "\nDay" + this.dayNum + " => working Hours is " + this.dailyHours + " And Wage Earned = " + this.dailywage
                }
            });
        }
console.log("uc10 sjowing Daily Hours and wage Earned:" +empDailyHrsAndWageArr)     


// uc11

let totalWages = empDailyHrsAndWageArr.filter(dailyhrsAndWage => dailyhrsAndWage > 0).reduce((totalWage, dailyhrsAndWage) => totalWage += dailyhrsAndWage.dailywage,0);
let totalHours = empDailyHrsAndWageArr.filter(dailyhrsAndWage => dailyhrsAndWage > 0).reduce((totalHours, dailyhrsAndWage) => totalHours += dailyhrsAndWage.dailywage,0);
console.log("uc11 total hours :" + totalHours + "Total wage: " + totalWages);



process.stdout.write("uc11")
empDailyHrsAndWageArr.filter(dailyhrsAndWage => dailyhrsAndWage.dailyHours == 8).forEach(dailyhrsAndWage = process.stdout.write(dailyhrsAndWage.toString()))


