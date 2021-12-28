//
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('test');
});

app.get('/createAuto', (req,res) => {
    let id = req.query.id;
    if (!id) { 
        id = 100;
    }
    res.json({test: id});
});

app.listen(port, () => {
    console.log(`Server up and running.\nListens to: http://localhost:${port}`);
});