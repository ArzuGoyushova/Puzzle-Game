let boxes = document.querySelectorAll(".box");
let dragElements = document.querySelectorAll("img");


boxes.forEach(box => {
    box.ondragover = function(e){
        e.preventDefault();
    }
    box.ondrop = function () {
        dragElements.forEach(drag=>{
            drag.ondragend = function (e){
                box.append(e.target);
                
            }
        })
        
    }
    })

    
// function allowDrop(ev) {
//     ev.preventDefault();
// }

// function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }
