const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(session({secret: "my-secret", cookie:{maxAge: 60000}, resave: false, saveUninitialized:false}));

app.get('/', (req, res) => {
  // If this is the user's first time visiting our domain
  if(!req.session.history) {
    req.session.history = [];
    req.session.history.push(req.url);
    res.send(`Currently on route: ${req.url}</br><h1>Welome to http://${req.headers.host}`);
  }
  else {
    let visited = ``;
    visited += `Currently on route: ${req.url}<br><br>`
    visited += 'Previously visited: <br>';

    req.session.history.forEach(path => {
      visited += path;
      visited += '<br>';
    })

    res.send(visited);
    }

  app.get('/main', (req, res) => {
    req.session.history.push(req.url);

    if(req.session.history.length > 1) {
      let visited = ``;

      visited += `Currently on route: ${req.url}<br><br>`
      visited += 'Previously visited: <br>';

      req.session.history.forEach(path => {
        visited += path;
        visited += '<br>';
      })

      res.send(visited);
    }
    else res.send(`Currently on route: ${req.url}`);
    
  });
  
  app.get('/spongebob', (req, res) => {
    req.session.history.push(req.url);

    if(req.session.history.length > 1) {
      let visited = ``;

      visited += `Currently on route: ${req.url}<br><br>`

      visited += 'Previously visited: <br>';

      req.session.history.forEach(path => {
        visited += path;
        visited += '<br>';
      })

      res.send(visited);
    }
    else res.send(`Currently on route: ${req.url}`);
  
  });
  
  app.get('/patrick', (req, res) => {
    req.session.history.push(req.url);

    if(req.session.history.length > 1) {
      let visited = ``;

      visited += `Currently on route: ${req.url}<br><br>`
      visited += 'Previously visited: <br>';

      req.session.history.forEach(path => {
        visited += path;
        visited += '<br>';
      })

      res.send(visited);
    }
    else res.send(`Currently on route: ${req.url}`);
  });
  
  app.get('/sandy', (req, res) => {
    req.session.history.push(req.url);

    if(req.session.history.length > 1) {
      let visited = ``;

      visited += `Currently on route: ${req.url}<br><br>`
      visited += 'Previously visited: <br>';

      req.session.history.forEach(path => {
        visited += path;
        visited += '<br>';
      })

      res.send(visited);
    }
    else res.send(`Currently on route: ${req.url}`);
  
  })
  
  app.get('/favicon.ico', (req, res, next) => {
    next();
  
  });
  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
