import {navbar} from "../container/navbar.js";
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('img').addEventListener("click",function(){
    window.location.href = "index.html";
})

import footerrr from "../content/footer1.js";
document.getElementById('footer').innerHTML = footerrr();

let adress = JSON.parse(localStorage.getItem('address'));


document.querySelector("#sbt").addEventListener("click",delivery);

    function delivery()
    {
      window.location.href = "Summary.html";
    }
function adresssum(data)
{
    if(data){
        document.getElementById('a_home').value = data.address_line1;
        document.getElementById('a_home1').value = data.address_line2;
        document.getElementById('a_home2').value = data.city;
    }
}
adresssum(adress)

let dat=JSON.parse(localStorage.getItem("all_items")) || [];

let tr=dat.reduce(function(sum,elem){
    return sum+elem.price
 },0)
 
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
 
 
//  let yy=document.querySelector("#nm")
//  yy.innerHTML=`Total ${(tr-26)+30}`
 
//  document.getElementById("part2").append(yy)
 
 
 
//  let gh=()=>{
//      window.location.href="Adress.html"
//  }
 
//  yy.addEventListener("click",gh)   