import {sequelize, DataTypes} from '../database/db.js';

export const InstitucionNivel = sequelize.define('InstitucionNivel',{
    id_institucion_nivel:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    institucion_id:{
        type: DataTypes.INTEGER
    },
    nivel_educativo_id:{
        type: DataTypes.INTEGER
}
},{
    paranoid:false,
    tableName:'InstitucionNivel',
    modelName:'InstitucionNivel'
});