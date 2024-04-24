const Database = require("../_data/database.js");

class DDDRepository {
  constructor() {
    this.db = new Database();
    this.db.connectDatabase();
  }

  async getDestination(ddd) {
    try {
      const row = await this.db.dddModel.findOne({
        where: {
          ddd: ddd
        }
      });
      return row;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async getAll() {
    try {
      const rows = await new Promise((resolve, reject) => {
        this.db.all("SELECT * from all_ddd", (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
      });

      if (rows) {
        rows.forEach(row => {
          console.log("DDD: (" + row.ddd + ')', "Destino:", '📌', row.destination);
        });
      }
      // else {
      //     console.log('Nenhum registro de DDD encontrado.');
      // }
      return rows;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

}
module.exports = DDDRepository;
