import express from 'express';
import {    Institucion,
    Modalidad,
    NivelEducativo,
    Localidad,
    Departamento,
    Ambito,
    Sector,} from  './models/asociaciones/asociaciones.js';
import router from './routes/router.js';
const app  = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})