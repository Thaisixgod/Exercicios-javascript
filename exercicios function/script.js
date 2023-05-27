const form =  document.querySelector("form")
const ul = document.querySelector("ul")


form.onsubmit = function (event) {
  event.preventDefault()


const input = document.querySelector("input");
const value = input.value;
const li = document.createElement("li");
const button = document.createElement("button")
button.textContent = "Limpar"

li.textContent = value;
li.appendChild(button)
ul.appendChild(li)
}