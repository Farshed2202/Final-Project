const optionMenu = document.querySelector(".select-menu"),
   selectBtn = optionMenu.querySelector(".select-btn"),
   options = optionMenu.querySelectorAll(".option"),
   sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle ("active"));

options.forEach(option =>{
  option.addEventListener("click",()=>{
  let selectedOption = option.querySelector(".option-text").innerText;
  sBtn_text.innerText = selectedOption;
 
  optionMenu.classList.remove ("active");
})
})


const optionMenus = document.querySelector(".select-menu-2"),
   selectButton = optionMenus.querySelector(".select-btn-2"),
   options_2 = optionMenus.querySelectorAll(".option-2"),
   sBtn_text_2 = optionMenus.querySelector(".sBtn-text-2");

selectButton.addEventListener("click", () => optionMenus.classList.toggle ("active"));

options_2.forEach(option =>{
  option.addEventListener("click",()=>{
  let selectedOption = option.querySelector(".option-text-2").innerText;
  sBtn_text_2.innerText = selectedOption;
  optionMenus.classList.remove ("active");
})
})


