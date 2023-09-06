const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let clientMongo:any;
async function mongo() {
  clientMongo = new MongoClient(
    process.env.MONGO_URL ? process.env.MONGO_URL : ""
  );
  try {
    await clientMongo.connect();
    console.log("mongodb connected");
  } catch (e) {
    console.log("failed mongodb connected");
  } finally {
    await clientMongo.close()
  }
}

mongo();
export default clientMongo;
