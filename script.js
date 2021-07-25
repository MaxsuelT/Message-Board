import {createBoard, checkLength, clearBoard} from "./utils.js"

const btn = document.querySelector('.btn-add')

const popUpContainer = document.querySelector('.popUpContainer')
btn.addEventListener('click', () =>{
    
    popUpContainer.style.display = 'block';
    popUpContainer.style.position= 'absolute';

    popUpContainer.addEventListener('click',event=>{
        const cl = event.target.classList;
        if (cl.value === 'popUpContainer'){
            event.target.style = 'none'
        }
        
    })

})


const submitBtn = document.querySelector('#bnt-send')
 
submitBtn.addEventListener('click', () =>{
    
    const title = document.querySelector('#title')
    const msg = document.querySelector('#message')
    if (checkLength(title, msg)){
        createBoard(title.value, msg.value);
        popUpContainer.style.display ='none'
        clearBoard(title, msg)
    }
   
})

document.addEventListener('click', event =>{
    const cl = event.target.className
    if(cl === 'closeBtn'){
        event.target.parentNode.remove()
        
    } 
})

