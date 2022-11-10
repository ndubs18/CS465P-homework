const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

// POST request
app.post('/submit', (req, res) => {
  let data = '';

  console.log(req.body);
  data += `Name: ${req.body.name}<br>`;
  data += `Email: ${req.body.email}<br>`;

  if(req.body.message == '') {
    data += 'Message: n/a<br>'
  }
  else data += `Message: ${req.body.message}<br>`;
  
  if(req.body.newsletter) {
    data += 'Newsletter: Yes, sign me up for the newsletter.';
  }
  else data += 'Newsletter: No, thank you.';
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
