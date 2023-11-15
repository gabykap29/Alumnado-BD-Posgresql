import { NivelEducativo, Promovidos,Alumno } from "../models/asociaciones/asociaciones.js";


export const cargarPromovidos = async(req,res)=>{
    const array = ['SI', 'NO']
    const cicloLectivo = ['2021','2022','2023'];
    try {
        
        for(let i = 1; i< 10000; i++){
            const promovidos = await Promovidos.create({
                alumno_id:i,
                promovido:array[Math.floor(Math.random() * array.length)],
                cicloLectivo:cicloLectivo[Math.floor(Math.random() * cicloLectivo.length)]
            });
            console.log(promovidos);
        }
        return res.status(201).json({message:'los 30.000 promovidos fueron creado con éxito'})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error al crear los promovidos'})
    }
}

export const obtenerPromovidos = async(req,res)=>{
    try {
// Paso 1: Traer todos los idAlumno de la tabla Alumno
const todosLosAlumnos = await Alumno.findAll({
    attributes: ['idAlumno'],
  });
  
  // Paso 2: Para cada idAlumno, contar los Promovidos asociados
  const conteoPromovidosPorAlumno = await Promise.all(todosLosAlumnos.map(async (alumno) => {
    const idAlumno = alumno.idAlumno;
    const cantidadPromovidos = await Promovidos.count({
      where: {
        alumno_id: idAlumno,
        promovido: 'SI',
      },
    });
  
    return cantidadPromovidos;
  }));
  
  console.log(conteoPromovidosPorAlumno);
  
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'Error al obtener los promovidos'})
    }
}