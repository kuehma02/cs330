function toggleDisabled() {
    isDisabled = document.getElementById("existingletters").disabled;
    if (isDisabled){
        document.getElementById("existingletters").disabled = false;
    } else{
        document.getElementById("existingletters").disabled = true;
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

    table = document.getElementById("resultsTable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc"; 
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
    // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (n==0) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                    }
                }
            } else if (dir == "desc") {
                if (n==0){
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        // If so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        break;
                      }
                }
                
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount ++; 
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function fillIn(){
    if (document.cookie != ""){
        cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            cookie = cookies[i].trim().split("=");
            if (cookie[0] == 'letter1') {
                document.scrabbleForm.letter1.value = cookie[1];
            }
            if (cookie[0] == 'letter2') {
                document.scrabbleForm.letter2.value = cookie[1];
            }
            if (cookie[0] == 'letter3') {
                document.scrabbleForm.letter3.value = cookie[1];
            }
            if (cookie[0] == 'letter4') {
                document.scrabbleForm.letter4.value = cookie[1];
            }
            if (cookie[0] == 'letter5') {
                document.scrabbleForm.letter5.value = cookie[1];
            }
            if (cookie[0] == 'letter6') {
                document.scrabbleForm.letter6.value = cookie[1];
            }
            if (cookie[0] == 'letter7') {
                document.scrabbleForm.letter7.value = cookie[1];
            }
            if (cookie[0] == 'dict'){
                document.scrabbleForm.dict.value = cookie[1];
            }
            if (cookie[0] == 'checked'){
                if (cookie[1] == 'attach')
                    document.scrabbleForm.attachExistingCheck.click()
            }
            if (cookie[0] == 'existing'){
                document.scrabbleForm.existingletters.value = cookie[1];
            }
        }
    }
}

$(document).ready(function() {
    toggleDisabled();
    fillIn();
});