import Controller from '../../Controller.js';
import DashboardService from '../services/DashboardService.js';


class DashboardController extends Controller{
    
    constructor(req, res, next) {
        super(new DashboardService())
        this.req = req;
        this.res = res;
    }

    async dashboard () {
        let data = {}
        data.id = JSON.stringify(this.req.user._id);
        data.id = JSON.parse(data.id);
        data.name = this.req.user.name;
        data.pageTitle = "Dashboard";
        data.errors = [];
        
        data.onlineUsers = await this.service.getOnlineUsersExceptOne(data.id);
        
        await this.service.update(data.id, {"isOnline": true});
        
        this.res.render('./user/dashboard', {data: data});
    }

}

export default DashboardController;