/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function isPrime(num){
    "use strict";
    let isPrime = true;

        for (let d = 2; d <= Math.sqrt(num); d++) {
            if (num % d == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime && (num > 1);
}
console.log(isPrime(1));