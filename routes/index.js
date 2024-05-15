const express= require('express');
const multer  = require('multer');
const modelo=require('../models/');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});
const upload = multer({ storage: storage });
const router= express.Router();//Se utiliza el router
const candidatoController=require('../controllers/candidatoController');//para los metodos de controllers
const curriculumController=require('../controllers/curriculumController');//para los metodos de controllers
const curriculumCandidatosController=require('../controllers/curriculumCandidatosController');//para los metodos de controllers
router.use(express.json());

router.get('/',(req,res) => {
    res.send('Hola mundo')
});

//API de profesores
router.get('/candidatos/',candidatoController.getAllCandidatos);
router.get('/candidatos/:id',candidatoController.getCandidato);
router.post('/candidatos/',candidatoController.createCandidato);
router.put('/candidatos/:id',candidatoController.updateCandidato);
router.delete('/candidatos/:id',candidatoController.deleteCandidato);

//API de curriculums
router.get('/curriculums/',curriculumController.getAllCurriculums);
router.get('/curriculums/:id',curriculumController.getCurriculum);
//router.post('/curriculums/', upload.single('file'),curriculumController.test);
router.post('/curriculums/', upload.single('file'), async (req, res) =>{
    console.log("entra");
    console.log(req.file);
    // req.file.buffer is what you want to pass to create

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
    // return res.json({ message: 'Upload success' });
});
router.put('/curriculums/:id',curriculumController.updateCurriculum);
router.delete('/curriculums/:id',curriculumController.deleteCurriculum);

router.get('/registros',curriculumCandidatosController.getAllCurriculumsProfesores);
router.get('/registros/:id',curriculumCandidatosController.getCurriculumsProfesores);
// router.get('/regustroa')

   
module.exports=router;