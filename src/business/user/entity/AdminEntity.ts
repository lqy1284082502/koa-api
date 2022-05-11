import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AdminEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;
}
