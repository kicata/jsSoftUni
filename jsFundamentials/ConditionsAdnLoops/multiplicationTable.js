/**
 * Created by k.asenov on 23.2.2017 ã..
 */
function drawMultiplicationTable(num){
    let table='<table border="1">\r\n';
    for (let i = 0; i <= num; i++) {
        table+="<tr>"
        for (var j = 0; j <= num; j++) {
            if(i==0 && j!=0){
                table+="<th>"
                table+=j;
                table+="</th>";

            }else if(j==0 && i!=0){
                table+="<th>"
                table+=i;
                table+="</th>";

            }else if (j==0&&i==0){
                table+="<th>"
                table+="x";
                table+="</th>";

            }else{
                table+="<td>"
                table+=i*j;
                table+="</td>";
            }
            //table+="\r\n";

        }
        table+="</tr>\r\n"

    }
    table+="</table>";
console.log(table);
}
drawMultiplicationTable(5);