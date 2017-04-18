/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function agregateTable(input){
    let towns=[];
    let sum=0;
    for(let line of input){
        let arr= line.split("|").filter(x=>x!="");
        towns.push(arr[0].trim());
        sum+=arr[1].trim()*1;
    }
    console.log(towns.join(", ")+" "+ sum);

}
agregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']);