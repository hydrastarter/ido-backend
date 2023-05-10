import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getMetadataArgsStorage } from 'typeorm';

export const Config = () => ({
  environment: process.env.NODE_ENV || 'development',
  port: Number(process.env.NODE_PORT) || 3000,
  database: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    schema: process.env.DB_SCHEMA,
    synchronize: process.env.DB_SYNCHRONIZATION === 'true' ? true : false,
    entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
    retryAttempts: 10,
    retryDelay: 3000,
    keepConnectionAlive: false,
    autoLoadEntities: true,
  } as TypeOrmModuleOptions,
  auth: {
    passwordSalt: process.env.PASSWORD_SALT,
    passwordHash: process.env.PASSWORD_HASH,
    adminUsername: process.env.ADMIN_USERNAME,
  },
});

export { Config as default };
