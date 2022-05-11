import { AppDataSource } from '../../../db/typeORM';
import { AdminEntity } from '../entity/AdminEntity';
import { User } from '../entity/User';

class AdminService {
    async getAdmin() {
        const userRepository = await AppDataSource.getRepository(User);
        return await userRepository.find();
    }
}

export default new AdminService();
