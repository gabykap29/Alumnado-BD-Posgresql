




export function crearAlumno() {
    

    const nombres = ['Gabriel','Hernan','Jorge','Jairo','Luis','Marcelo','Pedro','Sebastian','Sergio','Ulises','Agustin'];
    const apellidos = ['Flores','Gonzalez','Herrera','Lopez','Martinez','Perez','Ramirez','Sanchez','Torres','Vega','Garcia','Acosta'];
    
    
    
    //Institutciones
    const institucionesJardin = [
         340011301, 340046700
    ]
      
      const institucionesPrimaria = [
      
         340035000, 340030500, 340019700,340049900,340049800, 340001900,340001202, 340001200,340019700,
      ]
      
      const institucionesSecundaria = [340056100,340051100,340039300,340019900,,340093400,340117800,340092000,340066600
      ]
      
      const institucionesSuperior = [340117200, 340058700,
      ]
    
     let domicilios = ["barrio: San Francisco, manzanas: 20, casas_por_manzana: 15","barrio: San Isidro, manzanas: 18, casas_por_manzana: 12","barrio: Obrero, manzanas: 25, casas_por_manzana: 20","barrio: Villa Lourdes, manzanas: 22, casas_por_manzana: 18", "barrio: Villa del Carmen, manzanas: 30, casas_por_manzana: 25","barrio: Lote 111, manzanas: 15, casas_por_manzana: 10","barrio: Itatí, manzanas: 28, casas_por_manzana: 22","barrio: San Antonio, manzanas: 24, casas_por_manzana: 19","barrio: Villa Hermosa, manzanas: 19, casas_por_manzana: 14","barrio: 25 de Mayo, manzanas: 21, casas_por_manzana: 16","barrio: Guadalupe, manzanas: 35, casas_por_manzana: 30, torres: 5, departamentos_por_torre: 50","barrio: Guadalupe, manzanas: 35, casas_por_manzana: 25, torres: 7, departamentos_por_torre: 6","barrio: Guadalupe, manzanas: 35, casas_por_manzana: 31, torres: 10, departamentos_por_torre: 15"
    ]


let Alumno = {
    nombre: '',
    Apellido:'',
    edad:0,
    fecha_ingreso:'',
    Institucion_id:0,
    grado:0,
    nacionalidad:'',
    dni:0,
    domicilio:'',
    tutor:'',
    cicloLectivo:'',
    tipoAlumno:"",
    plan_educativo_id:""
};

    let tipoALumno = Math.floor(Math.random() * 3) + 1;

    switch (tipoALumno) {
        case 1: {
            Alumno.nombre = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.Apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
            Alumno.fecha_ingreso = Math.floor(Math.random()*2021)+2
            Alumno.edad = Math.floor(Math.random() * 5) + 2;
            Alumno.Institucion_id = institucionesJardin[Math.floor(Math.random() * institucionesJardin.length)];
            Alumno.grado = Math.floor(Math.random() * 3) + 1;
            Alumno.nacionalidad = 'Argentina';
            Alumno.dni = Math.floor(Math.random() * 90000000) + 10000000;
            Alumno.domicilio = domicilios[Math.floor(Math.random() * domicilios.length)];
            Alumno.tipoAlumno = "Jardin";
            Alumno.cicloLectivo = Math.floor(Math.random() * (2023 - 2021 + 1)) + 2021;
            Alumno.tutor = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.tutor += " "+  Alumno.Apellido;
            Alumno.plan_educativo_id = 10;
            return Alumno;
        }
        case 2:{
            Alumno.nombre = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.Apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
            Alumno.fecha_ingreso = Math.floor(Math.random()*2021)+2
            Alumno.edad = Math.floor(Math.random() * 11) + 2;
            Alumno.Institucion_id = institucionesPrimaria[Math.floor(Math.random() * institucionesPrimaria.length)+1];
            Alumno.grado = Math.floor(Math.random() * 6) + 1;
            Alumno.nacionalidad = 'Argentina';
            Alumno.dni = Math.floor(Math.random() * 60000000) + 10000000;
            Alumno.domicilio = domicilios[Math.floor(Math.random() * domicilios.length)];
            Alumno.tipoAlumno = "Primaria"
            Alumno.cicloLectivo = Math.floor(Math.random() * (2023 - 2021 + 1)) + 2021;
            Alumno.tutor = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.tutor += " "+  Alumno.Apellido;
            Alumno.plan_educativo_id = 9;
            return Alumno;
        }
        case 3:{
            Alumno.nombre = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.Apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
            Alumno.fecha_ingreso = Math.floor(Math.random()*2021)+2
            Alumno.edad = Math.floor(Math.random() * 19) + 2;
            Alumno.Institucion_id = institucionesSecundaria[Math.floor(Math.random() * institucionesSecundaria.length)+1];
            Alumno.grado = Math.floor(Math.random() * 7) + 1;
            Alumno.nacionalidad = 'Argentina';
            Alumno.dni = Math.floor(Math.random() * 50000000) + 10000000;
            Alumno.domicilio = domicilios[Math.floor(Math.random() * domicilios.length)];
            Alumno.tipoAlumno = "Secundaria";
            Alumno.cicloLectivo = Math.floor(Math.random() * (2023 - 2021 + 1)) + 2021;
            Alumno.tutor = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.tutor += " "+  Alumno.Apellido;
            Alumno.plan_educativo_id = Math.floor(Math.random()*4 + 1)
            return Alumno;
        }
        case 4:{
            Alumno.nombre = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.Apellido = apellidos[Math.floor(Math.random() * apellidos.length)];
            Alumno.fecha_ingreso = Math.floor(Math.random()*2021)+2
            Alumno.edad = Math.floor(Math.random() * 30) + 2;
            Alumno.Institucion_id = institucionesSuperior[Math.floor(Math.random() * institucionesSuperior.length)+1];
            Alumno.grado = Math.floor(Math.random() * 4) + 1;
            Alumno.nacionalidad = 'Argentina';
            Alumno.dni = Math.floor(Math.random() * 50000000) + 10000000;
            Alumno.domicilio = domicilios[Math.floor(Math.random() * domicilios.length)];
            Alumno.tipoAlumno = "Superior";
            Alumno.cicloLectivo = Math.floor(Math.random() * (2023 - 2021 + 1)) + 2021;
            Alumno.tutor = nombres[Math.floor(Math.random() * nombres.length)];
            Alumno.tutor += " "+  Alumno.Apellido;
            Alumno.plan_educativo_id = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
            return Alumno;
        }
    }
    
    
}