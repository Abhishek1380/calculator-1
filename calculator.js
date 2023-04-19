const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")

buttons.forEach((element) =>
{
   element.addEventListener('click',()=>
   {
    if(element.id === "clear")
    {
      display.innerText = "";
    }
    else if(element.id === "backspace")
    {
      let str = display.innerText.toString();
      display.innerText = str.substr(0,str.length - 1);
    }
    else if(display.innerText != "" && element.id === "equal")
    {
      display.innerText = eval(display.innerText);
    }
    else if(display.innerText == "" && element.id === "equal")
    {
      display.innerText = "Empty!";
    }
    else
    {
      display.innerText += element.id;
    }
   });
});



const themeTogglerbtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator");
const toggleIcon =  document.querySelector(".toggle-icon");


themeTogglerbtn.addEventListener('click',()=>
{
  calculator.classList.toggle("dark");
  themeTogglerbtn.classList.toggle("active");
});