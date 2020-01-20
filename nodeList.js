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
function waste(){
    var a = document.getElementsByClassName
}
function deteleChild()
{
    var clean = document.getElementsByClassName("clean")
    
    clean[0].innerHTML = "" // 삭제 버튼을 클릭 했을때 discard[0]번째랑 clena[0]
}
function clickHandler()
{
        discard[i].onclick = deteleChild()
}


    var discard = document.getElementsByClassName("delete")

    for(var i = 0; i < discard.length; i++)
    {
        discard[i].addEventListener('click', clickHandler)
    }
    var deleChild = document.getElementById("boss")


