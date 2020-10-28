const express = require('express')
const fs = require('fs')
const path = require('path')
const port = 3000


const app = express()
    .use("/css", express.static("css"))
	.use("/image", express.static("image"))
	.use("/scripts", express.static("scripts"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/main.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})