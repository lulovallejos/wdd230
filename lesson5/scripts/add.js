const list = document.getElementById('list');
const buttom = document.getElementById('add');
const input = document.getElementById('favchap');

buttom.addEventListener("click", () =>
{
    if (input.value != '')
    {
        li = document.createElement("li");
        deleteBtn = document.createElement('add');
        li.innerText = input.value;
        deleteBtn.innerText = '❌';
        li.appendChild(deleteBtn);
        list.appendChild(li);
        deleteBtn.addEventListener ("click", (event) =>
        {
            event.currentTarget.parentNode.remove();
            input.focus();
        });
        input.focus();
        input.value = '';
    }
})