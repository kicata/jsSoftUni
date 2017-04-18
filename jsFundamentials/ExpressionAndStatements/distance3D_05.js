/**
 * Created by k.asenov on 22.2.2017 ã..
 */
function distance3D(input){
    "use strict";
    let p1={x:input[0],y:input[1],z:input[2]};
    let p2={x:input[3],y:input[4],z:input[5]};

    let dist3D=Math.sqrt(Math.pow((p1.x-p2.x),2)+Math.pow((p1.y-p2.y),2)+Math.pow((p1.z-p2.z),2));
    console.log(dist3D);
}
distance3D([3.5, 0, 1, 0, 2, -1]);