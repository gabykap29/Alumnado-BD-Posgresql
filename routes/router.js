import express from 'express';
const router = express.Router();
import {localidadDepartamento} from '../controllers/prueba.controller.js'
import { crearAlumno } from '../helpers/crearAlumno.js';
import { createAlumno, cantidadAlumnos, getHistory, getAlumnosLocalidad } from '../controllers/alumno.controller.js';
import { cargarPromovidos, obtenerPromovidos } from '../controllers/cargarPromovidos.js';
router.get('/', localidadDepartamento);
router.get('/history',getHistory)

router.get('/create',createAlumno);
router.get('/alumnosDepar',cantidadAlumnos);
router.get('/alumnosLocal',getAlumnosLocalidad);
router.get('/crearPromovidos',cargarPromovidos)
router.get('/obtenerPromovidos',obtenerPromovidos)
export default router;