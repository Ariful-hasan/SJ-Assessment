import Repository from '../../Repository.js';
import Users from '../../model/Users.js';
import {ACTIVE} from '../../../config/constant.js';
import Messages from '../../model/Messages.js';

class DashboardRepository extends Repository {
    
    constructor() {
        super(Users);
    }

    /**
     * 
     * @param {*} id is current user .
     * @returns all online users.
     */
    async getOnlineUsersExceptOne (id) {
        return await this.model.find({ status: 'A', isOnline: true, _id: { $ne: id }}, '_id name');
    }
}

export default DashboardRepository;