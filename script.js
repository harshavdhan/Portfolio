let menu = document.getElementById("menu");
let nav_items = document.getElementById("nav-items")
let items = document.querySelector("#nav-items ul")
let cross = document.querySelector(".cross");



menu.addEventListener('click', function () {
    nav_items.style.display = "block "
    items.style.flexDirection = "column"
    nav_items.style.position = "absolute";
    nav_items.style.right = "1rem"
    nav_items.style.top = "10vh"
    nav_items.style.padding = "2rem"

    menu.style.display = "none";
    cross.style.display = "block";

})

cross.addEventListener('click', function () {
    nav_items.style.display = "none";
    menu.style.display = "block";
    cross.style.display = "none";
});