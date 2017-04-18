/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function generateUserNames(input){
    //peshoo@gmail.com',
    let result=[];
    for(let line of input){
        let arr = line.split("@");
        let username = arr[0];
        let secArr=arr[1].split(".");
        let secPart=".";
        for(let word of secArr){
            secPart += word[0];
        }
        username+=secPart;
        result.push(username);
    }
    console.log(result.join(", "));
}
generateUserNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);