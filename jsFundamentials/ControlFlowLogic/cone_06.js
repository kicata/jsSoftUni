/**
 * Created by k.asenov on 21.2.2017 ã..
 */
function calcConSurfaceAndVolume([r,h]){

//Surface area = ?rs + ?r2
//Volume = 1/3?r2h
[r,h]=[r,h].map(Number);
    let s= Math.sqrt(Math.pow(r,2)+Math.pow(h,2));
    let sArea = Math.PI*r*s + Math.PI*r*r;
    let volume = Math.PI*r*r*h/3;
    console.log("volume = "+ volume.toFixed(4));
    console.log("area = "+ sArea.toFixed(4));

}
calcConSurfaceAndVolume([3.3,7.8]);