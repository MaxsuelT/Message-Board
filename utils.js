const createBoard = function(ttl, ms){
    const div = document.createElement('div')
    const title = document.createElement('p')
    const closeBtn = document.createElement('span')
    const msg = document.createElement('p')
    div.classList.add('card')
    closeBtn.classList.add('closeBtn')

    title.textContent = ttl
    msg.textContent = ms
    closeBtn.innerHTML = 'x';
    div.append(closeBtn, title,msg)
    document.body.append(div)
}
const checkLength = function(title, msg){
    return title.value.length > 0 && title.value.length <= 20
        &&  msg.value.length > 0 && msg.value.length <= 250     
}


const clearBoard = function (title, msg){
    title.value = ""
    msg.value = ""
}



export {createBoard, checkLength, clearBoard}
