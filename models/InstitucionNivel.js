import {sequelize, DataTypes} from '../database/db.js';

export const InstitucionNivel = sequelize.define('InstitucionNivel',{
    idNivel:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nivel_educativo_id:{
        type: DataTypes.INTEGER
    },
    institucion_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
},{
    paranoid:false,
    tableName:'InstitucionNivel',
    modelName:'InstitucionNivel'
});