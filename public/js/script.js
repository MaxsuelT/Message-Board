const dropdown = document.querySelector(".dropdown-list")




dropdown.addEventListener('click', event =>{
    const edit = document.querySelector(".dropdown-edit")
    const delete_ = document.querySelector(".delete-form")
    edit.classList.toggle('hidden')
    delete_.classList.toggle('hidden')

})


// })