/**
 * Created by k.asenov on 15.3.2017 ã..
 */
function extractLinks(input){
   let result=[];
    let pattern = /[w]{3}\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    for(let row of input){
        let arr=row.match(pattern);
        if(arr !== null){
            arr.forEach(x=>result.push(x));
        }
    }
    result.forEach(x=>console.log(x));


}
extractLinks(["Join WebStars now for free, at www.web-stars.com",
"You can also support our partners:",
    "Internet - www.internet.com",
"WebSpiders - www.webspiders101.com",
"Sentinel - www.sentinel.-ko"] );
