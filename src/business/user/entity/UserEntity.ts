interface UserEntityData {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export default class UserEntity {
    public id = 0;
    public name = '';
    public email = '';
    public password = '';
    public createdAt = new Date();
    public updatedAt = new Date();

    toObject(): UserEntityData {
        console.log(this);
        return { ...this };
    }
}
