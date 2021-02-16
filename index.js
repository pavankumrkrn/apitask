const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors())
const port = '3000';
let users = [{
    user: 1,
    id: 1
}, {
    user: 2,
    id: 2
}, {
    user: 3,
    id: 3
}]
app.get('/', (req, res) => {
    res.end(JSON.stringify(users));
})

app.listen(port, () => {
    console.log(port + ' is running')
})