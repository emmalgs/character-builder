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
    const sonic = document.getElementById("sonic");
    const spiderman = document.getElementById("spiderman");
    const tj = document.getElementById("tom&jerry");
    const elmer = document.getElementById("elmer");
    const dexter = document.getElementById("dexter");
    const inspector = document.getElementById("inspector");
    let randomNum = (Math.floor(Math.random() * 6) + 1).toString();
    console.log(typeof randomNum, randomNum)
    console.log(sonic.dataset.num)
    if (height === "height1" 
        && acc === "acc1" 
        && ability === "ability1" 
        && color === "color1" 
        && pp === "pp1") {
        sonic.removeAttribute("class");
    } else if (height === "height2" 
        && acc === "acc2" 
        && ability === "ability2" 
        && color === "color2" 
        && pp === "pp2") {
        spiderman.removeAttribute("class");
    } else if (height === "height3" 
        && acc === "acc3" 
        && ability === "ability3" 
        && color === "color3" 
        && pp === "pp3") {
        tj.removeAttribute("class");
    } else if (height === "height1" 
        && acc === "acc4" 
        && ability === "ability4" 
        && color === "color4" 
        && pp === "pp4") {
        elmer.removeAttribute("class");
    } else if (height === "height4" 
        && acc === "acc5" 
        && ability === "ability5" 
        && color === "color5" 
        && pp === "pp5") {
        dexter.removeAttribute("class");
    } else if (height === "height1" 
        && acc === "acc6" 
        && ability === "ability6" 
        && color === "color6" 
        && pp === "pp6") {
        inspector.removeAttribute("class");
    } else {
        if (randomNum === sonic.dataset.num) {
            sonic.removeAttribute("class");
        } else if (randomNum === spiderman.dataset.num) {
            spiderman.removeAttribute("class");
        } else if (randomNum === tj.dataset.num) {
            tj.removeAttribute("class");
        } else if (randomNum === elmer.dataset.num) {
            elmer.removeAttribute("class");
        } else if (randomNum === dexter.dataset.num) {
            dexter.removeAttribute("class");
        } else if (randomNum === inspector.dataset.num) {
            inspector.removeAttribute("class");
        }
    }
}

// function random() {
//     return Math.floor(Math.random() * 6) + 1
// }

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
