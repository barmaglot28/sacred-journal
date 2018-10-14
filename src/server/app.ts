import {createConnection} from "./database";
import {initServer} from "./server";
import {User} from "./model";

createConnection()
    .then(async () => {
        await User.seedDefaultUser();

        initServer().listen(3000, () => console.log('Server is running on port 3000'))
    });