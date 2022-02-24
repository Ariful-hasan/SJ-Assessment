import {FAILED_MSG, SUCCESS_MSG} from "../config/constant.js";

class Repository {
    constructor(model) {
        this.model = model;
    }

    async index() {
        try {
            return await this.model.find();
        } catch (e) {
            console.log(e);
            return FAILED_MSG;
        }
    }

    async get(id) {
        try {
            return await this.model.findById(id);
        } catch (e) {
            console.log(e);
            return FAILED_MSG;
        }
    }

    async create(requestData) {
        try {
            const dataObject = new this.model(requestData);
            if (await dataObject.save()) return SUCCESS_MSG;
        } catch (e) {
            console.log(e);
            return FAILED_MSG;
        }
    }

    async update(id, requestData) {
        try {
            if (await this.model.findByIdAndUpdate(id, requestData)) return SUCCESS_MSG;
            return FAILED_MSG;
        } catch (e) {
            console.log(e);
            return FAILED_MSG;
        }
    }

    async delete(id) {
        try {
            if (await this.model.findByIdAndDelete(id)) return SUCCESS_MSG;
            return FAILED_MSG;
        } catch (e) {
            console.log(e);
            return FAILED_MSG;
        }
    }

}

export default Repository;