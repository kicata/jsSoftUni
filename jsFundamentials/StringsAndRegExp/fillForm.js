/**
 * Created by k.asenov on 13.3.2017 �..
 */
function fillForm(input){
    let[username,email,phone]=[input.shift(),input.shift(),input.shift()];
    input.forEach(line=>{
        line=line.replace(/<![a-zA-Z]+!>/g,username);
        line=line.replace(/<@[a-zA-Z]+@>/g,email);
        line=line.replace(/<\+[a-zA-Z]+\+>/g,phone);
        console.log(line);
    });

}
fillForm(["Pesho",
"pesho@softuni.bg",
"90-60-90",
"Hello, <!username!>!Welcome to your Personal profile." +
"Here you can modify your profile freely." +
"Your current username is: <!fdsfs!>. " +
"Would you like to change that? (Y/N)" +
"Your current email is: <@DasEmail@>. " +
"Would you like to change that? (Y/N)" +
"Your current phone number is: <+number+>. Would you like to change that? (Y/N)"]
)