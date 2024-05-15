const modelo=require('../models');

const getAllCandidatos = async function(req, res){
    let datos;
    await modelo.Candidato.findAll({
        raw:true
    }).then((r)=>{
        datos=r;
    });
    console.log(datos);
    res.status(200).json(datos);
}
const getCandidato=function(req,res){
    let id=req.params.id;
  
     modelo.Candidato.findByPk(id).then((candidato)=>{
      if(candidato){
  
          res.status(200).json(candidato);
      }else{
          res.status(404).json({error:'No se encontro el profesor'});
      }
    });
}
const createCandidato= async function(req,res){
    await modelo.Candidato.create({
      nombre: req.body.nombre,
      primerApellido: req.body.primerApellido,
      segundoApellido: req.body.segundoApellido,
      email:req.body.email
    }).then((candidato)=>{
     res.status(200).json(candidato);
    },(val)=>{
     res.json({
       errors:val.errors.map((error)=>{
         return error.message
       })
     });
    });
}
const updateCandidato=function(req,res){
    let id=req.params.id;
    let val;
    modelo.Candidato.findByPk(id).then((candidato)=>{
      if(candidato){
       val=true;
      }else{
       val=false
      }
      if(val){
  
       modelo.Candidato.update({
        nombre: req.body.nombre,
        primerApellido: req.body.primerApellido,
        segundoApellido: req.body.segundoApellido,
        email:req.body.email
       },
         {
           where:{id: req.params.id}
         })
       res.status(200).send('Se actualizo el candidato');
      }else{
     res.status(404).json({error:'No se encontro el candidato'});
    }
   })
}
const deleteCandidato=function (req,res){
    let id=req.params.id;
    let val;
     modelo.Candidato.findByPk(id).then((candidato)=>{
      if(candidato){
        val=true;
      }else{
        val=false
      }
      if(val){
          modelo.Candidato.destroy({
            where:{id:req.params.id}
          })
          res.status(200).send('Se borro el profesor');
      }else{
        res.status(404).json({error:'No se encontro el profesor'});
      }
    })
} 


exports.getAllCandidatos=getAllCandidatos;
exports.getCandidato=getCandidato;
exports.createCandidato=createCandidato;
exports.updateCandidato=updateCandidato;
exports.deleteCandidato=deleteCandidato;