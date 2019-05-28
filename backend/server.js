const mongoose = require("mongoose")
const express = require("express")
const bodyParser = require("body-parser")
const logger = require("morgan")
const Data = require("./data")

const API_PORT = 3001
const app = express()
const router = express.Router()

const dbRoute = "mongodb://kdevries:3h9M6HUkdtenM@ds121415.mlab.com:21415/bobdb"

mongoose.connect(dbRoute, { useNewUrlParser: true })

let db = mongoose.connection

db.once("open", () => console.log("connected to the db!"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger("dev"))

router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    console.log("in the server get: ", data, res)
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true, data: "allow" })
  })
})

router.post("/putData", (req, res) => {
  let data = new Data()

  const { id, message } = req.body

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "invalid inputs",
    })
  }
  data.message = message
  data.id = id
  data.save(err => {
    if (err) return res.json({ success: false, error: err })
    return res.json({ success: true })
  })
})

app.use("/api", router)

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`))
