const DDDRepository = require("./_data_acess/dddrepository");
const DDDApplication = require("./_application/ddd_application");
const DDDFacade = require("./_facade/ddd_facade");
var prompt = require("prompt-sync")();

var dddrepository = new DDDRepository();

// console.log(dddrepository.getAll());

var dddapplication = new DDDApplication(dddrepository);
var dddfacade = new DDDFacade(dddapplication);

const writeddd = prompt("Digite o DDD:");
const destination = dddfacade.insertDDD(writeddd);
if (destination) {
    console.log("Destino do DDD:", destination);
} else {
    console.log(`Nenhum destino encontrado para o DDD ${writeddd}`);
}


