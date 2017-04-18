/**
 * Created by k.asenov on 17.2.2017 ã..
 */
function getDistanceBtwPoins([x1,y1,x2,y2]){
    let pointA ={x:x1,y:y1};
    let pointB = {x:x2,y:y2};
    let xDist=Math.pow(pointA.x-pointB.x,2);
    let yDist= Math.pow(pointA.y-pointB.y,2);

    console.log(Math.sqrt(xDist+yDist));
}
getDistanceBtwPoins(['2.34', '15.66', '-13.55', '-2.9985']);