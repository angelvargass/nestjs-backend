import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {UserRoles} from "../enums/user-roles.enum";
import {UserToOrganization} from "./user-to-organization.entity";

@Entity('USERS')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text'})
    firstName: string;

    @Column({type: 'text'})
    lastName: string;

    @Column({type: 'text', unique: true})
    email: string;

    @Column({type: 'text', select: false})
    password: string;

    @Column({type: 'boolean', default: true})
    isActive: boolean;

    @Column({type: 'date', default: new Date()})
    joined: Date;

    @Column({type: 'text', default: UserRoles.USER})
    role: string;

    @OneToMany(() => UserToOrganization, userToOrganization => userToOrganization.user)
    userToOrganizations: UserToOrganization[];
}
