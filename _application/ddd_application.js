class DDDApplication {

    constructor(dddrepository) {
        this.dddrepository = dddrepository;
    }

    async getDDDdestination(ddd) {
        try {
            const destination = await this.dddrepository.getDestination(ddd);
            return destination;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = DDDApplication;
