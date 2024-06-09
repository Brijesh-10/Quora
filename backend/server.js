const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 80;
const router = require("./routes");

//database connection
mongoose.set('strictQuery', false);
const DB='mongodb+srv://brijesh:briasha@cluster0.lmribks.mongodb.net/quoradb?retryWrites=true&w=majority';
mongoose.connect(DB,{useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
  console.log("MongoDB connected successfully");
})
.catch((error) => console.log("no connection stupid: ", error));
mongoose.set('strictQuery', true);
//middle ware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

//routes

app.use("/api", router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});
 
app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});