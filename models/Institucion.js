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
    telefono:{
        type: DataTypes.STRING
    },
    mail:{
        type: DataTypes.STRING
    },
    modalidad_id:{
        type: DataTypes.INTEGER
    },
    localidad_id:{
        type: DataTypes.INTEGER
    },
    nivel_educativo_id:{
        type: DataTypes.INTEGER
    },
    domicilio_id:{
        type: DataTypes.INTEGER,
    },
    ambito_id:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
});