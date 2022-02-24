class Service {

    constructor(repository) {
        this.repository = repository;
    }

    async index() {
        return await this.repository.index();
    }

    async get(id) {
        let data = await this.repository.get(id);
        return [data];

    }

    async create(requestData) {
        return this.repository.create(requestData);
    }

    async update(id, requestData) {
        return await this.repository.update(id, requestData);
    }

    async delete(id) {
        return await this.repository.delete(id);
    }
}

export default Service;