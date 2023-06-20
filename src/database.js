import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/mymongodb")
    .then(db => console.log("DB is connected to", db.connection.host))
    .catch(err => console.error(err)) 