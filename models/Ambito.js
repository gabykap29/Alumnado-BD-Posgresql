import {sequelize, DataTypes} from '../database/db.js';

export const Ambito = sequelize.define('Ambito',{
    id_ambito:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_ambito:{
        type: DataTypes.STRING,
    },
},{
    paranoid:false,
    tableName:'Ambito',
    modelName:'Ambito'
});