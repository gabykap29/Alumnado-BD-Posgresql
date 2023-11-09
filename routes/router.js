import express from 'express';
const router = express.Router();
import {localidadDepartamento} from '../controllers/prueba.controller.js'
router.get('/', localidadDepartamento);


export default router;