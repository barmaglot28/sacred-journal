import {
    Column,
    Entity,
    getRepository,
    OneToMany,
    Repository,
    ObjectID,
    ObjectIdColumn
} from "typeorm";
import {Article} from "./Article";
import {saltPassword} from "../util/hashingUtil";

export interface IUser {
    login?: string;
    pass?: string;
}

@Entity()
export class User {
    @ObjectIdColumn()
    public id: ObjectID;

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

    public static async seedDefaultUser(): Promise<void> {
        const userRepo: Repository<User> = getRepository(User);
        const user: User = new User({
            login: "vovchok",
            pass: saltPassword("ytysapapa"),
        });

        if (await userRepo.count({where: {username: user.login}}) !== 1) {
            await userRepo.insert(user);
        }
    }
}