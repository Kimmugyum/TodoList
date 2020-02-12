var blue = document.getElementById("blue")
blue.addEventListener('click', add)
getData()

function getData()  {
    $.ajax({
        url: 'http://localhost:8000/todos',
        type: 'GET', // data값 가져오는것
        success:function(data){
            for(var i = 0; i < data.length; i++){
                lineValue(data[i])
            }
        }
    })
}

function add() {// todoList 추가하는 것
    var line = document.getElementById("line")
    $.ajax({ 
        url: '/todos',
        type: 'POST', // 추가
        data: {
            'content': line.value
        },
        success:function(data){
            lineValue(data)
        }
    })
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
} 

function lineValue(data) {
    var boss = document.getElementById("boss") // 전체 부모
    var div = document.createElement("div")
    div.setAttribute("id", data.number)
    var input = document.createElement("input")
    div.appendChild(input)
    input.setAttribute("type","checkbox")
    input.setAttribute("class","box")
    var span = document.createElement("span")
    var value = document.createTextNode(data.bucketList)
    span.appendChild(value)
    div.appendChild(span)
    var i = document.createElement("i")
    i.setAttribute("class","fas fa-trash-alt delete")
    div.appendChild(i)     
    boss.appendChild(div)

    if(Number(data.do)) {// do값에 따라 취소선 생성
        input.checked = true;
        input.nextSibling.style.textDecoration = "line-through";
    }
    var discard = document.querySelector('div:last-child .delete')
    discard.addEventListener('click', garbage)
    var box = document.querySelector("div:last-child .box")
    box.addEventListener('click', checked)
}

function garbage(event) {//todoList 삭제
    var boss = document.getElementById("boss")
    var number = event.target.parentNode.id
    var unite = '/todos/' + number
    $.ajax({
        url: unite, // '/todos/' + number값 더해준것
        type: 'DELETE', 
        success:function(data){
            boss.removeChild(event.target.parentNode)
        }
    })
}

function checked(event)  {// checkbox 체크할시 밑줄생성
    var number = event.target.parentNode.id
    var todos = '/todos/' + number
    var play = "/1"
    var line = "line-through"

    if(!event.target.checked)  {
        play = "/0"
        line = "none"
    }
    $.ajax({
        url: todos + play, // do값을 1로 
        type: 'put',
        success:function(data){    
            event.target.nextElementSibling.style.textDecoration = line
        }
    })
}
