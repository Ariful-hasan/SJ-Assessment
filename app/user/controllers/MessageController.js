import Controller from '../../Controller.js';
import MessageService from '../services/MessageService.js';
import * as CONSTANT from '../../../config/constant.js';

class MessageController extends Controller {

    constructor(req, res) {
        super(new MessageService());
        this.req = req;
        this.res = res;
    }

    async getMessagesByUserId (id) {
        try {
            let currentUserId = JSON.parse(JSON.stringify(this.req.user._id));
            if (typeof this.req.body.id !== 'undefined') {
                let result = await this.service.getMessagesByUserId(this.req.body.id, currentUserId);
                return this.res.status(CONSTANT.SUCCESS).send(result);
            }
            return this.res.status(CONSTANT.NOT_FOUND).send([]);
        } catch (error) {
            console.log(error);
            return this.res.status(CONSTANT.INTERNAL_SERVER_ERROR).send([]);
        }
    }
}

export default MessageController;