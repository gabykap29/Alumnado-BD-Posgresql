import {sequelize, DataTypes} from '../database/db.js';

export const Institucion = sequelize.define('Institucion',{
    id_institucion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    nombre_institucion:{
        type: DataTypes.STRING,
    },
    domicilio:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    telefono:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    mail:{
        type: DataTypes.STRING,
        allowNull:true,
    },
    localidad_id:{
        type: DataTypes.INTEGER
    },
    ambito_id:{
        type: DataTypes.INTEGER,
        allowNull:true,
    },
},{
    paranoid:false,
    tableName:'Institucion',
    modelName:'Institucion',
    timestamps:false
});