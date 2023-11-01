import {sequelize, DataTypes}from '../database/db.js';

export const Domicilio = sequelize.define('Domicilio',{
    id_domicilio:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    domicilio:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    localidad_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},{
    paranoid:false,
    tableName:'Domicilio',
    modelName:'Domicilio',
});
