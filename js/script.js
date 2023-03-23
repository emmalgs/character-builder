function userInput(event) {
    event.preventDefault();
    reset();
    const height = document.querySelector("input[name='height']:checked").value;
    const acc = document.querySelector("input[name='acc']:checked").value;
    const ability = document.querySelector("input[name='ability']:checked").value;
    const color = document.querySelector("input[name='color']:checked").value;
    const pp = document.querySelector("input[name='pp']:checked").value;
    chooseCharacter(height, acc, ability, color, pp)
}
function chooseCharacter(height, acc, ability, color, pp) {
    if(height === "height1" && acc === "acc1" && ability === "ability1" && color === "color1" && pp === "pp1") {
    document.getElementById("sonic").removeAttribute("class");
    } 
}
function reset() {
    document.getElementById("sonic").setAttribute("class", "hidden")
    document.getElementById("spiderman").setAttribute("class", "hidden")
    document.getElementById("tom&jerry").setAttribute("class", "hidden")
    document.getElementById("elmer").setAttribute("class", "hidden")
    document.getElementById("dexter").setAttribute("class", "hidden")
    document.getElementById("inspector").setAttribute("class", "hidden")
}
window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", userInput)
})
