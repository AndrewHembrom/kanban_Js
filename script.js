// Add Task Card
function addTaskCard() {
    const taskCont = document.getElementById("todo-cont");
    console.log(taskCont);
    const card = `
    <div id="task" class="task" draggable="true" ondragstart="dragstartHandler(event)"">
        <strong>Title</strong>
        <p>Description</p>
    </div>
    `
    taskCont.innerHTML += card;
}

// Drag and Drop Handlers
function dragstartHandler(ev) {
    console.log("ev target");
    console.log(ev.target);
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("drag start called");
}

// window.addEventListener("DOMContentLoaded", () => {
//     // Get the element by id
//     const element = document.getElementsByClassName("tasks");
//     // Add the ondragstart event listener
//     element.addEventListener("dragstart", dragstartHandler);
//   });

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    console.log("drag over called");
}

function dropHandler(ev) {
    console.log("drop called");
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}