import {    Institucion,
    Modalidad,
    NivelEducativo,
    Localidad,
    Departamento,
    Ambito,
    Sector,} from  '../models/asociaciones/asociaciones.js';


const localidadDepartamento = async(req,res)=>{
    try {
        const Localidades = await Localidad.findAll(
            {
                include:[
                    {
                        model:Departamento,
                        as:'localidad'
                    }
                ]
            }
        );
        return res.json(Localidades);
    } catch (error) {
        console.log(error);
    }
}


export {localidadDepartamento};