import mongoose from "mongoose";

const db = (mongo_uri) => {
  mongoose
    .connect(mongo_uri)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};

export default db;
