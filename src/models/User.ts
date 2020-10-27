import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true,nullable:true})
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({name:'created_at'})
    createdAt:Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt:Date;

}
