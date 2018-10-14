import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Article} from "./Article";

export interface IUser {
    login?: string;
    pass?: string;
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column({type: "text", unique: true, nullable: false})
    public login: string;

    @Column("text")
    public pass: string;

    @OneToMany(type => Article, article => article.user)
    public articles: Article[];

    constructor(options: IUser = {}) {
        this.login = options.login;
        this.pass = options.pass;
    }
}