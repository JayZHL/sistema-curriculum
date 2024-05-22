const modelo=require('../models/');
// const multer  = require('multer');
// const path = require('path');
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads/');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     const ext = path.extname(file.originalname);
//     cb(null, file.fieldname + '-' + uniqueSuffix + ext);
//   }
// });
// const upload = multer({ storage: storage });

const getAllCurriculums = async function(req, res){
    let datos;
    await modelo.Curriculum.findAll({
        raw:true
    }).then((r)=>{
        datos=r;
    });
    console.log(datos);
    res.status(200).json(datos);
}

const getCurriculum=function(req,res){
    let id=req.params.id;
  
    modelo.Curriculum.findByPk(id).then((curriculum)=>{
      if(curriculum){
        res.status(200).json(curriculum);
      }else{
        res.status(404).json({error:'No se encontro el curriculum'});
      }
    });
}

const createCurriculum= async function(req,res){
  console.log("entra 2");
  console.log(req.file);
  await modelo.Curriculum.create({
    titulo: req.body.titulo,
    contenido:req.body.contenido,
    url: req.file.path,
    candidatoid: req.body.candidatoid 
  }).then((curriculum)=>{
   res.status(200).json(curriculum);
  },(val)=>{
   res.json({
     errors:val.errors.map((error)=>{
       return error.message
     })
   });
  });
}
const updateCurriculum=function(req,res){
  let id=req.params.id;
  let val;
  modelo.Curriculum.findByPk(id).then((curriculum)=>{
    if(curriculum){
     val=true;
    }else{
     val=false
    }
    if(val){

     modelo.Curriculum.update({
      titulo: req.body.titulo,
      contenido:req.body.contenido
     },
       {
         where:{id: req.params.id}
       })
     res.status(200).send('Se actualizo el curriculum');
    }else{
   res.status(404).json({error:'No se encontro el curriculum'});
  }
 })
}

const deleteCurriculum=function (req,res){
  let id=req.params.id;
  let val;
   modelo.Curriculum.findByPk(id).then((curriculum)=>{
    if(curriculum){
      val=true;
    }else{
      val=false
    }
    if(val){
        modelo.Curriculum.destroy({
          where:{id:req.params.id}
        })
        res.status(200).send('Se borro el curriculum');
    }else{
      res.status(404).json({error:'No se encontro el curriculum'});
    }
  })
} 

exports.getAllCurriculums=getAllCurriculums;
exports.getCurriculum=getCurriculum;
exports.createCurriculum=createCurriculum;
exports.updateCurriculum=updateCurriculum;
exports.deleteCurriculum=deleteCurriculum;