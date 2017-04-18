/**
 * Created by k.asenov on 20.3.2017 ã..
 */
function sortUsernames(input){
    let sorted=input.sort((x, y)=>x.length>y.length?1:x.length<y.length?-1:x>y);
    let set=new Set();
    set.add(input);
    for(let name of set){
        console.log(name);
    }
}
//sortUsernames(["Ashton", "Kutcher", "Ariel", "Lilly", "Keyden", "Aizen","Billy","Braston"]);
sortUsernames(["Denise", "Ignatius", "Iris", "Isacc", "Indie", "Dean", "Donatello", "Enfuego", "Benjamin", "Biser", "Bounty", "Renard", "Rot"]);