require("dotenv").config();

const { MongoClient, ObjectId } = require("mongodb");

let singleton;

async function connect() {
    if (singleton) return singleton;

    const client = new MongoClient(process.env.MONGO_HOST);
    await client.connect();
    singleton = client.db(process.env.MONGO_DATABASE);
    return singleton;
}

async function insert(costumer) {
    const db = await connect();
    return db.collection("costumers").insertOne(costumer);
}

async function find() {
    const db = await connect();
    return db.collection("costumers").find().toArray();
}

async function findOne(id) {
    const db = await connect();
    return db.collection("costumers").findOne({ _id: new ObjectId(id) });
}

async function findOneByUsername(username) {
    const db = await connect();
    return db.collection("costumers").findOne({ username });
}

async function remove(id) {
    const db = await connect();
    return db.collection("costumers").deleteOne({ _id: new ObjectId(id) });
}

async function update(id, newData) {
    const db = await connect();
    return db.collection("costumers").updateOne({ _id: new ObjectId(id) }, { $set: newData });
}

module.exports = {
    insert,
    find,
    findOne,
    findOneByUsername,
    remove,
    update
};
