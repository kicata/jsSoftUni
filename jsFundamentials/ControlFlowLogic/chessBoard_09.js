function printChessBoard(n){
    "use strict";
    let result='<div class="chessboard">\r\n';
    for (let i = 0; i < n; i++) {
        result+="\t<div>\r\n";
        if(i%2==0){
            for (let j = 0; j < n; j++) {
                if(j%2==0){
                    result+='\t\t<span class="black"></span>\r\n';
                }else{
                    result+='\t\t<span class="white"></span>\r\n';
                }

            }
        }else{
            for (let j = 0; j < n; j++) {
                if(j%2==0){
                    result+='\t\t<span class="white"></span>\r\n';
                }else{
                    result+='\t\t<span class="black"></span>\r\n';
                }

            }
        }
        result+="\t</div>\r\n";


    }
    result+="</div>\r\n";
console.log(result);

}/**
 * Created by k.asenov on 21.2.2017 ã..
 */
printChessBoard(3);