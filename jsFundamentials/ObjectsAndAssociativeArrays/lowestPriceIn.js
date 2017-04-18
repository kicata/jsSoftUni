/**
 * Created by k.asenov on 17.3.2017 ã..
 */
function findLowestPrice(input){
    //Sample Town | Sample Product | 1000
    let products = new Map();
    for(let line of input){
        let arr = line.split(/\s\|\s/);
        let tName = arr[0];
        let prName = arr[1];
        let price = arr[2]*1;

        if(products.has(prName)){
                if (price < products.get(prName).get(tName)) {
                    products.get(prName).set(tName, price);
                }
        }else {
            products.set(prName, new Map().set(tName,price));
        }
    }
    for(let [k,v] of products){
        //Sample Product -> 1000 (Sample Town)
        let part = "";
        for(let [t,p] of products.get(k)){
            part= p +" ("+ t +")";
        }
        console.log(k +" -> " + part);

    }
}
findLowestPrice(["Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10"]);