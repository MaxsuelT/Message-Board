const createBoard = (ttl, ms) =>{
    const div = document.createElement('div')
    const title = document.createElement('p')
    const msg = document.createElement('p')
    const closeBtn = document.createElement('span')
  
    div.classList.add('card')
    closeBtn.classList.add('closeBtn')

    title.textContent = ttl
    msg.textContent = ms
    closeBtn.innerHTML = 'x';
    div.append(closeBtn, title,msg)
    document.body.append(div)
}
const checkLength = (title, msg, type) =>{
    return title[type].trim().length > 0 && title[type].trim().length <= 20
        &&  msg[type].trim().length > 0 && msg[type].trim().length <= 200     
}


const clearBoard =  (title, msg) =>{
    title.value = ""
    msg.value = ""
}



export {createBoard, checkLength, clearBoard}
