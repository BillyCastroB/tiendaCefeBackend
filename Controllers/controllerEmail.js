import dotenv from 'dotenv';
import { main } from './configEmail.js';
dotenv.config();

export const enviarEmail = (req, res)=>{
    console.log( req.body )
    res.send(' hola desde el controller ')
    main(req.body.email, req.body.nombre)
}
