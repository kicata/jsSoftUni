/**
 * Created by k.asenov on 17.3.2017 ã..
 */
function extractUniqueWords(input){
    let words= new Set();
    let result="";
    for(let line of input){
        let arr= line.toLowerCase().split(/\W+/);
        arr.forEach(x=>words.add(x));
    }
    for(let word of words){
        result+=word;
        result+=", ";
    }
    console.log(result);
}
extractUniqueWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
    "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
    "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
    "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
    "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
    "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
    "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."]);