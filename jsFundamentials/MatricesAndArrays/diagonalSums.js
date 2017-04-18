/**
 * Created by k.asenov on 2.3.2017 ã..
 */
function diagonalSums(input){

    let y = input.length;
    let x = input[0].split(" ").length;
    let lD =0;
    let rD =0;
    let matrix=[];
    //create
    for (var i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(" ").map(Number);
    }

    //calculate
    for (let i = 0, j=0; i < y; i++, j++) {
        lD+= matrix[i][j];
    }
    for (let k = 0, l=x-1; k < y; k++, l--) {
        rD+= matrix[k][l];
    }
    console.log(lD+" "+rD);
}
    diagonalSums(['3 5 17',
        '-1 7 14',
        '1 -8 89']);