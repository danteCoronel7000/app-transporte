import { DataSource } from "typeorm";
import {Users} from './entities/Users'
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "mysecretpassword",
    database: "transportedb",
    logging: true,
    entities: [Users],
    synchronize: true
})