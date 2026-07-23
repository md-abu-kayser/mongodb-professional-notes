const collection = client.db("mydb").collection("users");
const changeStream = collection.watch();
changeStream.on("change", (next) => {
  console.log("Change detected:", next);
});
