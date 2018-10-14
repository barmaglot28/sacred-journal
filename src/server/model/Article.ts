import {Column, Entity, JoinColumn, ManyToOne, ObjectIdColumn, ObjectID} from "typeorm";
import {User} from "./User";

export interface IArticle {
    title?: string;
    text?: string;
    user?: User;
}

@Entity()
export class Article {
    @ObjectIdColumn()
    public id: ObjectID;

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