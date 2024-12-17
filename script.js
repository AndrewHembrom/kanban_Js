

taskEls = document.querySelectorAll(".task");
console.log(taskEls);
for (const tasks of taskEls) { 
    tasks.addEventListener("click", () => { 
    console.log("Clicked")
})
}