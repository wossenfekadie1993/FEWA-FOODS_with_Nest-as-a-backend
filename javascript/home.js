const logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("jwt")
    window.location.href = "./login.html"
})