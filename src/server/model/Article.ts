import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

export interface IArticle {
    title?: string;
    text?: string;
    user?: User;
}

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    public id: string;

    @Column("text")
    public title: string;

    @Column("text")
    public text: string;

    @ManyToOne(type => User, user => user.articles)
    @JoinColumn()
    public user: User;

    constructor(options: IArticle = {}) {
        this.title = options.title;
        this.text = options.text;
        this.user = options.user;
    }
}