import {sequelize, DataTypes, Model} from '../database/db.js';

export const HistorialAcademico = sequelize.define(
    'HistorialAcademico',{
        id_historial_academico:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        alumno_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        materia_id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        trimestre:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        cuatrimestre:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        nota:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
        anio:{
            type: DataTypes.STRING,
            allowNull:true,
        },
    },{
        sequelize,
        timestamps:false,
        tableName:'HistorialAcademico',
        modelName:'HistorialAcademico',
        paranoid:false
    }
)