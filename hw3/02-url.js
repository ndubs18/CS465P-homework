const http = require('http');
const port = process.env.PORT || 5002;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];
  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);


  //takes the url string and return an object with query string parameters as key and value pairs
  let getParams = (url) => {

    let params = { };

    for(const [key,value] of url.searchParams.entries()) {
      params[key] = value;
    }

    return params;

  }

  //takes query string parameters object and extracts key and values as string into their own array
  //loops over keys and values arrays to format html
  let formatResponse = (params) => {
    let response = '<table style="border:1px solid black">';
    let tableEntry = '';
    let keys = Object.keys(params);
    let values = Object.values(params);

    for(let i = 0; i < keys.length; i = i+1) {
      tableEntry = `<tr style="border:1px solid black">
      <td style="border:1px solid black"> ${keys[i]}</td>
      <td style="border:1px solid black">${values[i]}</td>`;

      response += tableEntry;
    }

    response += '</table>';

    return response;

  }


  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here
  else if(req.url === '/attributes?hello=world&lorem=ipsum') {

    res.writeHead(200, {'Content-Type' : 'text/html'})
    
    let response = formatResponse(getParams(url));
    
    res.write(response);
    

  }

  else if(req.url === '/items?first=1&second=2&third=3&fourth=4') {

    res.writeHead(200, {'Content-Type' : 'text/html'})
    
    let response = formatResponse(getParams(url));

    res.write(response);
  }

  else if(req.url === '/characters?spongebob=squarepants&patrick=star&sandy=cheeks') {

    res.writeHead(200, {'Content-Type' : 'text/html'})
    
    let response = formatResponse(getParams(url));

    res.write(response);
  }

  else {
    res.writeHead(404, {'Content-Type' : 'text/plain'}); 
    res.write(`${res.statusCode}: Error page not found`)
    
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
