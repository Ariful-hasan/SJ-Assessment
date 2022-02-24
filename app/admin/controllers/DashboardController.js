class DashboardController {
    
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    static dashboard (req, res) {
        let data = {}
        data.pageTitle = "Admin Dashboard";
        data.errors = [];
        res.render('./admin/dashboard', {data: data});
    }

}

export default DashboardController;