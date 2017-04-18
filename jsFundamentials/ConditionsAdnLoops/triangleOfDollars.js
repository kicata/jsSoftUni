/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function triangleOfDollars(num){
    let line="";
    for (let i = 1; i <= num; i++) {
        line+="$";
        console.log(line);
    }
    //console.log("$".repeat(num));
   //console.log(new Array(num+1).join("$"));

}
triangleOfDollars(5);