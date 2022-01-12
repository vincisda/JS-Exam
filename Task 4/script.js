/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const outputDiv = document.getElementById("output")


fetch(ENDPOINT)
.then((resp) => resp.json())
.then((data)=>{
    console.log(data)
    data.forEach(element => {
        outputDiv.innerHTML += `<h2 style= "background-color: rgb(143, 143, 84)">${element.brand}</h2><br>`
        +`<p style= "background-color: powderblue">${element.models.join(" , ")}</p>`
        console.log(element.models)
    });
})

