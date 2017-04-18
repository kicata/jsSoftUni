/**
 * Created by k.asenov on 10.3.2017 ã..
 */
function countOccurance(input){
    let needle= input[0];
    let stack= input[1];
    let count= 0;
    let index=stack.indexOf(needle,0);
    while(index!=-1){
        count++;
        index = stack.indexOf(needle,index+1);
    }
    console.log(count);
}
countOccurance(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']);