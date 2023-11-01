import { Institucion } from "../Institucion.js";
import { Modalidad } from "../Modalidad.js";
import { NivelEducativo } from "../NivelEducativo.js";
import {Localidad} from "../Localidad.js";
import { Departamento } from "../Departamento.js";
import {Ambito} from '../Ambito.js';
import { Sector } from "../Sector.js";
import { Domicilio } from "../Domicilio.js";
import { sequelize } from "../../database/db.js";


Institucion.belongsToMany(Modalidad, {
    through: 'InstitucionModalidad',
    foreignKey: 'institucion_id',
    otherKey: 'modalidad_id',
    as: 'modalidad',
    timestamps: false
});

Institucion.belongsToMany(NivelEducativo, {
    through: 'InstitucionNivel',
    foreignKey: 'institucion_id',
    otherKey: 'nivel_educativo_id',
    as: 'nivelEducativo',
    timestamps: false
});

Institucion.belongsToMany(Domicilio, {
    through: 'InstitucionDomicilio',
    foreignKey: 'institucion_id',
    otherKey: 'domicilio_id',
    as: 'domicilio',
    timestamps: false
});

Departamento.hasMany(Localidad, {
    foreignKey: 'departamento_id',
    as: 'localidad',
    timestamps: false
});
Localidad.belongsTo(Departamento,{
    foreignKey:'departamento_id',
    as:'localidad',
    timestamps: false
});

Localidad.hasMany(Institucion, {
    foreignKey: 'localidad_id',
    as: 'institucionLocalidad',
    timestamps: false
});

Institucion.belongsTo(Localidad,{
    foreignKey: 'localidad_id',
    as: 'institucionLocalidad',
    timestamps: false
})

Ambito.hasMany(Institucion, {
    foreignKey: 'ambito_id',
    as: 'institucionAmbito',
    timestamps: false
});
Institucion.belongsTo(Ambito,{
    foreignKey: 'ambito_id',
    as: 'institucionAmbito',
    timestamps: false
});

Sector.hasMany(Institucion, {
    foreignKey: 'sector_id',
    as: 'institucionSector',
    timestamps: false
});
Institucion.belongsTo(Sector,{
    foreignKey: 'sector_id',
    as: 'institucionSector',
    timestamps: false
});

sequelize.sync();

export {
    Institucion,
    Modalidad,
    NivelEducativo,
    Localidad,
    Departamento,
    Ambito,
    Sector,
}