var blue = document.getElementById("blue")
blue.addEventListener('click', add)

 var todoList = ['할일','할일2','3']

lineValue(todoList[0])
lineValue(todoList[1])
lineValue(todoList[2])

function add()
{
    var line = document.getElementById("line")
    lineValue(line.value)
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
} 
function lineValue(value)
{
    var boss = document.getElementById("boss") // 전체 부모
        var a = document.createElement("div")
        var b = document.createElement("input")
        a.appendChild(b)
        b.setAttribute("type","checkbox")
        b.setAttribute("class","box")
        var c = document.createElement("span")
        var d = document.createTextNode(value)
        c.appendChild(d)
        a.appendChild(c)
        var e = document.createElement("i")
        e.setAttribute("class","fas fa-trash-alt delete")
        a.appendChild(e)     
        boss.appendChild(a)

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