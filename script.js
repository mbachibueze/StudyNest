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




const panelCollapse = document.querySelector(".panel-collapse")
const panelCollapseIcon = document.querySelector(".panel-collapse i")
const listGroup = document.querySelector(".list-group")

panelCollapse.onclick = function(){
  listGroup.classList.toggle('open')
  const isOpen = listGroup.classList.contains('open')

  panelCollapseIcon.classList = isOpen ? "fa-angle-down" : "fa-angle-right"

}

