/**
 * Created by k.asenov on 17.2.2017 �..
 */
function figureArea([w,h,W,H]){
    let [s1, s2, s3] = [w * h, W * H,
        Math.min(w, W) * Math.min(h, H)];
    console.log(s1 + s2 - s3);
}
figureArea(['13', '2', '5', '8']);