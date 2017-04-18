/**
 * Created by k.asenov on 16.3.2017 ã..
 */
function parseToJSON(input){
    //Town | Latitude | Longitude
    let towns=[];
    for(let i=1;i<input.length;i++){
        let row=input[i].split(/\s*\|\s*/).filter(x=>x!=="");
        let townObj={Town:row[0],Latitude:row[1]*1,Longtitude:row[2]*1};
        towns.push(townObj);
    }
    console.log(JSON.stringify(towns));


}
parseToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
