const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'hello, this is node js server - test cicd'
    })
})

const PORT = 3000;
app.listen(process.env.PORT || PORT, _ => {
    let x = process.env.PORT ? 'host heroku' : 'port 3000';
    console.log(`api is running on ${x}`);
})