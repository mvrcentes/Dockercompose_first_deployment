import mongoose from "mongoose"

const mongoUrl = process.env.DATABASE_URL 
console.log(mongoUrl)

mongoose.connect(mongoUrl)
    .then(db => console.log("DB is connected to", db.connection.host))
    .catch(err => console.error(err))
