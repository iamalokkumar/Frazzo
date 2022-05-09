import {navbar} from  "../container/navbar.js";
document.getElementById("navbar").innerHTML=navbar()

let dat=JSON.parse(localStorage.getItem("all_items"))

let arr=JSON.parse(localStorage.getItem("all_items"))||[]

dat.map(({src,name},index)=>{
let d=document.createElement("div")
d.setAttribute("class","d")
let i=document.createElement("img")
i.src=src;
i.setAttribute("class","ss")
let n=document.createElement("p")
n.innerText=name
n.setAttribute("class","pp")
let b=document.createElement("button")
b.innerText="Remove"
b.setAttribute("class","b")
b.addEventListener("click",function(){
    remov({src,name},index)
})


d.append(i,n,b)
document.getElementById("part1").append(d,)
})



 let remov=({src,name},index)=>{
   
dat.splice(index,1)
    
localStorage.setItem("all_items",JSON.stringify(dat))
window.location.reload()

}


let tr=dat.reduce(function(sum,elem){
   return sum+elem.price
},0)


let d=document.createElement("p")
d.innerText="BILL DETAILS"
d.setAttribute("class","d")

document.getElementById("part2").append(d)

let d1=document.createElement("p")
d1.innerText=`${dat.length } * Total item Price :   ${tr}/-   `
d1.setAttribute("class","d1")
document.getElementById("part2").append(d1)

let d2=document.createElement("p")
d2.innerText=`Price Savings : ${26}`
d2.setAttribute("class","d2")
document.getElementById("part2").append(d2)

let d3=document.createElement("p")
d3.innerText=`Cart Amount : ${tr-26}`
d3.setAttribute("class","d3")
document.getElementById("part2").append(d3)

let d4=document.createElement("p")
d4.innerText=`Delivery Charges : ${30}`
d4.setAttribute("class","d4")
document.getElementById("part2").append(d4)

let d5=document.createElement("p")
d5.innerText=`To Pay(saved ${tr-(tr-56)}) : ${(tr-26)+30}`
d5.setAttribute("class","d5")
document.getElementById("part2").append(d5)


let yy=document.querySelector("#nm")
yy.innerHTML=`Total ${(tr-26)+30}`

document.getElementById("part2").append(yy)



let gh=()=>{
    window.location.href="Adress.html"
}

yy.addEventListener("click",gh)





document.getElementById("cart_no").innerHTML=arr.length
document.getElementById("cart_home").addEventListener("click",function(){
    window.location.href="checkout.html";
})
document.getElementById("img").addEventListener("click",function(){
    window.location.href="index.html";
})
document.getElementById("wallet").addEventListener("click",function(){
    window.location.href="wallet.html";
})

