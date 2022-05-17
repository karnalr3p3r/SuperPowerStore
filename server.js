// const express = require('express');
// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(__dirname + '/dist/'));
// app.get(/.*/, function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// })
// app.listen(port);

// console.log("server started");

const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));