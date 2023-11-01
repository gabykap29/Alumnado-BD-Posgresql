import { sequelize, DataTypes } from "../database/db.js";

export const InstitucionDomicilio = sequelize.define('InstitucionDomicilio',{
    id_institucion_domicilio:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    institucion_id:{
        type: DataTypes.INTEGER
    },
    domicilio_id:{
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    paranoid:false,
    tableName:'InstitucionDomicilio',
    modelName:'InstitucionDomicilio'
});