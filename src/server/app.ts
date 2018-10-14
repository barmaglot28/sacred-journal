import {createConnection} from "./database";
import {initServer} from "./server";

initServer().listen(3000, () => console.log('Server is running on port 3000'));