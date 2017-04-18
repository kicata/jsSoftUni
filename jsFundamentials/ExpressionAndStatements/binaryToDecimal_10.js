/**
 * Created by k.asenov on 22.2.2017 ã..
 */
function convertBinaryToDecimal(binary){

    let reversed = binary[0].split("").reverse().map(Number);
    let result=0;
    for (var i = 0; i < reversed.length;i++)
    {
       result+=reversed[i]*Math.pow(2,i);

    }
    console.log(result);

}

convertBinaryToDecimal(['00001001']);