/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function drawFourSquares(num){
    "use strict";
    let number = num*1;
    let rows = number%2==0 ? number-1:number;
    let cols = 2*number-1;
    let[s1,s2,s3]=["+","-","|"];
    let result="";
    let middle = Math.ceil(rows/2);
    if(rows>3){
        for (let row = 1; row <= rows; row++) {
            if(row==1|| row == middle ||row == rows){
                for (let col = 1; col <= cols; col++) {
                    if(col==1||col%number==0||col==cols){
                        result+=s1;
                    }else{
                        result+=s2;
                    }

                }
            }else{
                for (let col = 1; col <= cols; col++) {
                    if(col==1||col%number==0||col==cols){
                        result+=s3;
                    }else{
                        result+=" ";
                    }

                }
            }
            result+="\r\n";
        }

    }else{
        for (let row = 1; row <= rows; row++) {
            for (let col = 1; col <= cols; col++) {
                if(col==1||col%number==0||col==cols){
                    result+=s1;
                }else{
                    result+=s2;
                }

            }


        }

    }
    console.log(result);
}
drawFourSquares(4);