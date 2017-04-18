/**
 * Created by k.asenov on 1.3.2017 ã..
 */
function writeAsTemplate(input){
    "use strict";
    let pairs=[];
    for (let i = 0; i < input.length-1; i+=2) {
        pairs[input[i]]=input[i+1];
    }
    printTemplate(pairs);
    function printTemplate(pairs){
        let result="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n <quiz> \r\n";
        for (let pair in pairs){
            result+="\t<question>\r\n";
            result+="\t\t"+pair+"\r\n";
            result+="\t</question>\r\n";
            result+="\t<answer>\r\n";
            result+="\t\t"+pairs[pair]+"\r\n";
            result+="\t</answer>\r\n"
        }
        result+="</quiz>";
        console.log(result);
    }

}

writeAsTemplate(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]);