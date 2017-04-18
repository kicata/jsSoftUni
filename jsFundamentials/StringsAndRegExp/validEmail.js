/**
 * Created by k.asenov on 13.3.2017 ã..
 */
function validateEmail(input){
    let match=input.match(/^\w+@[a-z]{1,}.[a-z]{2}$/);
    if(match!= null){
        console.log("Valid");
    }else{
        console.log("Invalid");
    }

}
validateEmail("valid@email11.bg");