class DDDFacade {
  constructor(ddd_application) {
    this.ddd_application = ddd_application;
  }

  async passDDD(ddd) {
    try {
      const destination = await this.ddd_application.getDDDdestination(ddd);
      return destination;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async insert(ddd, destination) {
    try {
      const get =  await this.ddd_application.insertDDD(ddd, destination);
      return get;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}


module.exports = DDDFacade;
