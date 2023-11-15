import { Alumno } from "../models/Alumno.js";
import { HistorialAcademico } from "../models/HistorialAcademico.js"; // Asegúrate de importar el modelo HistorialAcademico
import { crearAlumno } from "../helpers/crearAlumno.js";
import { crearHistorial } from "../helpers/crearHistorial.js";
import { Materia } from "../models/Materias.js";
import {sequelize} from '../database/db.js'
export const createAlumno = async (req, res) => {
    try {
        // Crear un nuevo alumno
        for(let j = 0; j <10000;j++){
            const alumno =   crearAlumno(); // Asegúrate de que crearAlumno devuelva un objeto con la información del alumno
            console.log(alumno);
            // Crear un nuevo registro de alumno en la base de datos
            const newAlumno = await Alumno.create({
                ...alumno
            });
            console.log(newAlumno.idAlumno, alumno.tipoAlumno);
            // Crear un nuevo historial académico
            if(alumno.tipoAlumno != 'Jardin'){
                for(let i = 0; i < 6; i++){
                    const historial =   crearHistorial(newAlumno.idAlumno, alumno.tipoAlumno); 
                    console.log(historial);
                    const newHistorial = await HistorialAcademico.create({
                        ...historial
                });
            }
            // Crear un nuevo registro de historial académico en la base de datos

    
             console.log(newAlumno);
        }}
        return res.status(201).json({message:'los 10.000 alumnos fueron creado con éxito'})
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error al crear el Alumno',
        });
    }
};

export const getHistory = async (req, res) => {
    try {
        const history = await HistorialAcademico.findAll({
            include: [{
                model: Alumno,
                as:'historialAcademicoAlumno',
            },{model:Materia,as:'materiaHistorialAcademico'}],limit:10
        });
        return res.status(200).json({ history });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: 'Error al obtener el historial académico' });
    }
}

export const cantidadAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.findAll({
            attributes: [
                'plan_educativo_id',
                [sequelize.literal('COUNT(plan_educativo_id)'), 'count']
            ],
            group: ['plan_educativo_id'],
        });

        res.json({ alumnos });
    } catch (error) {
        console.error('Error al obtener la cantidad de alumnos por plan educativo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getAlumnosLocalidad = async (req, res) => {

    try {
        const alumnos = await Alumno.findAll({
            attributes: [
                'localidad_id',
                [sequelize.literal('COUNT(localidad_id)'), 'count']
            ],
            group: ['localidad_id'],
        });
        return res.json({ alumnos });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error al obtener los alumnos por localidad' });
    }
}
