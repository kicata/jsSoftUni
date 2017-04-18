/**
 * Created by k.asenov on 9.3.2017 ã..
 */
function isMagicMatrix(input){
    let isMagical=true;
   let mNum=input[0].split(" ").map(Number).reduce((a,b)=>a+b);
   let matrix =input.map(row=>row.split(" ").map(Number));
    for (let i = 0; i < matrix.length; i++) {
        let cSum=matrix[i].reduce((a,b)=>a+b);
        if(cSum!=mNum) {
            isMagical = false;
            break;
        }
    }

    if(isMagical==true){
        for(let col=0; col<matrix.length; col++){
            let sum= 0;
            for(row=0;row<matrix.length;row++){
                sum+=matrix[col][row];
            }
            if(sum!= mNum){
                isMagical=false;
                break;
            }
        }
    }
    if(isMagical==true){
        console.log("true");
    }else{
        console.log("false");
    }
}
isMagicMatrix(['11 32 45',
    '21 0 1',
    '21 1 1']);
