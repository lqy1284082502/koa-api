import { AutoIncrement, Model, Table, PrimaryKey, Column } from 'sequelize-typescript';

@Table({
    timestamps: true, // 自动维护时间
    tableName: 'admins', // 数据库中的表名
    underscored: true, // 禁止修改表名
    paranoid: true, // 删除时不真的删除，而是改变 deletedAt 字段
    charset: 'utf8mb4',
    collate: 'utf8mb4_bin',
})
export default class Admin extends Model<Admin> {
    // @AutoIncrement
    // @PrimaryKey
    // @Column
    // id: number | undefined;
}
