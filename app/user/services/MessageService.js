import Service from '../../Service.js';
import MessageRepository from '../repositories/MessageRepository.js';
import {getRoomId} from '../../../config/helpers.js';

class MessageService extends Service {

    constructor() {
        super(new MessageRepository());
    }

    async getMessagesByUserId (userId, currentUserId) {
        let room = getRoomId(userId, currentUserId);
        return await this.repository.getMessagesByUserId(room);
    }
}

export default MessageService;