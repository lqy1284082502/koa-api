import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    status: number;

    // @ManyToOne(() => User, (user) => user.models)
    // @Column({ name: 'user_id' })
    // users: User[];
}
