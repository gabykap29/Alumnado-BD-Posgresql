import { Institucion } from "../Institucion.js";
import { Modalidad } from "../Modalidad.js";
import { NivelEducativo } from "../NivelEducativo.js";
import { Localidad } from "../Localidad.js";
import { Departamento } from "../Departamento.js";
import { Ambito } from "../Ambito.js";
import { Sector } from "../Sector.js";
import { sequelize } from "../../database/db.js";

Institucion.belongsToMany(NivelEducativo, {
  through: "InstitucionNivel",
  foreignKey: "institucion_id",
  otherKey: "nivel_educativo_id",
  as: "nivelEducativo",
  timestamps: false,
});

Departamento.hasMany(Localidad, {
  foreignKey: "departamento_id",
  as: "localidad",
  timestamps: false,
});
Localidad.belongsTo(Departamento, {
  foreignKey: "departamento_id",
  as: "localidad",
  timestamps: false,
});

Localidad.hasMany(Institucion, {
  foreignKey: "localidad_id",
  as: "institucionLocalidad",
  timestamps: false,
});

Institucion.belongsTo(Localidad, {
  foreignKey: "localidad_id",
  as: "institucionLocalidad",
  timestamps: false,
});

Ambito.hasMany(Institucion, {
  foreignKey: "ambito_id",
  as: "institucionAmbito",
  timestamps: false,
});
Institucion.belongsTo(Ambito, {
  foreignKey: "ambito_id",
  as: "institucionAmbito",
  timestamps: false,
});

Modalidad.hasMany(NivelEducativo,{
  foreignKey: "modalidad_id",
  as: "nivelEducativoModalidad",
  timestamps: false,
});
NivelEducativo.belongsTo(Modalidad,{
  foreignKey: "modalidad_id",
  as: "nivelEducativoModalidad",
  timestamps: false,
});

Sector.hasMany(Institucion, {
  foreignKey: "sector_id",
  as: "institucionSector",
  timestamps: false,
});
Institucion.belongsTo(Sector, {
  foreignKey: "sector_id",
  as: "institucionSector",
  timestamps: false,
});

sequelize.sync();

let localidades = [
  null,
  "COLONIA SAN ANTONIO",
  "COLONIA SAN ISIDRO",
  "LA ESPERANZA",
  "9, DE JULIO",
  "A. FLORES",
  "AIBAL EL SILENCIO",
  "ALTO ALEGRE",
  "AMARILLA",
  "APAYEREY",
  "BANIADERO",
  "BAJO HONDO",
  "BANCO LA EMILIA",
  "BANCO PAYAGUA",
  "BARRIO EL FAVORITO",
  "BARTOLOME DE LAS CASAS",
  "BOCA DE PILAGAS",
  "BOLSA DEL PALOMO",
  "BUENA VISTA",
  "BUEY MUERTO",
  "CABO 1,° NORONIA",
  "CABO ADRIANO AYALA",
  "CACIQUE COQUERO",
  "CAMPO ALEGRE",
  "CAMPO AZCURRA",
  "CAMPO BANDERA",
  "CAMPO DE AVIACION",
  "CAMPO DEL ACHA",
  "CAMPO DEL CIELO",
  "CAMPO GRANDE",
  "CAMPO HARDY",
  "CAMPO LA CRUZ",
  "CAMPO SAN RAFAEL",
  "CAMPO TRES POZOS",
  "CASCO CUE",
  "CEIBO TRECE",
  "CENTRO FORESTAL PIRANE",
  "CHICO DOWAGAN",
  "CLORINDA",
  "COLONIA 20, DE JUNIO",
  "COLONIA 25, DE MAYO",
  "COLONIA 5, DE OCTUBRE",
  "COLONIA ABORIGEN",
  "COLONIA ABORIGEN LA BOMBA",
  "COLONIA ALTO ALEGRE",
  "COLONIA BARTOLOME DE LAS CASAS",
  "COLONIA CAMPO VILLAFANIE",
  "COLONIA CEFERINO NAMUNCURA",
  "COLONIA DALMACIA",
  "COLONIA DANTE SANDRELLI",
  "COLONIA EL ALBA",
  "COLONIA EL CATORCE",
  "COLONIA EL CEIBO",
  "COLONIA EL CHAJA",
  "COLONIA EL COMIENZO",
  "COLONIA EL DESAGUADERO",
  "COLONIA EL DORADO",
  "COLONIA EL ENSANCHE",
  "COLONIA EL NARANJITO",
  "COLONIA EL OLVIDO",
  "COLONIA EL PALMAR",
  "COLONIA EL PAVAO",
  "COLONIA EL PROGRESO",
  "COLONIA EL RINCON",
  "COLONIA EL SILENCIO",
  "COLONIA EL ZAPALLITO",
  "COLONIA ENSANCHE NORTE",
  "COLONIA ISLA SOLA",
  "COLONIA ITATI",
  "COLONIA ITUZAINGO",
  "COLONIA JAVIER MUNIZ",
  "COLONIA JUAN BAUTISTA ALBERDI",
  "COLONIA JUANITA",
  "COLONIA LA DISCIPLINA",
  "COLONIA LA PREFERIDA",
  "COLONIA LA PRIMAVERA",
  "COLONIA LA UNION",
  "COLONIA LAGUNA GOBERNADOR",
  "COLONIA LAKA-WICHI",
  "COLONIA LAS CHOYAS",
  "COLONIA LOMA SENES",
  "COLONIA LOS SANTAFESINOS",
  "COLONIA NAPENAY",
  "COLONIA NUEVA",
  "COLONIA OSVALDO QUIROGA",
  "COLONIA PASTORIL",
  "COLONIA PRESIDENTE YRIGOYEN",
  "COLONIA RIGONATO",
  "COLONIA RODA",
  "COLONIA SAN ANTONIO",
  "COLONIA SAN ISIDRO",
  "COLONIA SAN JOSE",
  "COLONIA SAN JUAN",
  "COLONIA SAN PABLO",
  "COLONIA SAN PEDRO",
  "COLONIA SAN ROQUE",
  "COLONIA SANTA CRUZ",
  "COLONIA SANTA ROSA",
  "COLONIA SARMIENTO",
  "COLONIA SIETE QUEBRACHOS",
  "COLONIA SUDAMERICANA",
  "COLONIA TATANE",
  "COLONIA UNION ESCUELA",
  "COLONIA YATAY",
  "COMANDANTE FONTANA",
  "COMUNIDAD 7, DE JUNIO",
  "COMUNIDAD ABORIGEN WICHI",
  "COMUNIDAD ABORIGEN WICHI FWINAFWAS",
  "COMUNIDAD LOTE 21,",
  "COMUNIDAD WICHI BARRIO EL COLORADO",
  "COMUNIDAD WICHI OBLITAJ",
  "COPO BLANCO",
  "COSTA ALEGRE",
  "COSTA RIACHO ALAZAN",
  "EL ALAMBRADO",
  "EL ALBA",
  "EL ALGARROBO",
  "EL ANGELITO",
  "EL BAJO",
  "EL BELLACO",
  "EL BOSQUECILLO",
  "EL BREAL",
  "EL CANION",
  "EL CACUY",
  "EL CAJON",
  "EL CEIBAL",
  "EL CHANIARAL",
  "EL CHIVIL",
  "EL CHORRO",
  "EL CHURCAL",
  "EL CHURCALITO",
  "EL COATI",
  "EL COGOIK",
  "EL COLETO",
  "EL COLORADO",
  "EL CORRALITO",
  "EL CRUCE",
  "EL DESCANSO",
  "EL DIVISADERO",
  "EL ESPINILLO",
  "EL ESTANQUE",
  "EL GATO",
  "EL GUAJO",
  "EL LINDERO",
  "EL MATADERO",
  "EL MBIGUA",
  "EL MILAGRO",
  "EL MISTOLAR",
  "EL OCULTO",
  "EL PALMARCITO",
  "EL PARAISO",
  "EL PERDIDO",
  "EL PIQUETE",
  "EL POI",
  "EL POMBERO",
  "EL POTRERITO",
  "EL POTRILLO",
  "EL QUEBRACHO",
  "EL QUEMADO",
  "EL QUIMIL",
  "EL RECODO",
  "EL RECREO",
  "EL REMANSO",
  "EL RESGUARDO",
  "EL ROSARIO",
  "EL ROSILLO",
  "EL SALADILLO",
  "EL SALADO",
  "EL SAUZALITO",
  "EL SILENCIO",
  "EL SIMBOLAR",
  "EL SOL",
  "EL SOLITARIO",
  "EL TABIQUE",
  "EL TIMBO",
  "EL TOTORAL",
  "EL TREBOL",
  "EL TRONQUITO",
  "EL TUCUMANCITO",
  "ESPERANZA",
  "ESTANISLAO DEL CAMPO",
  "ESTERITO",
  "ESTERO PATINIO",
  "FORMOSA",
  "FORTIN CABO 1,° LUGONES",
  "FORTIN LA MADRID",
  "FORTIN PILCOMAYO NUEVO",
  "FORTIN SARGENTO 1,° LEYES",
  "FORTIN SOLEDAD",
  "GARCETE CUE",
  "GENERAL LUCIO V. MANSILLA",
  "GRAN GUARDIA",
  "GUADALCAZAR",
  "GUAYCOLEC",
  "HERRADURA",
  "IBARRETA",
  "INGENIERO GUILLERMO N. JUAREZ",
  "ISLA 25, DE MAYO",
  "ISLA APANDO",
  "ISLA AZUL",
  "ISLA PUEN",
  "ISLA YOBAI GUAZU",
  "JOSE MARIA PAZ",
  "JUAN G. BAZAN",
  "JULIO CUE",
  "KILOMETRO 117,",
  "KILOMETRO 142,",
  "KILOMETRO 15,",
  "KILOMETRO 210,",
  "KILOMETRO 224,",
  "KILOMETRO 503,",
  "LA BATERIA",
  "LA BREA",
  "LA CIERVA",
  "LA ESPERANZA",
  "LA ESTRELLA",
  "LA FLORESTA",
  "LA FRONTERA",
  "LA INVERNADA",
  "LA JUNTA",
  "LA LIBERTAD",
  "LA LINEA",
  "LA LOMA",
  "LA LOMITA",
  "LA MADRUGADA",
  "LA MEDIA LUNA",
  "LA MOCHA",
  "LA PALIZADA",
  "LA PAMPA",
  "LA PANTALLA",
  "LA PICADITA",
  "LA PLAYA",
  "LA REPRESA",
  "LA RINCONADA",
  "LA SIRENA",
  "LA ZANJA",
  "LAGO VERDE",
  "LAGUNA ACEVAL",
  "LAGUNA BLANCA",
  "LAGUNA GALLO",
  "LAGUNA NAICK-NECK",
  "LAGUNA TORO",
  "LAGUNA TRES PACES",
  "LAGUNA YACARE",
  "LAGUNA YEMA",
  "LAGUNITA",
  "LAQTASATANYIE (KM14,)",
  "LAS BANDERITAS",
  "LAS BOLIVIANAS",
  "LAS CANITAS",
  "LAS LOLAS",
  "LAS LOMITAS",
  "LAS MOCHAS",
  "LAS PALMITAS",
  "LOMA ALBERDI",
  "LOMA DEL QUEBRANTO",
  "LOMA HERMOSA",
  "LOMA SAN PABLO",
  "LOMA SENES",
  "LOMA SENES SUR",
  "LOMA ZAPATU",
  "LORO CUE",
  "LOS CHIRIGUANOS",
  "LOS CIENEGUITOS",
  "LOS JUBILADOS",
  "LOS MATACOS",
  "LOS POCITOS",
  "LOS TRES REYES",
  "LOTE 1,",
  "LOTE 108, LADRILLERIA",
  "LOTE 11,",
  "LOTE 17,-LEGUA A",
  "LOTE 20, RURAL",
  "LOTE 219,",
  "LOTE 27,",
  "LOTE 31, MAYOR VILLAFANIE",
  "LOTE 42,",
  "LOTE 47,",
  "LOTE 8,",
  "LUCERO CUE",
  "MAESTRA BLANCA GOMEZ",
  "MARCA M",
  "MARIA CRISTINA",
  "MARIANO BOEDO",
  "MARTIN FIERRO",
  "MATIAS GULACSI",
  "MEDIA LUNA",
  "MERCEDES CUE",
  "MISION SAN ANDRES",
  "MISION TACAAGLE",
  "MOJON DE FIERRO",
  "MONTE LINDO",
  "MONTE QUEMADO",
  "MURUA",
  "PALMA SOLA",
  "PALMAR LARGO",
  "PALO SANTO",
  "PALO SECO",
  "PARATODOS",
  "PASO ANGELITO",
  "PASO NAITE",
  "PASO POLENTA",
  "PESCADO NEGRO",
  "PILAGAS III",
  "PIRANE",
  "PORTON NEGRO",
  "POSTA CAMBIO ZALAZAR",
  "POSTA DEL SALADO",
  "POTRERO NIANDU",
  "POTRERO DE LOS CABALLOS",
  "POTRERO NORTE",
  "POZO CABALLO",
  "POZO CERCADO",
  "POZO CHARATA",
  "POZO DE LOS PATOS",
  "POZO DE MAZA",
  "POZO DE MOLINA",
  "POZO DEL MORTERO",
  "POZO DEL OSO",
  "POZO DEL TIGRE",
  "POZO EL YACARE",
  "POZO HONDO",
  "POZO LA CHIVA",
  "POZO LARGO",
  "POZO NAVAGAN",
  "POZO RAMON",
  "POZO SARGENTO",
  "PRESIDENTE AVELLANEDA",
  "PUENTE SAN HILARIO",
  "PUERTO CABO IRIGOYEN",
  "PUERTO IRIGOYEN",
  "PUERTO LAVALLE",
  "PUERTO PILCOMAYO",
  "PUESTO RAMONA",
  "PUNTA DE AGUA",
  "PUNTA GUIA",
  "RANERO CUE",
  "RIACHO DE ORO",
  "RIACHO HE-HE",
  "RIACHO LINDO",
  "RIACHO NEGRO",
  "RINCON FLORIDO",
  "RIO MUERTO",
  "RODAS",
  "RODEO TAPITI",
  "SALVACION",
  "SAN BLAS",
  "SAN CARLOS",
  "SAN CAYETANO",
  "SAN FRANCISCO DE LAISHI",
  "SAN HILARIO",
  "SAN MARTIN I",
  "SAN MARTIN II",
  "SAN MIGUEL",
  "SAN SIMON",
  "SANTA ISABEL",
  "SANTA ROSA",
  "SANTA TERESA",
  "SIETE PALMAS",
  "SOL DE MAYO",
  "SOLDADO D. SALVATIERRA",
  "SOLDADO EDMUNDO SOSA",
  "SOLDADO I. SANCHEZ",
  "SOMBRERO NEGRO",
  "SUBTENIENTE PERIN",
  "SUMAYEN",
  "TATANE",
  "TENIENTE BROWN",
  "TENIENTE GENERAL ROSENDO M. FRAGA",
  "TOTO PASO",
  "TRES LAGUNAS",
  "TRES MOJONES",
  "TRES PALMAS",
  "TRES PALMITAS",
  "TRES POZOS",
  "TRES YUCHAN",
  "URBANA VIEJA",
  "VACA PERDIDA",
  "VILLA DEVOTO",
  "VILLA ESCOLAR",
  "VILLA GENERAL GÜEMES",
  "VILLA GENERAL MANUEL BELGRANO",
  "VILLA GENERAL URQUIZA",
  "VILLA HERMOSA",
  "VILLA KILOMETRO 213,",
  "VILLA MARIN",
  "VILLA REAL",
  "VILLA RURAL",
  "VILLA TRINIDAD",
  "VISTA ALEGRE",
];

let idLocalidades = [
  null,
  34035085,
  34035086,
  34056174,
  34035001,
  34007004,
  34007251,
  34014006,
  34042003,
  34056020,
  34007009,
  34014156,
  34021002,
  34063090,
  34035617,
  34014010,
  34028005,
  34042008,
  34049009,
  34056028,
  34021008,
  34035035,
  34035037,
  34035038,
  34028007,
  34035618,
  34063003,
  34035040,
  34028008,
  34056033,
  34028010,
  34056034,
  34035632,
  34056038,
  34049011,
  34056305,
  34035052,
  34049013,
  34035056,
  34042015,
  34056042,
  34042097,
  34035634,
  34035059,
  34035619,
  34056045,
  34035065,
  34014157,
  34035620,
  34056047,
  34035621,
  34042016,
  34056048,
  34056049,
  34056050,
  34021020,
  34035066,
  34021021,
  34056051,
  34056052,
  34035067,
  34056053,
  34056054,
  34035069,
  34056056,
  34035623,
  34035072,
  34056058,
  34014018,
  34035074,
  34035073,
  34035075,
  34056059,
  34035076,
  34049018,
  34056061,
  34021022,
  34035633,
  34035078,
  34056063,
  34049019,
  34035080,
  34042017,
  34035515,
  34014020,
  34014022,
  34056067,
  34056068,
  34021026,
  34021027,
  34035087,
  34049020,
  34035089,
  34035090,
  34035091,
  34056070,
  34035093,
  34035094,
  34035095,
  34049022,
  34035097,
  34035099,
  34021028,
  34035101,
  34063104,
  34063113,
  34028084,
  34035638,
  34063117,
  34063115,
  34056073,
  34049023,
  34056079,
  34063012,
  34056086,
  34063014,
  34021036,
  34007239,
  34035625,
  34056089,
  34007043,
  34007049,
  34035128,
  34007045,
  34035132,
  34007240,
  34063020,
  34063093,
  34007055,
  34007241,
  34056090,
  34035139,
  34007056,
  34056091,
  34056092,
  34035141,
  34035143,
  34035147,
  34042023,
  34063095,
  34056094,
  34056095,
  34007242,
  34035158,
  34021039,
  34028083,
  34028024,
  34035161,
  34063029,
  34049034,
  34035165,
  34056102,
  34056103,
  34042024,
  34028078,
  34063030,
  34063096,
  34007079,
  34007243,
  34049036,
  34035176,
  34007080,
  34056104,
  34063033,
  34028079,
  34056105,
  34056106,
  34063283,
  34063034,
  34007082,
  34063108,
  34007083,
  34063036,
  34035186,
  34028027,
  34028081,
  34063098,
  34063038,
  34049038,
  34035221,
  34021051,
  34056137,
  34014051,
  34035248,
  34007095,
  34007097,
  34035250,
  34007098,
  34049055,
  34021056,
  34014055,
  34007102,
  34014056,
  34021062,
  34035265,
  34028033,
  34014059,
  34049059,
  34042038,
  34049065,
  34049068,
  34049126,
  34035272,
  34042042,
  34021114,
  34056164,
  34035278,
  34056165,
  34056167,
  34035280,
  34063111,
  34063047,
  34035295,
  34007117,
  34035305,
  34056175,
  34049074,
  34035313,
  34028046,
  34007123,
  34035314,
  34056176,
  34056306,
  34007257,
  34035320,
  34007254,
  34007247,
  34035328,
  34035630,
  34056177,
  34021076,
  34007133,
  34007134,
  34056180,
  34007252,
  34035348,
  34035635,
  34049075,
  34042047,
  34049077,
  34042098,
  34007244,
  34007245,
  34007145,
  34007146,
  34035626,
  34007149,
  34007150,
  34056184,
  34035368,
  34035369,
  34035372,
  34063114,
  34056309,
  34056186,
  34049078,
  34035389,
  34056301,
  34056307,
  34042051,
  34042052,
  34007162,
  34007246,
  34035628,
  34056187,
  34007165,
  34035403,
  34063057,
  34056188,
  34056189,
  34056191,
  34035404,
  34056304,
  34035405,
  34056308,
  34035636,
  34035637,
  34063060,
  34049081,
  34035408,
  34049082,
  34063061,
  34014158,
  34049084,
  34007170,
  34007171,
  34056199,
  34063065,
  34042058,
  34014095,
  34056209,
  34056210,
  34056215,
  34049091,
  34063069,
  34056226,
  34063071,
  34056228,
  34049128,
  34035467,
  34021088,
  34007193,
  34056230,
  34056231,
  34042063,
  34035483,
  34021090,
  34056236,
  34021091,
  34056234,
  34063110,
  34063072,
  34063109,
  34028080,
  34007198,
  34007199,
  34007205,
  34063106,
  34035498,
  34028067,
  34035500,
  34063102,
  34035501,
  34035505,
  34007249,
  34007253,
  34049094,
  34014160,
  34007211,
  34063116,
  34035510,
  34049097,
  34042096,
  34035511,
  34049099,
  34035518,
  34035521,
  34049105,
  34021095,
  34049131,
  34035525,
  34007213,
  34056249,
  34049130,
  34042067,
  34042070,
  34035539,
  34007250,
  34021097,
  34014124,
  34063081,
  34035546,
  34035547,
  34063103,
  34035552,
  34007222,
  34063082,
  34063083,
  34049113,
  34049114,
  34035570,
  34056302,
  34035572,
  34007227,
  34035578,
  34007228,
  34021104,
  34035586,
  34028075,
  34049119,
  34042087,
  34021108,
  34063087,
  34028082,
  34035596,
  34007256,
  34035598,
  34007236,
  34063105,
  34021110,
  34035605,
  34035606,
  34035607,
  34042089,
  34056287,
  34035629,
  34042091,
  34042092,
  34014161,
  34042094,
];

let idDepartamentos = [
  null,
  34035,
  34035,
  34056,
  34056,
  34035,
  34007,
  34007,
  34014,
  34042,
  34056,
  34007,
  34014,
  34021,
  34063,
  34035,
  34014,
  34028,
  34042,
  34049,
  34056,
  34021,
  34035,
  34035,
  34035,
  34028,
  34035,
  34063,
  34035,
  34028,
  34056,
  34028,
  34056,
  34035,
  34056,
  34049,
  34056,
  34035,
  34049,
  34035,
  34042,
  34056,
  34042,
  34035,
  34035,
  34035,
  34056,
  34035,
  34014,
  34035,
  34056,
  34035,
  34042,
  34056,
  34056,
  34056,
  34021,
  34035,
  34021,
  34056,
  34056,
  34035,
  34056,
  34056,
  34035,
  34056,
  34035,
  34035,
  34056,
  34014,
  34035,
  34035,
  34035,
  34056,
  34035,
  34049,
  34056,
  34021,
  34035,
  34035,
  34056,
  34049,
  34035,
  34042,
  34035,
  34014,
  34014,
  34056,
  34056,
  34021,
  34021,
  34035,
  34049,
  34035,
  34035,
  34035,
  34056,
  34035,
  34035,
  34035,
  34049,
  34035,
  34035,
  34021,
  34035,
  34063,
  34063,
  34028,
  34035,
  34063,
  34063,
  34056,
  34049,
  34056,
  34063,
  34056,
  34063,
  34021,
  34007,
  34035,
  34056,
  34007,
  34007,
  34035,
  34007,
  34035,
  34007,
  34063,
  34063,
  34007,
  34007,
  34056,
  34035,
  34007,
  34056,
  34056,
  34035,
  34035,
  34035,
  34042,
  34063,
  34056,
  34056,
  34007,
  34035,
  34021,
  34028,
  34028,
  34035,
  34063,
  34049,
  34035,
  34056,
  34056,
  34042,
  34028,
  34063,
  34063,
  34007,
  34007,
  34049,
  34035,
  34007,
  34056,
  34063,
  34028,
  34056,
  34056,
  34063,
  34063,
  34007,
  34063,
  34007,
  34063,
  34035,
  34028,
  34028,
  34063,
  34063,
  34049,
  34035,
  34021,
  34056,
  34014,
  34035,
  34007,
  34007,
  34035,
  34007,
  34049,
  34021,
  34014,
  34007,
  34014,
  34021,
  34035,
  34028,
  34014,
  34049,
  34042,
  34049,
  34049,
  34049,
  34035,
  34042,
  34021,
  34056,
  34035,
  34056,
  34056,
  34035,
  34063,
  34063,
  34035,
  34007,
  34035,
  34056,
  34049,
  34035,
  34028,
  34007,
  34035,
  34056,
  34056,
  34007,
  34035,
  34007,
  34007,
  34035,
  34035,
  34056,
  34021,
  34007,
  34007,
  34056,
  34007,
  34035,
  34035,
  34049,
  34042,
  34049,
  34042,
  34007,
  34007,
  34007,
  34007,
  34035,
  34007,
  34007,
  34056,
  34035,
  34035,
  34035,
  34063,
  34056,
  34056,
  34049,
  34035,
  34056,
  34056,
  34042,
  34042,
  34007,
  34007,
  34035,
  34056,
  34007,
  34035,
  34063,
  34056,
  34056,
  34056,
  34035,
  34056,
  34035,
  34056,
  34035,
  34035,
  34063,
  34049,
  34035,
  34049,
  34063,
  34014,
  34049,
  34007,
  34007,
  34056,
  34063,
  34042,
  34014,
  34056,
  34056,
  34056,
  34049,
  34063,
  34056,
  34063,
  34056,
  34049,
  34035,
  34021,
  34007,
  34056,
  34056,
  34042,
  34035,
  34021,
  34056,
  34021,
  34056,
  34063,
  34063,
  34063,
  34028,
  34007,
  34007,
  34007,
  34063,
  34035,
  34028,
  34035,
  34063,
  34035,
  34035,
  34007,
  34007,
  34049,
  34014,
  34007,
  34063,
  34035,
  34049,
  34042,
  34035,
  34049,
  34035,
  34035,
  34049,
  34021,
  34049,
  34035,
  34007,
  34056,
  34049,
  34042,
  34042,
  34035,
  34007,
  34021,
  34014,
  34063,
  34035,
  34035,
  34063,
  34035,
  34007,
  34063,
  34063,
  34049,
  34049,
  34035,
  34056,
  34035,
  34007,
  34035,
  34007,
  34021,
  34035,
  34028,
  34049,
  34042,
  34021,
  34063,
  34028,
  34035,
  34007,
  34035,
  34007,
  34063,
  34021,
  34035,
  34035,
  34035,
  34042,
  34056,
  34035,
  34042,
  34042,
  34014,
  34042,
];

let codPostal = [
  null,
  3624,
  3615,
  3601,
  3606,
  3624,
  3634,
  3620,
  3636,
  3615,
  3603,
  3630,
  3600,
  3601,
  3630,
  3622,
  3601,
  3636,
  3615,
  3611,
  0,
  3526,
  3628,
  3626,
  3624,
  3636,
  3620,
  3636,
  3630,
  3636,
  3603,
  3636,
  3609,
  3632,
  3606,
  3613,
  3606,
  3621,
  3610,
  3615,
  3615,
  3606,
  3615,
  3630,
  3620,
  3620,
  3609,
  3621,
  3601,
  3621,
  3603,
  3624,
  3615,
  3601,
  3608,
  3603,
  3605,
  3624,
  3605,
  3609,
  3606,
  3621,
  3608,
  3601,
  3624,
  3603,
  3624,
  3624,
  3601,
  3601,
  3630,
  3626,
  3624,
  3606,
  3626,
  3611,
  3603,
  3605,
  3628,
  3626,
  3606,
  3611,
  3620,
  3611,
  3621,
  3601,
  3601,
  3606,
  3603,
  3605,
  3526,
  3621,
  3611,
  3621,
  3624,
  3624,
  3606,
  3615,
  3621,
  3624,
  3613,
  3620,
  3621,
  3601,
  3620,
  3636,
  3636,
  3636,
  3628,
  3636,
  3636,
  3608,
  3613,
  3609,
  3636,
  3603,
  3636,
  3601,
  3634,
  3603,
  3606,
  3636,
  3634,
  3621,
  3630,
  3621,
  3636,
  3636,
  3636,
  3636,
  3634,
  3606,
  3615,
  3630,
  3603,
  3606,
  3626,
  3630,
  3624,
  3615,
  3636,
  3601,
  3606,
  3636,
  3620,
  3526,
  3636,
  3636,
  3624,
  0,
  3611,
  3630,
  3600,
  3602,
  3611,
  3636,
  3600,
  3636,
  3634,
  3636,
  3611,
  3626,
  3630,
  3608,
  3636,
  3636,
  3609,
  3606,
  3636,
  3601,
  3634,
  3636,
  3636,
  3636,
  3621,
  3636,
  3636,
  3630,
  3636,
  3611,
  3626,
  3601,
  3608,
  3600,
  3621,
  3630,
  3630,
  3621,
  3630,
  3611,
  3526,
  3604,
  3630,
  3600,
  3601,
  3624,
  3636,
  3600,
  3611,
  3615,
  3611,
  3613,
  3613,
  3630,
  3615,
  3526,
  3601,
  3621,
  3603,
  3603,
  3626,
  3636,
  3636,
  3624,
  3630,
  3621,
  3606,
  3611,
  3628,
  3636,
  3630,
  3630,
  3606,
  3606,
  3636,
  3624,
  3636,
  3634,
  3630,
  3630,
  3601,
  3601,
  3632,
  3630,
  3603,
  3630,
  3626,
  3626,
  3613,
  3611,
  3611,
  3611,
  3636,
  3634,
  3632,
  3636,
  3630,
  3630,
  3634,
  3601,

  3630,
  3626,
  3636,
  3606,
  3606,
  3611,
  3615,
  3606,
  3606,
  3611,
  3615,
  3632,
  3636,
  3620,
  3608,
  3636,
  3621,
  3636,
  3603,
  3608,
  3602,
  3620,
  3602,
  3630,
  3601,
  3630,
  3630,
  3636,
  3611,
  3624,
  3613,
  3636,
  3604,
  3611,
  3634,
  3630,
  3601,
  3636,
  0,
  3601,
  3606,
  3606,
  3606,
  3611,
  3636,
  3608,
  3636,
  3606,
  3611,
  3628,
  3605,
  3636,
  3606,
  3606,
  3615,
  3632,
  3601,
  3608,
  3526,
  3608,
  3636,
  3636,
  3636,
  3636,
  3636,
  3630,
  3632,
  3636,
  3628,
  3636,
  3626,
  3636,
  3626,
  3626,
  3636,
  3636,
  3611,
  3600,
  3636,
  3636,
  3624,
  3610,
  3615,
  3630,
  3611,
  3626,
  3624,
  3611,
  3601,
  3610,
  3620,
  3630,
  3603,
  3613,
  3611,
  3615,
  3626,
  3630,
  3605,
  3600,
  3636,
  3621,
  3621,
  3636,
  3603,
  3634,
  3615,
  3636,
  3613,
  3613,
  3626,
  3601,
  3624,
  3636,
  3624,
  3634,
  3601,
  3630,
  3636,
  3611,
  3611,
  3601,
  3636,
  3636,
  0,
  3636,
  3621,
  3636,
  3636,
  3526,
  3621,
  3615,
  3628,
  3611,
  3602,
  3628,
  3615,
  3615,
  3600,
  3615,
  0,
];

const comprobaciones = async () => {
  Localidad.sync();
  const countLocal = await Localidad.count();
  if (countLocal === 0) {
    for (let i = 1; i < localidades.length; i++) {
      await Localidad.create({
        id_localidad: idLocalidades[i],
        name_localidad: localidades[i],
        cod_postal: codPostal[i],
        departamento_id: idDepartamentos[i],
      });
    }
    console.log("Localidades cargadas!");
  } else {
    console.log("Las localidades ya se encuentran cargadas!");
  }
  Ambito.sync();
  const countAmbito = await Ambito.count();
  if (countAmbito === 0) {
    await Ambito.bulkCreate([
      {
        name_ambito: "Rural",
      },
      {
        name_ambito: "Urbano",
      },
    ]);
    console.log("Ambitos cargados!");
  } else {
    console.log("Los ambitos ya se encuentran cargados!");
  }

  Sector.sync();
  const countSector = await Sector.count();
  if (countSector === 0) {
    await Sector.bulkCreate([
      {
        name_sector: "Privado",
      },
      {
        name_sector: "Publico",
      },
      {
        name_sector: "Social/Coperativa",
      },
    ]);
    console.log("Sectores cargados!");
  } else {
    console.log("Los sectores ya se encuentran cargados!");
  }

  Modalidad.sync();
  const countModalidad = await Modalidad.count();
  if (countModalidad === 0) {
    await Modalidad.bulkCreate([
      {
        name_modalidad: "mod_comun",
      },
      {
        name_modalidad: "mod_especial",
      },
      {
        name_modalidad: "mod_adultos",
      },
    ]);
    console.log("Modalidades cargadas!");
  } else {
    console.log("Las modalidades ya se encuentran cargadas!");
  }
  await NivelEducativo.sync();
  const countNivel = await NivelEducativo.count();
  if (countNivel == 0) {
    NivelEducativo.bulkCreate([
      { modalidad_id: 1, nombre_nivel: "ec_mat" },
      { modalidad_id: 1, nombre_nivel: "ec_jar" },
      { modalidad_id: 1, nombre_nivel: "ec_pri" },
      { modalidad_id: 1, nombre_nivel: "ec_sec" },
      { modalidad_id: 1, nombre_nivel: "ec_sec_INET" },
      { modalidad_id: 1, nombre_nivel: "ec_SNU" },
      { modalidad_id: 1, nombre_nivel: "ec_SNU_INET" },
      { modalidad_id: 1, nombre_nivel: "ec_SNU_cur" },
      { modalidad_id: 2, nombre_nivel: "esp_tem" },
      { modalidad_id: 2, nombre_nivel: "esp_ini" },
      { modalidad_id: 2, nombre_nivel: "esp_pri" },
      { modalidad_id: 2, nombre_nivel: "esp_sec" },
      { modalidad_id: 2, nombre_nivel: "esp_int" },
      { modalidad_id: 3, nombre_nivel: "ad_pri" },
      { modalidad_id: 3, nombre_nivel: "ad_sec" },
      { modalidad_id: 3, nombre_nivel: "ad_FP" },
      { modalidad_id: 3, nombre_nivel: "ad_FP_INET" },
      { modalidad_id: 3, nombre_nivel: "ad_alf" },
      { modalidad_id: 2, nombre_nivel: "hos_ini" },
      { modalidad_id: 2, nombre_nivel: "hos_pri" },
      { modalidad_id: 2, nombre_nivel: "hos_sec" },
      { modalidad_id: 2, nombre_nivel: "tall_art" },
      { modalidad_id: 2, nombre_nivel: "ser_com" },
    ]);
  }
};

comprobaciones();

export {
  Institucion,
  Modalidad,
  NivelEducativo,
  Localidad,
  Departamento,
  Ambito,
  Sector,
};
