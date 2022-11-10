const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5001;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.com/v3.1/all';

//return and array of objects of all of the information we need for each country (capitals and population)
let getCountries = async () => axios.get(url)
  .then(response => {
    let countries = response.data.map(country => ( 
      {
        name: country.name.common,
        capital: country.capital,
        pop: country.population,
        region: country.region
      }
    ))
    return countries;
  })
  .catch(error => console.log(error));


app.get('/', (req, res) => {
  // render pug template for the index.html file 
  res.render('index', {
    heading: 'Countries of the World',
    main: 'Welcome to this application. Using the REST Countries API, we will be showing the countries and capitals of the world, the most populous countries in the world, and the number of countries in each region of the world',
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  //let countries = ['Afghanistan', 'Aland Islands', 'Albania'];
  getCountries().then(countries => {

    let countryAndCap = countries.map(country => [country.name, country.capital].join(' - '))
    countryAndCap = countryAndCap.sort();

    res.render('page', {
      heading: 'Countries and Capitals',
      results: countryAndCap,
    });
  })

});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 50 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  //let populous = ['China', 'India', 'United States of America'];

  getCountries().then(countries => {
      
      countries = countries.filter(country => {
        if(country.pop >= 50000000)
          return true;
        else return false;
      })
      //sort in descending order
      countries.sort((countryOne, countryTwo) => {
        if(countryOne.pop > countryTwo.pop)
          return -1;
        if(countryOne.pop < countryTwo.pop)
          return 1;
        else return 0;
      })
      //create an array of strings for each country object in countries to render
      let populous = countries.map(country => [country.name, country.pop.toLocaleString()].join(' - '));

      res.render('page', {
        heading: 'Most Populous Countries',
        results: populous,
      });
    })
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  //let regions = ['Asia - 50', 'Europe - 53', 'Africa - 60'];

  getCountries().then(countries => {
    let regions = [];

    let data = countries.reduce((prev, curr) => {

        if(!prev[curr.region]) 
        prev[curr.region] = 1;
        
        else prev[curr.region] += 1;

        return prev;

    }, {})

    for (const [region, count] of Object.entries(data)) {
      let entry = `${region} - ${count}`;
      regions.push(entry);
    }

      res.render('page', {
        heading: 'Regions of the World',
        results: regions,
      });
  })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
