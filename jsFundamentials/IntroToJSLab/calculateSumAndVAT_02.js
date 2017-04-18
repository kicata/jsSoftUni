/**
 * Created by k.asenov on 17.2.2017 ã..
 */
function calculateSumAndVat(input){
    let sum =0;
    for (var i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }

    console.log("sum = "+sum);
    console.log("VAT = "+sum*0.2);
    console.log("Total = "+sum*1.2);

}
//calculateSumAndVat(['1.20','2.60','3.50']);
