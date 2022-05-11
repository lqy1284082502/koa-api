import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Model } from './Model';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({ default: 0 })
    status: number;

    // @OneToMany(() => Model, (model) => model.users)
    // models: Model[];

    @Column({ default: '1284082502@qq.com' })
    email: string;

    @Column({ name: 'created_at', default: '' })
    createdAt: string;

    @Column({ name: 'updated_at', default: '' })
    updatedAt: string;
}
