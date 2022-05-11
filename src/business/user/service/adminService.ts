import { AppDataSource } from '../../../db/typeORM';
import { AdminEntity } from '../entity/AdminEntity';
import { User } from '../entity/User';

class AdminService {
    async getAdmin() {
        const userRepository = await AppDataSource.getRepository(User);
        const allUser = await userRepository.find();
        console.log(allUser);
        return 'adminServer链接成功';
    }
}

export default new AdminService();
