import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{

    @PrimaryGeneratedColumn()
    UsuarioID: number;
    @Column()
    Nombre: string;
    @Column()
    Apellido: string;
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAd: Date;

}