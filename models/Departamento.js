import { sequelize, DataTypes } from "../database/db.js";

export const Departamento = sequelize.define('Departamento',{
    id_departamento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    name_departamento:{
        type: DataTypes.STRING,
    },
},{
    paranoid:false,
    tableName:'Departamento',
    modelName:'Departamento'
})