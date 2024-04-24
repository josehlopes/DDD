const DDDRepository = require("./_data_acess/dddrepository");
const DDDApplication = require("./_application/ddd_application");
const DDDFacade = require("./_facade/ddd_facade");
var prompt = require("prompt-sync")();

var dddrepository = new DDDRepository();

// console.log(dddrepository.getAll());

var dddapplication = new DDDApplication(dddrepository);
var dddfacade = new DDDFacade(dddapplication);

// const writeddd = prompt("Digite o DDD:");

// dddfacade.passDDD(writeddd)
//   .then(destination => {
//     console.log("Destino do DDD:", destination);
//   })
//   .catch(error => {
//     console.error("Erro ao consultar o destino do DDD:", error);
//   });

  const getDDD = prompt("Digite o novo código de aréa:");
  const getDestination = prompt("Digite a qual estado o código de aréa pertence:");

dddfacade.insert(getDDD, getDestination)
  .then(destination => {
    console.log("Destino do DDD:", destination);
  })
  .catch(error => {
    console.error("Erro ao inserir o destino do DDD:", error);
  });

