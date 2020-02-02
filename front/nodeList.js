var blue = document.getElementById("blue")
blue.addEventListener('click', add)

 var todoList = [
    {
        id : 1,
        do : true,
        value : "할일"
    },
    {
        id : 2,
        do : false,
        value : "할일2"
    },
    {
        id : 3,
        do : true,
        value : '3'
    }
]

lineValue(todoList[0])
lineValue(todoList[1])
lineValue(todoList[2])

function add() // todoLIst 추가하는 것
{
    var line = document.getElementById("line")
    todoList.push
    ({
        id : todoList.length,
        do : false,
        value : line.value
    })
    lineValue(todoList[todoList.length-1])
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
} 

function lineValue(todoList)
{
    var boss = document.getElementById("boss") // 전체 부모
    var div = document.createElement("div")
    div.setAttribute("id", todoList.id)
    var input = document.createElement("input")
    div.appendChild(input)
    input.setAttribute("type","checkbox")
    input.setAttribute("class","box")
    var span = document.createElement("span")
    var value = document.createTextNode(todoList.value)
    span.appendChild(value)
    div.appendChild(span)
    var i = document.createElement("i")
    i.setAttribute("class","fas fa-trash-alt delete")
    div.appendChild(i)     
    boss.appendChild(div)
    if(todoList.do == true)
    {
        input.nextElementSibling.style.textDecoration = "line-through" // do : true 일시 밑줄생성
    }
    var discard = document.querySelector('div:last-child .delete')
    discard.addEventListener('click', garbage)
    var box = document.querySelector("div:last-child .box")
    box.addEventListener('click', checked)
}

function garbage(event) //todoList 삭제
{   
    var boss = document.getElementById("boss")
    boss.removeChild(event.target.parentNode)
    // todoList.splice(,1) // alert(obj.findIndex(i => i.name == 'aaa')) // todoList 삭제버튼 이렇게 수정하기
}

function checked(event)  // checkbox 체크할시 밑줄생성
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