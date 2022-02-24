import Service from '../../Service.js';
import DashboardRepository from '../repositories/DashboardRepository.js';

class DashboardService extends Service {

    constructor() {
        super(new DashboardRepository());
    }

    async getOnlineUsersExceptOne (id) {
        return await this.repository.getOnlineUsersExceptOne(id);
    }

    // async getMessagesByUserId (id) {
    //     return await this.repository.getMessagesByUserId(id);
    // }
}

export default DashboardService;