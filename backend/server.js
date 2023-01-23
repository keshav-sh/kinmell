import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";



dotenv.config();
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/",{
  useNewUrlParser:true,
  //useFindAndModify:false,
  useUnifiedTopology:true,   
});


app.use("/api/users",userRouter);


app.get("/", function (req, res) {
  res.send("server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;

app.listen(port, function (err) {
  if (err) {
    console.log("err in listening");
  } else {
    console.log("Success in listening port >>" + port);
    console.log("To exit ctrl+C");
  }
});
