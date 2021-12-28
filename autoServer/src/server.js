//
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('test');
});

app.get('/createAuto', (req,res) => {
    res.json({test: req.query.id ?? 'NA'});
});

app.listen(port, () => {
    console.log('Server up and running.\nListens to: http://localhost:${port}');
});