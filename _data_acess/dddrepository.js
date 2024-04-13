const sqlite3 = require("sqlite3").verbose();

class DDDRepository {
  constructor() {
    this.db = new sqlite3.Database(
      "./_data/ddd_repository.db",
      sqlite3.OPEN_READWRITE
    );
  }
  
  async getDestination(ddd) {
    try {
      const row = await new Promise((resolve, reject) => {
        this.db.get(
          "SELECT destination FROM all_ddd WHERE ddd = ?",
          [ddd],
          (err, row) => {
            if (err) {
              reject(err);
            } else {
              resolve(row);
            }
          }
        );
      });
      
    //   if (row) {
    //     console.log("Localização:", row.destination);
    //   } else {
    //     console.log(`Nenhuma localização encontrada para o DDD: ${ddd}`);
    //   }

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
              console.log("DDD: (" + row.ddd  + ')', "Destino:", '📌' , row.destination);
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
