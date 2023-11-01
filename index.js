import express from 'express';
import {    Institucion,
    Modalidad,
    NivelEducativo,
    Localidad,
    Departamento,
    Ambito,
    Sector,} from  './models/asociaciones/asociaciones.js';
const app  = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})