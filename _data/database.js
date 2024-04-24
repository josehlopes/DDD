const { Sequelize } = require('sequelize');

class Database {
    constructor() {
        if (!Database.instance) {
            this.sequelize = new Sequelize({
                dialect: 'sqlite',
                storage: 'C:/Users/Henrique/Documents/GitHub/DDD/_data/ddd_repository.db'
            });

            this.dddModel = this.sequelize.define('all_ddd', {
                idDDD: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                ddd: {
                    type: Sequelize.TEXT,
                    allowNull: false
                },
                destination: {
                    type: Sequelize.TEXT,
                    allowNull: false
                }
            },
                {
                    timestamps: false
                }
            );
            

            Database.instance = this;
        }
        return Database.instance;
    }
    
    async connectDatabase() {
        await this.sequelize.sync();
        await this.sequelize.authenticate()
            .then(() => {
                console.log("Conexão SQLite concluída.");
            })
            .catch(err => {
                console.error("Erro ao conectar:", err.message);
            });
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
