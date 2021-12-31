const express = require("express");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log('every request is available');
    next();
});

app.get('/', (req, res, next) => {
    console.log("only get method is available");
    next();
}, (req, res) => {
    throw new Error("error will go erro middleware");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})