const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.end('app.get çalıştı')
//     const obj = {
//         error: false,
//         message: 'Welcome'
//     }
// })

app.get("/", (req, res) => {
    res.end('app.get çalıştı')
});
app.post("/", (req, res) => {
    res.end('app.post çalıştı')
});

app.put("/", (req, res) => {
    res.end('app.put çalıştı')
});
app.delete("/", (req, res) => {
    res.end('app.delete çalıştı')
});






require('dotenv').config()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))