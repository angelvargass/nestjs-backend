import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserToOrganization } from '../../entities/user-to-organization.entity';

@Entity('ORGANIZATIONS')
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date', default: new Date() })
  creationDate: Date;

  @OneToMany(
    () => UserToOrganization,
    (userToOrganization) => userToOrganization.organization,
  )
  userToOrganizations: UserToOrganization[];
}
