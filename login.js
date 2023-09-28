function validate()
{const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const username=form.username.value
    const password=form.password.value
    const authenticated=authentication(username,password)

    if(authenticated){
        alert("correct")
        window.location.href="week.html"
    }
    else{
        alert("wrong")
    }
})
function authentication(username,password){
    if(username==="admin"&&password==="user"){
        return true
    }
    else{
        return false
    }
}
}