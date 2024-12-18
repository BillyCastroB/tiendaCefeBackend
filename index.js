import express from 'express'
import routerEmail from './Routes/routeEmail.js'
import cors from 'cors';
const app = express();

app.use(cors()); // Permite solicitudes desde cualquier origen
const port = process.env.PORT || 4000;
app.use(express.json());

app.listen( port, ()=>{
    console.log('Inciando puerto en 4000');
} )

app.use( '/', routerEmail )