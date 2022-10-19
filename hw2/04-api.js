/** Exercise 04 - API **/

const url = 'https://restcountries.com/v3.1/all';

let results = document.getElementById("results");
let myCountries = [];

let getData = async url => {

try {
   await fetch(url).then(response => {
    
    if(!response.ok) {
        console.log(response.status)
        throw Error(response.statusText);
    }
    
    else return response.json()}
    
    )
    .then(data => {
        let countries = data;

        //we push the country name and population and try to sort
        countries.forEach((country, i) => {
            myCountries.push({"name": country.name.common,
                            "population": country.population.toLocaleString()})
        });

        myCountries = myCountries.sort((a, b) => {

            if(a.name < b.name) {
                return -1;
            }
            else if(a.name > b.name) {
                return 1;
            }
            else return 0;   
        })

        for(let i = 0; i<myCountries.length; i+=1) {
            
            let entry = document.createElement("li");
            entry.innerText = `${myCountries[i].name} - ${myCountries[i].population} `;

            results.appendChild(entry);
        }

    })
}
catch(error) {

    console.error(error);
}

}


getData(url);


