/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function isYearLeap(year){
    console.log((year%400==0) ||((year%4==0)&&(year%100!=0)) ? "yes":"no");
}
isYearLeap(1900);