/**
 * Created by k.asenov on 16.3.2017 ã..
 */
function sumTownsIncome(input){
    towns={};
    for(let i=0;i<=input.length-2;i+=2){
        let key= input[i];
        if(towns.hasOwnProperty(key)){
            towns[key]+=input[i+1]*1;
        }else{
            towns[key]=input[i+1]*1;
        }
    }
    console.log(JSON.stringify(towns));
}
sumTownsIncome(["Sofia", "20", "Varna", "3", "Sofia", "5", "Varna", "4"]);