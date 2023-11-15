import {sequelize,Model, DataTypes} from '../database/db.js';
import { NivelEducativo } from './NivelEducativo.js';
export const Alumno = sequelize.define('Alumno',{
    idAlumno:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Institutcion_id:{
        type: DataTypes.INTEGER,
        allowNull:true,
    },
    grado:{
        type:DataTypes.STRING,
        allowNull:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    Apellido:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    edad:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    fecha_ingreso:{
        type:DataTypes.DATEONLY,
        allowNull:true,
    },
    nacionalidad:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    dni:{
        type: DataTypes.STRING,
    },
    domicilio:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    tutor:{
        type: DataTypes.STRING,
    },
    cicloLectivo:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    plan_educativo_id:{
        type: DataTypes.INTEGER,
        allowNull:true,
    }
},{
    sequelize,
    timestamps:false,
    modelName:'Alumno',
    tableName:'Alumno',
    paranoid:true,
});