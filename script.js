const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars"
}

const toggleAns = document.querySelector(".fa-angle-down")
const toggleAnsIcon = document.querySelector(".faq-question i")

toggleAns.onclick = function(){
  
}