import { MongoClient } from "mongodb"
import "dotenv/config"


// link to the server
const client = new MongoClient(process.env.MONGO_URL)


// try to connect to the server
let conn
try {
  conn = await client.connect()
}
catch (error) {
  console.error(error)
}
// select a database to work with
let db = conn.db("portfolio")


// export the database to be used as a module
export default db