import Admin from '../models/Admin';

class AdminService {
    getAdmin() {
        return Admin.findOne();
    }
}

export default new AdminService();
