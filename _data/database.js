const { Sequelize } = require('sequelize');

class Database {
    constructor() {
        if (!Database.instance) {
            this.sequelize = new Sequelize('ddd_repository', 'root', '', {
                dialect: 'mysql',
                storage: 'localhost',
                port: 3306
            });

            this.dddModel = this.sequelize.define('ddd', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                codigo_area: {
                    type: Sequelize.TEXT,
                    allowNull: false
                },
                destination: {
                    type: Sequelize.TEXT,
                    allowNull: false
                }
            });


            Database.instance = this;
        }
        return Database.instance;
    }

    async connectDatabase() {
        await this.sequelize.sync();
        await this.sequelize.authenticate()
    }
    async closeDatabase() {
        await this.sequelize.close()
            .then(() => {
                console.log("Conexão SQLite fechada.");
            })
            .catch(err => {
                console.error("Erro ao fechar conexão:", err.message);
            });
    }
}

module.exports = Database;
