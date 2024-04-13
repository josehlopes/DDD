class DDDFacade {
  constructor(ddd_application) {
    this.ddd_application = ddd_application;
  }

  async insertDDD(ddd) {
    try {
      const destination = await this.ddd_application.getDDDdestination(ddd);
      return destination;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = DDDFacade;
