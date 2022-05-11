import { AppDataSource } from '../../../db/typeORM';
import IUserService from './IUserService';
import { User } from '../entity/User';

class UserService implements IUserService {
    async addUser(user: User): Promise<User> {
        return await AppDataSource.manager.save(user);
    }

    async checkUserName(userName: string): Promise<boolean> {
        const result = await AppDataSource.getRepository(User)
            .createQueryBuilder('user')
            .where('user.name = :userName', { userName })
            .getOne();
        return !!result;
    }

    async checkUserNameAndPassword(userName: string): Promise<User | null> {
        return await AppDataSource.getRepository(User)
            .createQueryBuilder('user')
            .where('user.name = :userName', { userName })
            .getOne();
    }

    async getUserList(): Promise<User[]> {
        return await AppDataSource.getRepository(User).find();
    }
}

export default new UserService();
