var blue = document.getElementById("blue")
blue.addEventListener('click', add)
let id = 0; // id값 설정

 var todoList = [
    {
    id : 0,
    do : true,
    value : "할일"
    },
    {   id : 1,
    do : false,
    value : "할일2"
    },
    {
    id : 2,
    do : true,
    value : '3'
    }
]

lineValue(todoList[0].value)
lineValue(todoList[1].value)
lineValue(todoList[2].value)

function add() // todoLIst 추가하는 것
{
    var line = document.getElementById("line")
    lineValue(line.value)
    todoList.push({
        id : todoList.length,
        do : false,
        value : line.value
    })
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
        c.setAttribute("id", id)
        var d = document.createTextNode(value)
        c.appendChild(d)
        a.appendChild(c)
        var e = document.createElement("i")
        e.setAttribute("class","fas fa-trash-alt delete")
        a.appendChild(e)     
        boss.appendChild(a)
        todoListCheck()
        id++ // i값 증가

    var discard = document.querySelector('div:last-child .delete')
    discard.addEventListener('click', garbage)
    var box = document.querySelector("div:last-child .box")
    box.addEventListener('click', checked)
}

function todoListCheck()
{
    var boss = document.getElementById("boss")
    for(var j = 0; j < todoList.length; j++){
    if(todoList[j].do == true)
    {
        boss.firstChild.nextElementSibling.style.textDecoration = "line-through";
    }
    }   
}

function garbage(event) //todoList 삭제
{   
    var boss = document.getElementById("boss")
    boss.removeChild(event.target.parentNode)
    todoList.splice(event.target.parentNode.firstChild.nextElementSibling.id,1)
}

function checked(event){ // checkbox 체크할시 밑줄생성
    
    if(event.target.checked == true)
    {
        this.nextElementSibling.style.textDecoration = "line-through";
    }
    else
    {
       this.nextElementSibling.style.textDecoration = "none"
    }
}