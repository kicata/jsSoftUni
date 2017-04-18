/**
 * Created by k.asenov on 16.3.2017 ã..
 */
function cityMarket(input){
       // Sofia -> Laptops HP -> 200 : 2000
    let towns = new Map();
    for(let line of input){
        let arr = line.split(/\s\->\s/);
        let tName = arr[0];
        let prName = arr[1];
        let arr2 = arr[2].split(/\s:\s/).map(Number);
        let totalIncome = arr2[0]*arr2[1];

        if(towns.has(tName)){
            if(towns.get(tName).has(prName)){
                towns.get(tName).set(prName,towns.get(tName).get(prName)+totalIncome);
            }else{
                towns.get(tName).set(prName,totalIncome);
            }
        }else {
            towns.set(tName, new Map().set(prName,totalIncome));
        }
    }
    var p="stop";
    for(let [k,v] of towns){
        console.log(k);
        for(let [p,q] of v){
            console.log("$$$"+ p +" : "+ q);
        }
    }
}
cityMarket(["Sofia -> Laptops HP -> 200 : 2000","Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"]);