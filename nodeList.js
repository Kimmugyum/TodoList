var blue = document.getElementById("blue")

function add()
{
    var line = document.getElementById("line")
    var boss = document.getElementById("boss") // 전체 부모
    boss.innerHTML += `
    <div>
        <input type = "checkbox">
        <span>${line.value}</span>
        <input type ="button" class = "delete" value = "삭제">
    </div>`
    line.value = "" // input에 값은 value를 쓰고 input값이 아닌것은 innerText or innerHTML쓴다.
}
function delete()
{

}
blue.addEventListener('click', add)