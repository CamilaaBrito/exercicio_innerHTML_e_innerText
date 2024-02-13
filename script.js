let elementH1 = document.getElementById("titulo");
let elementA = document.querySelector('a');

let elementOl = document.getElementById("lista-ordenada");

let elementUl = document.querySelector('ul');

elementH1.innerText = "PROZ - Portal TECH"
elementA.innerText = "prozeducacao.com.br"

elementUl.innerHTML =`<li> contato </li>
                      <li>  email </li>
                      <li>  Telefone </li>`
                      
elementOl.innerHTML = `
<li><a href= "https://www.instagram.com/">instagram</a></li>
<li><a href= "https://twitter.com"> X</a></li>
<li><a href="https://www.facebook.com"> facebook </a></li> `