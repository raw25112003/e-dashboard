const express = require('express');

const app = express();

app.get("/", (req,res)=> {
    response.send("app is working..")
});

app.listen(5000) 