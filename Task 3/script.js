/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUsersBtn = document.getElementById("btn");
const output = document.getElementById("output");

showUsersBtn.addEventListener("click",function(event){
    event.preventDefault();
    output.innerText = ""
    fetch(ENDPOINT)
    .then((resp)=>resp.json())
    .then((data)=>{
        data.forEach(element => {
            output.innerText += ` ${element.login} User with avatar link: ${element.avatar_url}\n`
            
            
    });
    output.style.color = "red";
    output.style.textAlign = "center"
})
})
