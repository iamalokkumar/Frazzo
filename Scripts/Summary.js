import {navbar} from "../container/navbar.js";
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('img').addEventListener("click",function(){
    window.location.href = "index.html";
})

import footerrr from "../content/footer1.js";
document.getElementById('footer').innerHTML = footerrr();

document.querySelector(".pd").addEventListener("click",but);
function but()
    {
      
    }
    
document.querySelector("#sbt").addEventListener("click",slot);
function slot()
    {
      window.location.href = "Payment.html";
    }