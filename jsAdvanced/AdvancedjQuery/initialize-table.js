/**
 * Created by k.asenov on 31.3.2017 ã..
 */
function initializeTable(){
    "use strict";

    $("#createLink").on("click",createRow);
    let $table=$("#countriesTable");
    function createRow(){
    /*<tr>
        <td><input type="text" id="newCountryText" /></td>
            <td><input type="text" id="newCapitalText" /></td>
            <td><a href="#" id="createLink">[Create]</a></td>
        </tr>*/
        let country =$("#newCountryText").val();
        let city = $("#newCapitalText").val();
        let $tr = $("<tr></tr>");
        $tr.append($("<td></td>").text(country));
        $tr.append($("<td></td>").text(city));
        let $tdActions=$("<td></td>");
        let $aUp = $('<a href="#" class="upLink">[Up]</a>').on("click",moveRowUp);
        $tdActions.append($aUp);
        let $aDown = $('<a href="#" class="downLink">[Down]</a>').on("click",moveRowDown);
        $tdActions.append($aDown);
        let $aDelete=$('<a href="#" class="deleteLink">[Delete]</a>').on("click",deleteRow);
        $tdActions.append($aDelete);
        $tr.append($tdActions);
        $table.append($tr);
        filterTable();
    }
    function deleteRow(){
      $(this).parent().parent().remove();
        filterTable();
    }

    function moveRowUp(){
        console.log("Up is here");
    }

    function moveRowDown(){
        console.log("down is here");
    }

    function filterTable(){
        $("#countriesTable:last-child a.downLink").remove();

    }
}