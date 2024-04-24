class DDDApplication {

    constructor(dddrepository) {
        this.dddrepository = dddrepository;
    }

    async getDestination(ddd) {
        try {
            const destination = await this.dddrepository.getDestination(ddd);
            return destination;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async insertDDD(ddd, destination) {
        try {
          const row = await this.dddrepository.db.dddModel.create({
            codigo_area: ddd,
            destination: destination
          });
          return row;
        } catch (err) {
          console.error(err);
          throw err;
        }
      }
}   

    

module.exports = DDDApplication;
