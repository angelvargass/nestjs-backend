import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from './users/users.module';
import configuration from './config/configuration';
import {User} from "./entities/user.entity";
import {AuthModule} from './auth/auth.module';
import {OrganizationsModule} from './organizations/organizations.module';
import {Organization} from "./entities/organization.entity";
import {UserToOrganization} from "./entities/user-to-organization.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [User, Organization, UserToOrganization],
            synchronize: true,
        }),
        UsersModule,
        AuthModule,
        OrganizationsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
