/**
 * Created by k.asenov on 22.2.2017 ã..
 */
function getTheLastDayOfPrMonth(input){
    "use strict";
    let lastDayPrevMonth = new Date(input[2], input[1]-1, 0).getDate();
    console.log(lastDayPrevMonth);
}
getTheLastDayOfPrMonth(['17','3','2002']);