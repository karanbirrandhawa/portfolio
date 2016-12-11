const express = require('express');

const app = express();

/** Static Site **/
app.use('/styles', express.static('static/styles'));
app.get('/', (req, res) => res.sendFile('./static/views/portfolio.html', { root: __dirname }));
app.get('/resume', (req, res) => res.sendFile('./static/views/resume.html', { root: __dirname }));

app.listen(8080);
console.log('Running at Port 8080');
