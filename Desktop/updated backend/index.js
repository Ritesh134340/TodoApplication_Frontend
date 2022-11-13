const express = require("express");
const  userRouter=require("./routes/user.route")
const adminRouter=require("./routes/admin.route")
const jobRouter=require("./routes/job.route")
const app = express();
const cors=require("cors")
const { connection } = require("./config/db")
require("dotenv").config();
const PORT=process.env.PORT || 8080
app.use(cors())
app.use(express.json());



app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/job",jobRouter)



app.listen(PORT, async () => {

  try {
    await connection
    console.log("database connected")
  } catch (err) {
    console.log("databse connecting failed")
    console.log(err);
  }
  console.log("listening on ", PORT);
});

