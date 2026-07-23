const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);
async function run() {
  await client.connect();
  const db = client.db("mydb");
  await db.collection("users").insertOne({ name: "Alice" });
}
run();
