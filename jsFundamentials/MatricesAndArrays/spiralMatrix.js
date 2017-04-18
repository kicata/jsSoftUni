/**
 * Created by k.asenov on 9.3.2017 ã..
 */
function spiralMatrix([input]){
    let dimensions = input.split(" ").map(Number);
    let spiral=generateSpiralMatrix(dimensions[0]);
    console.log(spiral.map(row => row.join(' '))
        .join('\n'));

    function generateSpiralMatrix(n) {
        let[rMin,rMax,count,cMin,cMax,maxCount]=[0,n-1,1,0,n-1,n*n];
        let matrix=[];
        for(let i=0;i<n;i++){
            matrix[i]=[];
        }

        while(count<=maxCount){
            for(let c=cMin;c<=cMax && count<=maxCount;c++){
                matrix[rMin][c]=count++;
            }
            rMin++;
            for(let r=rMin;r<=rMax&& count<=maxCount;r++){
                matrix[r][cMax]=count++;
            }
            cMax--;
            for(let c=cMax;c>=cMin && count<=maxCount;c--){
                matrix[rMax][c]=count++;
            }
            rMax--;
            for(let r=rMax ;r>=rMin && count<=maxCount; r--){
                matrix[r][cMin]=count++;
            }
            cMin++;
        }
        return matrix;

    }
}
spiralMatrix("5 5");
