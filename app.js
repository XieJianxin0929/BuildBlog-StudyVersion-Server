const express = require("express")

const app = express()

app.get("/", function(req, res) {
    res.send("ok~~")
})

app.listen(80, () => {
    console.log("服务器已启动~");
})