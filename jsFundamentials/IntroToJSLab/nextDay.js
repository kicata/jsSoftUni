/**
 * Created by k.asenov on 17.2.2017 ã..
 */
function calcNextDay([year,month,day]){
    let date=new Date(year*1,month*1-1,day*1);
    let oneDay=24*60*60*1000;
    let nextDate= new Date(date.getTime()+oneDay);
console.log(nextDate.getFullYear()+"-"+(nextDate.getMonth()+1)
    +"-"+nextDate.getDate());
}
calcNextDay(['2016', '9', '30']);