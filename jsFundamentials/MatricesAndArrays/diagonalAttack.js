/**
 * Created by k.asenov on 9.3.2017 �..
 */
function diagonalAttack(input){
    let matrix = parseMatrix(input);
    let lDiag = calcLeftDiagonal(matrix);
    let rDiag = calcRightDiagonal(matrix);
    if(lDiag!=rDiag){
        printMatrix(matrix);
    }else{
        let filled = fillInMatrix(matrix,lDiag);
        printMatrix(filled);
    }

    function fillInMatrix(matrix, value){
        for(let r=0,d = matrix.length-1;r < matrix.length;r++,d--){
            for(let c = 0; c < matrix.length;c++){

                if(r==c || c==d){
                    continue;
                }else{
                    matrix[r][c]= value;

                }

            }

        }
        return matrix;

    }

    function calcLeftDiagonal(matrix){
       let sum=0;
        for(let r=0,c=0;r<matrix.length;r++,c++){
           sum+=matrix[r][c];
        }
        return sum;
    }

    function calcRightDiagonal(matrix){
        let sum=0;
        let len=input.length;
        for(let r=0,c=len-1; r < matrix.length;r++,c--){
            sum+=matrix[r][c];
        }
        return sum;
    }

    function parseMatrix(input){
        let len = input.length;
        let matrix = input.map(row=>row.split(" ").map(Number));
        return matrix;

    }

    function printMatrix(arr){
        console.log(arr.map(row => row.join(' '))
            .join('\n'));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])

