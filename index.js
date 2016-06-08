var app = require('express')();
var bodyParser = require('body-parser');
var _ = require('lodash');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())

app.all('/',  function(req, res) {
  console.log(req);
  console.log(req.headers);
  console.log(req.body);
  var rr = JSON.parse(req.body)
  //{"mode":"view","windowState":"exclusive","preferences":{},"namespace":"Pluto_81_ctf2_110_tw_","portal":{"provider":"uPortal","version":"4.3.0"}}

  // var details = _(rr)
  //   .map((v, k) => `${v}: ${k}`)
  //   .reduce((m, v) => m + '\n' + v)
  //   .value();

  res.send(`<h1>Hello World</h1>
  Some details about your connection:
    ${req.body}
  `);
});

app.listen(3000, function () {
  console.log('listening!');
});
