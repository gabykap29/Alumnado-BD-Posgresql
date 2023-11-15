
export const crearHistorial =  (idAlumno,tipoALumno) => {
    let tipoAlumno = tipoALumno;
    const crtlHistorial = {
        alumno_id:0,
        materia_id:0,
        trimestre:0,
        cuatrimestre:0,
        nota:0,
        anio:0,
    }
    if(tipoAlumno == "Primaria"){
        crtlHistorial.alumno_id= idAlumno,
        crtlHistorial.materia_id= Math.floor(Math.random() * 6) + 1,
        crtlHistorial.trimestre= Math.floor(Math.random() * 3) + 1,
        crtlHistorial.nota= Math.floor(Math.random() * 10) + 1,
        crtlHistorial.anio= Math.floor(Math.random() * 2) + 2021
        return crtlHistorial;
    }else if (tipoAlumno == "Secundaria"){
        crtlHistorial.alumno_id= idAlumno,
        crtlHistorial.materia_id= Math.floor(Math.random() * (26-10 + 1)) + 10,
        crtlHistorial.cuatrimestre= Math.floor(Math.random() * 3) + 1,
        crtlHistorial.nota= Math.floor(Math.random() * 10) + 1,
        crtlHistorial.anio= Math.floor(Math.random() * 2) + 2021

        return crtlHistorial;
    }else if(tipoAlumno == "Superior"){
        crtlHistorial.alumno_id= idAlumno,
        crtlHistorial.materia_id= Math.floor(Math.random() * (36-27 + 1)) + 27,
        crtlHistorial.cuatrimestre= Math.floor(Math.random() * 3) + 1,
        crtlHistorial.nota= Math.floor(Math.random() * 10) + 1,
        crtlHistorial.anio= Math.floor(Math.random() * 2) + 2021

        return crtlHistorial;
    };
}