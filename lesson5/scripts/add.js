
const input = document.getElementById("favchap");
const addButton = document.getElementById("add");
const list = document.getElementById("list");


addButton.addEventListener("click", () => {
  if (input.value != null && input.value != "") addFavoriteChapter(input.value);
  else alert("Please, insert a chapter!");
});

input.addEventListener("keyup", (event) => {
  
  if (input.value != null && input.value != "" && event.key === "Enter")
    addFavoriteChapter(input.value);
});


const addFavoriteChapter = (favoriteChapter) => {
 
  let li = document.createElement("li");
  
  let delBtn = document.createElement("button");
 
  li.textContent = favoriteChapter;
 
  delBtn.textContent = "❌";
 
  li.appendChild(delBtn);
  
  list.appendChild(li);
  
  delBtn.addEventListener("click", () => list.removeChild(li));
  
  input.focus();
  
  input.value = "";
};