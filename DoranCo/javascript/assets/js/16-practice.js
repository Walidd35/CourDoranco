//todo Creates a ul in html
//todo Accesses the whole div parent
//todo Listens to the div
//todo Targets the clicked element
//todo Changes its font size to 28px

const narutoList = document.querySelector("#naruto-list");
console.log(narutoList);
// narutoList.style.backgroundColor = "blue";
narutoList.style.padding = "20px";

// narutoList.addEventListener("click", function (e) {
//   console.log(e.target.style.fontSize);
//   if (e.target.style.fontSize == "" || e.target.style.fontSize == "16px") {
//     e.target.style.fontSize = "28px";
//   } else if (e.target.style.fontSize == "28px") {
//     e.target.style.fontSize = "38px";
//     e.target.style.color = "red";
//   } else {
//     e.target.style.fontSize = "16px";
//     e.target.style.color = "black";
//   }
// });

// narutoList.addEventListener("dblclick", function (e) {
//   e.target.style.fontSize = "16px";
// });
// narutoList.addEventListener('click', function(e){
//     e.target.style.fontSize = '16px'
// })

// Method #1: we remove the id-ed created h2 before we add another one
narutoList.addEventListener("dblclick", (event) => {
  const narutoChara = document.querySelector('#naruto-chara')
  if (narutoChara) {
    narutoChara.remove()
  }
  const newH2 = document.createElement("h2");
  newH2.textContent = event.target.textContent;
  newH2.setAttribute('id', 'naruto-chara')
  const firstDiv = document.querySelector("#first-div");
  firstDiv.prepend(newH2);
  newH2.style.color = "red"
  event.target.style.color = "blue";
  level2Title.style.color = "blue";
});

// Method #2: we create the future h2 element in the global scope (empty variable) and then just put the context of the target click element in it

// const newH2 = document.createElement("h2");
// narutoList.addEventListener("dblclick", (event) => {
//   newH2.textContent = event.target.textContent;
//   const firstDiv = document.querySelector("#first-div");
//   firstDiv.prepend(newH2);
//   newH2.style.color = "red"
//   event.target.style.color = "blue";
//   level2Title.style.color = "blue";
// });

//todo Create a to do list (everytime you dbl click a element, it gets lined through)
const toDoList = document.querySelector("#to-do-list");
console.log(toDoList);
toDoList.addEventListener("click", (event) => {
  if (event.target.style.textDecoration == "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
});
