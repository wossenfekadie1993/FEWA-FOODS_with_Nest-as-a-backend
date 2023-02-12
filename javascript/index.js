const All = document.querySelector("#All")
const Habeshas = document.getElementById("Habesha")
const Burgers = document.getElementById("Burger")
const Pizzas = document.getElementById("Pizza")
const Drinks= document.getElementById("Drink")
const Habesha = document.getElementsByClassName("Habesha")
const Burger = document.getElementsByClassName("Burger")
const Pizza = document.getElementsByClassName("Pizza")
const Drink= document.getElementsByClassName("Drink")
const td = document.getElementsByTagName("td")

All.addEventListener("click",function(){
    for(let i=0;i<td.length;i++){ 
        td[i].classList.replace("d-none","on")
}
})
Habeshas.addEventListener("click",function(){
for(let i=0;i<td.length;i++){ 
        td[i].classList.replace("on","d-none")
    
}  
for(let i=0;i<td.length;i++){ 
    Habesha[i].classList.replace("d-none","on")

}  
})
Burgers.addEventListener("click",function(){
for(let i=0;i<td.length;i++){ 
        td[i].classList.replace("on","d-none")
    
}  
for(let i=0;i<Burger.length;i++){ 
    Burger[i].classList.replace("d-none","on")

}  
})
Pizzas.addEventListener("click",function(){
for(let i=0;i<td.length;i++){ 
        td[i].classList.replace("on","d-none")
    
}  
for(let i=0;i<Pizza.length;i++){ 
    Pizza[i].classList.replace("d-none","on")

}
})   
Drinks.addEventListener("click",function(){
for(let i=0;i<td.length;i++){ 
        td[i].classList.replace("on","d-none")
    
}  
for(let i=0;i<Drink.length;i++){ 
    Drink[i].classList.replace("d-none","on")
}
})
