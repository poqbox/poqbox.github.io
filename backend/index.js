import db from "./db.js"
import express from "express"
import cors from "cors"
import "dotenv/config"


const app = express()
app.listen(process.env.PORT)

app.use(express.json())   // parse request data/body
app.use(cors())           // allow requests from a different origin


app.get("/projects", async (request, response) => {
  const collection = db.collection("projects")
  const results = await collection.find({}).toArray()

  response.send(results)
})
