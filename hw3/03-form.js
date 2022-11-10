const http = require('http');
const queryString = require('querystring');
const { json } = require('stream/consumers');

//const static = require('node-static');
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered


const form = `
<html>
  <body>
  <form method='post' action='/submit'> 
    <label for='username'>Name:</label>
    <input type='text' name='name' id='username'></input>
    <label for='email'>Email</label>
    <input type='email' name='email' id='email'></input>
    <input type='submit'></input>
  </form>
  </body>
</html>
`;

const server = http.createServer((req, res) => {

  if(req.url === '/') {
    res.writeHead(200);
    
  }

  else if(req.url === '/form') {
    
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(form);
    res.end();

  }

  else if(req.method = 'post' && req.url === '/submit') {
    
    res.writeHead(200, {'Content-Type' : 'application/json'});

    let body = '';

    req.on('data', chunk => {
        body += chunk;
    })

    req.on('end', () => {
        let formData = body;

        formData = queryString.parse(formData);
        formData = JSON.stringify(formData);
        res.write(formData);
        
    })
  
  }

})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
