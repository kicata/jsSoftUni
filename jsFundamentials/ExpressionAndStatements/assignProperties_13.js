/**
 * Created by k.asenov on 22.2.2017 ã..
 */
function assignProp(input){
    "use strict";
    let obj={};
    for (var i = 0; i < input.length-1; i+=2)
    {

        obj[input[i]]=input[i+1];

    }

    //console.log(JSON.stringify(obj, null, 4));
    console.dir(obj);
}
assignProp(['name', 'Pesho', 'age', '23', 'gender', 'male']);