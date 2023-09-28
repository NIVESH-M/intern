function validate()
{const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const username=form.username.value
    const password=form.password.value
    const authenticated=authentication(username,password)

    if(authenticated){
        alert("correct")
        window.location.href="month.html"
    }
    else{
        alert("wrong")
    }
})
function authentication(username,password){
    if(username==="intern"&&password==="admin"){
        return true
    }
    else{
        return false
    }
}
}
