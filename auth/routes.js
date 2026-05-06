// generamos la ruta de autenticacion con jwttoken
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
// Ruta para iniciar sesión y obtener un token JWT
router.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    // Aquí deberías validar el usuario y la contraseña con tu base de datos
    if (username === 'admin' && password === '123') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

export default router;