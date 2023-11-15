import {sequelize, Model,DataTypes} from '../database/db.js';
import { Alumno } from './Alumno.js';
export const Promovidos = sequelize.define('Promovidos',{
    idPromovidos:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    alumno_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    promovido:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    cicloLectivo:{
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize,
    modelName:'Promovidos',
    tableName:'Promovidos',
    timestamps:false,
})

Promovidos.belongsTo(Alumno,{as:'alumnoPro',foreignKey:'alumno_id'});

Promovidos.sync();