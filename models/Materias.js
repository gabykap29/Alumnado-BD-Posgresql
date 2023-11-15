import {sequelize, DataTypes, Model} from '../database/db.js';

export const Materia = sequelize.define(
    'Materia',
    {
        id_materia:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_materia:{
            type: DataTypes.STRING
        },
        plan_educativo_id:{
            type: DataTypes.INTEGER,
            allowNull:true,
        }
    },{
        paranoid:false,
        timestamps:false,
        tableName:'Materia',
        modelName:'Materia'
    }
)