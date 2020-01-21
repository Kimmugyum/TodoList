var blue = document.getElementById("blue")
blue.addEventListener('click', add)

function add()
{
    var line = document.getElementById("line")
    var boss = document.getElementById("boss") // 전체 부모
    boss.innerHTML += `
    <div class = "clean">
        <input type = "checkbox">
        <span>${line.value}</span>
        <input type ="button" class = "delete" value = "삭제">
    </div>`
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
}
function clickHandler(event)
{
    var boss = document.getElementById("boss")
    boss.removeChild(event.target.parentNode)
}

function checked()
{   
    var span = document.getElementsByTagName("span")
    
    for(var i =0; i < span.length; i++)
    {
        if(box[i].checked == true){
        span[i].style.textDecoration = "line-through";
        }
        else
        {
            span[i].style.textDecoration = "none"
        }
    }
}
var discard = document.getElementsByClassName("delete")
    for(var i = 0; i < discard.length; i++){
        discard[i].addEventListener('click', clickHandler)
}

var box = document.getElementsByClassName("box")
    for(var i = 0; i < box.length; i++)
    {
        box[i].addEventListener('click', checked)
    }
