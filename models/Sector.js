import {sequelize, DataTypes} from '../database/db.js';

export const Sector = sequelize.define('Sector',{
    id_sector:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_sector:{
        type: DataTypes.STRING,
    },
},{
    sequelize,
    paranoid:false,
    modelName: 'Sector',
    tableName:'Sector'
});