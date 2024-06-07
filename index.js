const express = require('express')
const app = express()
const port = 3000

const connect_db = require("./db/index.js")
connect_db();
const userRoute = require("./routes/user.route.js")

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.render('home')
})
app.use('/user',userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})