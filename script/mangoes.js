

let arr=JSON.parse(localStorage.getItem("all_items"))||[]



import {navbar} from  "../container/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

import sidebar from "../content/sidebar.js"
document.getElementById("sidebar").innerHTML=sidebar()
import footerrr from "../content/footer1.js";
document.getElementById("footer").innerHTML=footerrr()


let mangoes=JSON.parse(localStorage.getItem("items"))

console.log(mangoes)

let m=mangoes.mangoes

m.map(({src,name,price})=>{

let div=document.createElement("div")
div.setAttribute("class","div1")
let image=document.createElement("img")
image.src=src;
let name1=document.createElement("p")
name1.innerText=name;
name1.setAttribute("class","naam")
let price1=document.createElement("p")
price1.innerText=`Price:  ${Number(price)}/- `
price1.setAttribute("class","daam")
let button=document.createElement("button")
button.innerText="Add To Cart"
button.addEventListener("click",function(){
    mango_data({src,name,price})
})
div.append(image,name1,price1,button)
document.getElementById("show_products").append(div)

})

let mango_data=({src,name,price})=>{
  
 arr.push({src,name,price})
 localStorage.setItem("all_items",JSON.stringify(arr))
 window.location.reload()
   
}


document.getElementById("cart_no").innerText=arr.length
document.getElementById("cart_home").addEventListener("click",function(){
    window.location.href="checkout.html";
})
document.getElementById("img").addEventListener("click",function(){
    window.location.href="index.html";
})
document.getElementById("wallet").addEventListener("click",function(){
    window.location.href="wallet.html";
})
