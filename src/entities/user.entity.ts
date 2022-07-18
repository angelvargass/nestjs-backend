import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('USERS')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text', nullable: false})
    firstName: string;

    @Column({type: 'text', nullable: false})
    lastName: string;

    @Column({type: 'text', unique: true, nullable: false})
    email: string;

    @Column({type: 'text', nullable: false})
    password: string;

    @Column({type: 'boolean', default: true})
    isActive: boolean;
}
