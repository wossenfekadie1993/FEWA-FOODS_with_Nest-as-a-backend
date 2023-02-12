const submitBtn = document.getElementById("submitBtn")
const password = document.getElementById("password")
const email = document.getElementById("email")
const signupBtn = document.getElementById("signupBtn")
const signupUserName = document.getElementById("signupUserName")
const signupEmail = document.getElementById("signupEmail")
const signupPassword = document.getElementById("signupPassword")

const loginIn = async () => {
    console.log(email.value, password.value)
    const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            password: password.value
        }),
        credentials: "same-origin",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    const data = await response.json()
    if(data.success){
        localStorage.setItem("jwt", data.jwt)
        window.location.href = "./index.html"
    }
}

const signUp = async () => {
    
    const response = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        body: JSON.stringify({
            name: signupUserName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }),
        credentials: "same-origin",
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
    const data = await response.json()
    console.log(data)
    if(data.success){
        localStorage.setItem("jwt", data.jwt)
        window.location.href = "./index.html"
        return
    }
    
}
submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    loginIn()

})

signupBtn.addEventListener("click", (e) => {
    e.preventDefault()
    signUp()
})