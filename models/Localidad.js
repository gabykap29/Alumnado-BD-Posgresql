import {sequelize, DataTypes} from '../database/db.js';

export const Localidad = sequelize.define('Localidad',{
    id_localidad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_localidad:{
        type: DataTypes.STRING,
    },
    departamento_id:{
        type: DataTypes.INTEGER
    },
    cod_postal:{
        type: DataTypes.INTEGER
    },
},{
    sequelize,
    paranoid:false,
    tableName:'Localidad',
    modelName:'Localidad',
});