/* BRON: http://www.w3schools.com/howto/howto_js_dropdown.asp */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function filter() {
    document.getElementById("myDropdownfilter").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnfilter')) {

        var dropdowns = document.getElementsByClassName("dropdown-content-filter");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* Blijkbaar laat de onderste code de dropdown openstaan, reden: ? */
(function () {
    "use strict";
})

function sorteer() {
    document.getElementById("myDropdownsorteer").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnsorteer')) {

        var dropdowns = document.getElementsByClassName("dropdown-content-sorteer");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* Blijkbaar laat de onderste code de dropdown openstaan, reden: ? */
(function () {
    "use strict";
})

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdownmenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnmenu')) {

        var dropdowns = document.getElementsByClassName("dropdown-contentmenu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

var hack = document.getElementById("hack");

hack.onclick = function pictureChange() {
    document.getElementById('theImage').src = "http://www.clipartbest.com/cliparts/KTj/qR9/KTjqR9bTq.png";
};