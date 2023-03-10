let boxes = document.querySelectorAll(".box");
let dragElements = document.querySelectorAll("img");
let checkBtn = document.getElementById("checkButton");

boxes.forEach(box => {
    box.ondragover = function (e) {
        e.preventDefault();
    }
    box.ondrop = function () {
        dragElements.forEach(drag => {
            drag.ondragend = function (e) {
                box.style.border = "none";
                box.innerHTML = "";
                box.append(e.target);
            }
        })
        
    }
    box.ondragend = function () {
                box.style.border = "1px solid black";
                box.innerHTML = "?";
            }
        
})

for (let i = 1; i <= 9; i++) {
    document.querySelector(`.drop-img${i}`).innerHTML = `${i}`;
    document.querySelector(`.drop-img${i}`).style.fontSize = "24px";
}

checkBtn.onclick = function () {
    let count = 0;
    for (let i = 1; i <= 9; i++) {
        if (document.querySelector(`.drop-img${i}`).contains(document.querySelector(`#img${i}`))) {
            count++;
        }
    }
    if (count == 9) {
        alert("you won");
        document.getElementById("nextLevel").style.display = "block";

    } else {
        alert("boo boo");
        window.location.reload();
    }
}
