// build.js
const fs = require('fs');
const dotenv = require('dotenv');

// Cargar variables de entorno desde Vercel
dotenv.config();

// Leer el contenido de script.js en el directorio public
let script = fs.readFileSync('./public/script.js', 'utf8');

// Reemplazar las variables de entorno
script = script.replace('process.env.MAPBOX_ACCESS_TOKEN', `"${process.env.MAPBOX_ACCESS_TOKEN}"`);
script = script.replace('process.env.MAPBOX_STYLE_URL', `"${process.env.MAPBOX_STYLE_URL}"`);

// Escribir el nuevo contenido en script.js en el directorio public
fs.writeFileSync('./public/script.js', script, 'utf8');

console.log('Variables de entorno inyectadas en script.js');
