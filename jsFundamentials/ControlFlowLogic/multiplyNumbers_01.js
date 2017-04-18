/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function multiplyNums(nums){
    "use strict";
    let result=1;
    for(let i=0;i<nums.length;i++){
        result*=Number(nums[i]);
    }
    console.log(result);
}
multiplyNums([23632.36,-12.3249]);