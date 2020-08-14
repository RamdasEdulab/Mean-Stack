var express = require('express');
var router = express.Router();
var multer  = require('multer');
var mongoose = require('mongoose');
var StudentSchema = require('../models/student');
var StudentModel = mongoose.model('Student')

var path = require('path');


var Storage= multer.diskStorage({
  destination:"./public",
  filename:(req,file,cb)=>{
  cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
  }
});

var upload = multer({
 storage:Storage
}).single('file');




router.post('/',upload,function(req,res){
    var StudentData = StudentModel({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    CV:req.file.filename
    
      });
      StudentData.save(function(err,result){
      if(err){
      console.error(err)
      return res.status(400).json({
      message:'bad request'
      });
      }else{
      res.json({
      status:200,
      data:result
     });
     }
    });
  });



router.get('/get', (req,res)=>{
  StudentModel.find((err, data) => {
          if (err) {
            return res.json(err)
          } else {
            res.json(data)
          }
        })
      });

      router.put('/updatestudent/:id',upload,(req,res)=>{
        var student={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            
        }
        StudentModel.findByIdAndUpdate(req.params.id,{$set:student},(err,student)=>{
            if(err){
                console.error(err)
                return res.status(400).json({
                  message:'bad request'
                });
              }else{
                res.json({
                  status:200,
                  data:student
                });
              }
    
            });
        });
    
      router.delete('/deletestudent/:id',(req,res)=>{
        StudentModel.findByIdAndRemove(req.params.id,function(err,deletestudent){
            if(err){
                res.json({
                    status : 400
                })
            }else{
                res.json({
                    status : 200
                })
            }
        })
    });

module.exports = router;