
let ih = document.getElementById("innerhtml")
let it = document.getElementById("innertext")
let tc = document.getElementById("textcontent")

ih.innerHTML = "<h2>transformando o parágrafo em H2</h2>"
//Retorna o texto, COM formatações e COM elementos html.

it.innerText = "<h2>transformando o parágrafo em H2</h2>"
// Retorna somente o texto, sem formatações ou elementos html.

tc.textContent = "<h2>transformando o parágrafo em H2</h2>"
//Retorna o texto COM formatações, mas sem os elementos Html 


