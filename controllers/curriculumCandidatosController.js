const modelo=require('../models');

const getAllCurriculumsProfesores = async function(req, res){
    let datos;
    await modelo.CurriculumCandidato.findAll({
        raw:true
    }).then((r)=>{
        datos=r;
    });
    console.log(datos);
    res.status(200).json(datos);
}
const getCurriculumsProfesores= async function(req,res){
    let id=req.params.id;
    modelo.CurriculumCandidato.findByPk(id).then((curriculum)=>{
        if(curriculum){
          res.status(200).json(curriculum);
        }else{
          res.status(404).json({error:'No se encontro el curriculum'});
        }
    });
}

const createCurriculum= async function(req,res){
    await modelo.CurriculumCandidato.create({
        profesorid: req.body.profesorid,
        curriculumid:req.body.curriculumid
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
    modelo.CurriculumCandidato.findByPk(id).then((curriculum)=>{
      if(curriculum){
       val=true;
      }else{
       val=false
      }
      if(val){
  
       modelo.CurriculumCandidato.update({
        profesorid: req.body.profesorid,
        curriculumid:req.body.curriculumid
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
     modelo.CurriculumCandidato.findByPk(id).then((curriculum)=>{
      if(curriculum){
        val=true;
      }else{
        val=false
      }
      if(val){
          modelo.CurriculumCandidato.destroy({
            where:{id:req.params.id}
          })
          res.status(200).send('Se borro el curriculum');
      }else{
        res.status(404).json({error:'No se encontro el curriculum'});
      }
    })
  } 

exports.getAllCurriculumsProfesores=getAllCurriculumsProfesores;
exports.getCurriculumsProfesores=getCurriculumsProfesores;
exports.createCurriculum=createCurriculum;
exports.updateCurriculum=updateCurriculum;
exports.deleteCurriculum=deleteCurriculum;