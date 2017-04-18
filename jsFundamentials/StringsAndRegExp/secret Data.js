/**
 * Created by k.asenov on 15.3.2017 �..
 */
function censorData (input){
    let result=[];
    for(let row of input){
        let names=row.match(/\*[A-Z][A-Za-z]*(?=\s|$)/g);
        let phones=row.match(/\+[0-9-]{10}(?=\s|$)/g);
        let ids=row.match(/![a-zA-Z0-9]+(?=\s|\t|$)/g);
        let sbs=row.match(/_[0-9A-Za-z]+(?=\s|$)/g);

        if(names != null){
            for(let name of names){
                let len = name.trim().length
                let censor="|".repeat(len);
                row=row.split(name.trim()).join(censor);
            }
            /*for(let name of names){
                let censor="|".repeat(name.length);
                let re = new RegExp(name,"g");
                row.replace(re,censor);
            }*/

        }
        if(phones != null){
            for(let phone of phones){
                let len = phone.trim().length;
                let censor="|".repeat(len);
                row=row.split(phone.trim()).join(censor);
            }

        }
        if(ids != null){

            for(let id of ids){
                let len = id.trim().length;
                let censor="|".repeat(len);
                row=row.split(id.trim()).join(censor);
            }

        }
        if(sbs != null){
            for(let sb of sbs){
                let censor="|".repeat(sb.trim().length);
                row=row.split(sb.trim()).join(censor);
            }
        }

        result.push(row);
    }

    result.forEach(x=>console.log(x));
}
censorData(["Agent*Ivankov *Ivankov# *Ivankov*Ivankov was in the room when it all happened.",
    "The person in the room was heavily armed.",
    "Agent *Ivankov had to act quick in order.",
    "He picked up his phone and called some unknown number.",
    "I think it was +555-49-796 ",
    "I can't really remember...",
    "He said something about \"finishing wor\" with subject !2491a23BVB34Q and returning to Base _Aurora21",
    "Then after that he disappeared from my sight.",
    "As if he vanished in the shadows.",
    "A moment, shorter than a second, later, I saw the person flying off the top floor.",
    "I really don't know what happened there.",
    "This is all I saw, that night.",
    "I cannot explain it myself..."]);

