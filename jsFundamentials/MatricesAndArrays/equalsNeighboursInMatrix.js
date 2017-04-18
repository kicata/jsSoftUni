/**
 * Created by k.asenov on 2.3.2017 ã..
 */
function findEqualNeighbour(input){
    let matrix=input.map(row=>row.split(" "));
    let eqCount=0;
    for (var row = 0; row < matrix.length-1; row+=1) {
        for (var col = 0; col < matrix.length; col++) {
            let a = matrix[row][col];
            let b = matrix[row+1][col];
            if(matrix[row][col] == matrix[row+1][col]){
                eqCount++;
            }else if(matrix[row][col] == matrix[row][col+1]){
                eqCount++;
            }
        }
    }
    console.dir(eqCount);
}
findEqualNeighbour(['2 2 4 7 0', '4 0 5 3 4', '2 3 5 4 2', '9 8 7 5 4']);
findEqualNeighbour(['test yes yo ho', 'well done yo 6', 'not done yet 5']);