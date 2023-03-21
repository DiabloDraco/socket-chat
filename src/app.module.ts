import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './commons/user/users.module';
import { RolesModule } from './commons/role/roles.module';
import { AuthModule } from './commons/auth/auth.module';
import { Role } from './commons/role/entities/role.entity';
import { User } from './commons/user/entities/user.entity';
import { MessagesModule } from './messages/messages.module';
import { Message } from './messages/entities/message.entity';

type Type = 'postgres';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as Type,
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Role, Message],
      synchronize: true,
      poolSize: 20,
      useUTC: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
