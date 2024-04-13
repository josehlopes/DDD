const sqlite3 = require("sqlite3").verbose();

class Database {
    constructor() {
        if (!Database.instance) {

            this.db = new sqlite3.Database('./ddd_repository.db', (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    // console.log('Conectado ao servidor SQLite.');
                }
            });
            Database.instance = this;
        }
        return Database.instance;
    }

    closeDatabase() {
        this.db.close((err) => {
            if (err) {
                return console.error(err.message);
            }
            // console.log("Conexão SQLite fechada.");
        });
    }
}

module.exports = Database;
