import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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

    @Column({type: "date", default: new Date()})
    joined: Date;
}
