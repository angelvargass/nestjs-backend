import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserOrganizationRolesEnum } from '../enums/user-organization-roles.enum';
import { User } from '../users/entities/user.entity';
import { Organization } from '../organizations/entities/organization.entity';

@Entity('USERS_ORGANIZATIONS')
export class UserToOrganization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  organizationId: number;

  @Column({ type: 'text', default: UserOrganizationRolesEnum.USER })
  userRole: string;

  @ManyToOne(() => User, (user) => user.userToOrganizations)
  user: User;

  @ManyToOne(
    () => Organization,
    (organization) => organization.userToOrganizations,
  )
  organization: Organization;
}
