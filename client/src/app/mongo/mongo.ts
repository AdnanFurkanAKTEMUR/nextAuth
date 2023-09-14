const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let clientMongo:any;
async function mongo() {
  clientMongo = new MongoClient(
    process.env.MONGO_URL ? process.env.MONGO_URL : ""
  );
}

mongo();
export default clientMongo;
