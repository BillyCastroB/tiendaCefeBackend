import express from 'express'
import { Router } from 'express'
import { enviarEmail } from '../Controllers/controllerEmail.js';
const router = Router();


router.post('/email', enviarEmail)

export default router;