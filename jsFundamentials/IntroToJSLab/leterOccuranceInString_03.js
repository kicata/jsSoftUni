/**
 * Created by k.asenov on 17.2.2017 ã..
 */
function  letterOccInString([str,letter]){
   let matchCont=0;
    for(let letterStr of str){
        if(letter ===letterStr){
            matchCont+=1;

        }
    }
    console.log(matchCont);
}
//letterOccInString(['panther', 'n']);