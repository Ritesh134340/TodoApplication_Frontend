const { Router } = require("express");
const {jobModel}=require("../models/Job.model")

const job=Router();

job.get("/", async (req, res) => {
   
   
    let obj=req.query;
    let size=Object.keys(obj).length;
    try{
      if(size>0){
        const job = await jobModel.find(req.query)
        res.send(job)
      }
      else if(size===0){
        const job = await jobModel.find({})
        res.send(job)
      }
    }
    catch(err){
      res.send({mesg:"Something went wrong"})
    }
   
  
})

module.exports=job
