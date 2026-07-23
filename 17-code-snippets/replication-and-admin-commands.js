// Check replica set status
db.adminCommand({ replSetGetStatus: 1 });
// Add a member
rs.add("mongod3.example.com:27017");
