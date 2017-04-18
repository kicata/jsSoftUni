/**
 * Created by k.asenov on 13.3.2017 ã..
 */
function matchTheDates(input){
    let dates=[];
    for(let sentence of input){
        let pattern=/\b[0-9]{2}-[A-Za-z]{3}-[0-9]{4}\b/g;
        let date=sentence.match(pattern);
        if(date != null){
            dates.push(date);
        }
    }

    for(let date of dates){
        let data=date[0].split('-');
        console.log(`${date} (Day: ${data[0]}, Month: ${data[1]}, Year: ${data[2]})` )
    }

}

matchTheDates(["I am born on 30-Dec-1994.",
    "This is not date: 512-Jan-1996.",
"My father is born on the 29-Jul-1955."]);