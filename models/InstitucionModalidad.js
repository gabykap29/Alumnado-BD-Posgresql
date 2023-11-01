import {sequelize, DataTypes} from '../database/db.js';

export const InstitucionModalidad = sequelize.define('InstitucionModalidad',{
    id_institucionModalidad:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    institucion_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    modalidad_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
},{
    paranoid:false,
    tableName:'InstitucionModalidad',
    modelName:'InstitucionModalidad',
});