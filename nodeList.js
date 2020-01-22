var blue = document.getElementById("blue")
blue.addEventListener('click', add)
// var todoList = [{
//     ''
// }]
//배열로 하기
lineValue("할일")
lineValue("할일2")
lineValue(3)

function add()
{
    var line = document.getElementById("line")
    lineValue(line.value)
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
} 
function lineValue(value)
{
    var boss = document.getElementById("boss") // 전체 부모
    // for(var i =0; i<)
    boss.innerHTML += `
    <div>
        <input type = "checkbox" onclick = "addEventListener('click', checked)">
        <span>${value}</span>
        <i class="fas fa-trash-alt delete"></i>
    </div>`
    var discard = document.querySelector('div:last-child .delete')
    discard.addEventListener('click', garbage)
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



var box = document.getElementsByClassName("box")
for(var i = 0; i < box.length; i++)
{
    box[i].addEventListener('click', checked)
}