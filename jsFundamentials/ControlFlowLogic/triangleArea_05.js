/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function triangleArea(input){
    let a =Number(input[0]);
    let b =Number(input[1]);
    let c =Number(input[2]);

    let p=(a+b+c)/2;
    let S= Math.sqrt(p*(p-a)*(p-b)*(p-c));
    console.log(S.toFixed(10));

}
triangleArea([2,3.5,4]);