/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function checkIfIsPalidrome(word){
    "use strict";
    if(word.length%2==0){
        console.log("false");
    }else{
        let midle=Math.ceil(word.length/2);
        let isPalidrome = true;
        for (let i = 0; i < midle;i++){
            let l = word[i];
            let r = word[(word.length-1)-i];
            if(l !== r){
                isPalidrome=false;
                break;
            }

        }
        console.log(isPalidrome);
    }
}
checkIfIsPalidrome("haha");
