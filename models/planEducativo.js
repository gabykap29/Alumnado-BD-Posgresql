import {sequelize,DataTypes, Model} from '../database/db.js';

 export const PlanEducativo = sequelize.define(
    'PlanEducativo',
    {
        id_plan_educativo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_plan_educativo:{
            type: DataTypes.STRING
        },
    },{ 
        sequelize,
        timestamps:false,
        tableName:'PlanEducativo',
        modelName:'PlanEducativo',
        paranoid:false
    }
)