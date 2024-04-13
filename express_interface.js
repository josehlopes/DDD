const express = require("express");
const app = express();
const port = 3000;

const DDDRepository = require("./_data_acess/dddrepository");
const DDDApplication = require("./_application/ddd_application");
const DDDFacade = require("./_facade/ddd_facade");
var prompt = require("prompt-sync")();


var dddrepository = new DDDRepository();
var dddapplication = new  DDDApplication();
var dddfacade = new DDDFacade();

app.get("/DDD/:ddd", (req, res) => {
    let ddd = parseInt(req.params.ddd);
    let endereco = dddapplication.getDDDdestination(ddd);
    res.json({ ddd: endereco });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
