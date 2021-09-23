const base=document.querySelector("#baseInput");
const height=document.querySelector("#heightInput");
const Areabutton=document.querySelector("#area-btn");
const outputEl=document.querySelector("#output");

function calculateArea(){
    const area= (parseInt(base.value)*parseInt(height.value))/2;
    outputEl.innerText="The area is :"+area;
}

Areabutton.addEventListener("click",calculateArea);
