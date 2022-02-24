import Repository from '../../Repository.js';
import Messages from '../../model/Messages.js';

class MessageRepository extends Repository {

    constructor() {
        super(Messages);
    }

    /**
     * get two users all messages.
     * @param {*} id 
     * @returns 
     */
    async getMessagesByUserId (room) {
        return await this.model.find({room}).sort({"tstmp": "asc"});
        // return await this.model.find({room}).skip(0).limit(5);
    }
}

export default MessageRepository;