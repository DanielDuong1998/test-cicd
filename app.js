const express = require('express');
const math = require('./models/math.model');

const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'hello, this is node js server - test cicd'
    })
})

// app.get('/sum', (req, res) => {
//     let x = +req.query.x || -9999;
//     let y = +req.query.y || -9999;
//     let z = math.sum(x, y);
//     // if (z == 10 || z == 20 || z == 30) z = 0;
//     res.json({
//         msg: `${x} + ${y} = ${z}`,
//         rs: z
//     })
// })

const PORT = 3000;
app.listen(process.env.PORT || PORT, _ => {
    let x = process.env.PORT ? 'host heroku' : 'port 3000';
    console.log(`api is running on ${x}`);
})

// console.log('listen on port: ' + process.env.PORT || PORT);

module.exports = app;