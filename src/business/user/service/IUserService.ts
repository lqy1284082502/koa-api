import { User } from '../entity/User';

export default interface IUserService {
    // 添加用户
    addUser(user: User): Promise<User>;
    // 检查用户名是否存在
    checkUserName(userName: string): Promise<boolean>;
    // 校验用户名和密码
    checkUserNameAndPassword(userName: string): Promise<User | null>;
    // 获取用户列表
    getUserList(): Promise<User[]>;
}
