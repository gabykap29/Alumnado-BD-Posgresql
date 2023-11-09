import {sequelize, DataTypes} from '../database/db.js';

export const NivelEducativo = sequelize.define('NivelEducativo',{
    id_nivel:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_nivel:{
        type: DataTypes.STRING,
    },
    modalidad_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
},{
    paranoid:false,
    tableName:'NivelEducativo',
    modelName:'NivelEducativo',
});