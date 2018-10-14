import {Connection, createConnection as createTypeormConnection} from "typeorm";
import {Article, User} from "./model";

export function createConnection(): Promise<Connection> {
    return createTypeormConnection({
        type: "mongodb",
        url: process.env.DATABASE_URL,
        synchronize: true,
        entities: [
            User,
            Article,
        ],
    });
}
