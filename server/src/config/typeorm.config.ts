import {DataSource} from 'typeorm';
// import {User} from '@entities/User.entity';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '0108',
    database: 'chatApp',
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    // entities: [User],
    migrations:  ['src/entities/**/*.ts', 'dist/entities/**/*.js'],
})