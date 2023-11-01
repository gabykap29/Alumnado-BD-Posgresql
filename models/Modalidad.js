import {sequelize, DataTypes} from '../database/db.js';

export const Modalidad = sequelize.define('Modalidad',{
    id_modalidad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_modalidad:{
        type: DataTypes.STRING,
    },
},{
    paranoid:false,
    modelName:'Modalidad',
    tableName:'Modalidad'
})