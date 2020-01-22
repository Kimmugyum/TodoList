var blue = document.getElementById("blue")
blue.addEventListener('click', add)
linevalue("할일")
function add()
{
    var line = document.getElementById("line")
    linevalue(line.value)
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
}
function linevalue(a)
{
    var boss = document.getElementById("boss") // 전체 부모
    boss.innerHTML += `
    <div>
        <input type = "checkbox" onclick = "addEventListener('click', checked)">
        <span>${a}</span>
        <input type ="button" class = "delete" onclick = "addEventListener('click', garbage)" value = "삭제">
    </div>`
}
function garbage(event)
{   
    var boss = document.getElementById("boss")
    boss.removeChild(event.target.parentNode)
}

function checked(event)
{   
    if(event.target.checked == true)
    {
        this.nextElementSibling.style.textDecoration = "line-through";
    }
    else
    {
       this.nextElementSibling.style.textDecoration = "none"
    }
}

var discard = document.getElementsByClassName("delete")
for(var i = 0; i < discard.length; i++){
    discard[i].addEventListener('click', garbage)
}

var box = document.getElementsByClassName("box")
for(var i = 0; i < box.length; i++)
{
    box[i].addEventListener('click', checked)
}
add()