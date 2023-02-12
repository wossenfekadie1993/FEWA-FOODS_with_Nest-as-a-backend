const orderBtn = document.getElementById("orderBtn")
const cancelBtn = document.getElementById("cancelBtn")

const name = document.getElementById("Name")
const phone = document.getElementById("phone")
const address = document.getElementById("Address")
const food = document.getElementById("order")
const item = document.getElementById("item")
const message = document.getElementById("other-info")
const extra = document.getElementById("extra")
const error = document.getElementById("error")
const cancelInput = document.getElementById("cancelInput")
const displayOrder = document.getElementById("displayOrder")
const getInput = document.getElementById("getInput")
const getBtn = document.getElementById("getBtn")
const order = async () => {
    const jwt = localStorage.getItem("jwt")
    if(!jwt){
        return
    }
    
    const response = await fetch("http://localhost:4000/order", {
        method: "POST",
        body: JSON.stringify({
            
    
                name: name.value ,
                Phone: phone.value,
                food: food.value ,
                itemsNo: Number(item.value),
                message: message.value,
                Extra: extra.value,
                Address: address.value
            
        }),
        credentials: "same-origin",
        headers: {
            "content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${jwt}` 
        }
    })
    console.log("reached")
    const data = await response.json()
    console.log(data)
    
    
}

const deleteOrder = async () => {
    const jwt = localStorage.getItem("jwt")
    if(!jwt){
        return
    }
    
    const Phone = cancelInput.value
    const response = await fetch(`http://localhost:4000/order/${Phone}`, {
        method: "Delete",
        param: JSON.stringify({
            Phone: Phone
        }),
        credentials: "same-origin",
        headers: {
            "content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${jwt}` 
        }
    })
    console.log("reached")
    const data = await response.json()
    console.log(data)
    
    
}

const getOrder = async () => {
    const jwt = localStorage.getItem("jwt")
    if(!jwt){
        return
    }
    
    const Phone = getInput.value
    const response = await fetch(`http://localhost:4000/order/${Phone}`, {
        method: "Get",
        param: JSON.stringify({
            Phone: Phone
        }),
        credentials: "same-origin",
        headers: {
            "content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${jwt}` 
        }
    })
    console.log("reached")
    const data = await response.json()
    console.log(data)
    if(!data.success){
        return
    }

    displayOrder.innerHTML = `Food: ${data.order.food} <br> Total: ${data.order.itemsNo}`
    
    
}



orderBtn.addEventListener("click", (e) => {
    e.preventDefault()
    order()
})

cancelBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if(cancelInput.value.length === 0 || !cancelInput.value){
        return
    }
    deleteOrder()
})

getBtn.addEventListener("click", () => {
    if(getInput.value === 0 || !getInput.value){
        return
    }
    getOrder()
})