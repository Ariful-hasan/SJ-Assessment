class Controller {

    constructor(service) {
        this.service = service;
    }

    async index() {
        return await this.service.index();
    }

    async get(id) {
        return await this.service.get(id);
    }

    async create(requestData) {
        return this.service.create(requestData);
    }

    async update(id, requestData) {
        return await this.service.update(id, requestData);
    }

    async delete(id) {
        return await this.service.delete(id);
    }
}

export default Controller;