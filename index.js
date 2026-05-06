

// creamos servidor con express
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './products/routes.js';
import routerAuth from './auth/routes.js';
import authMiddleware from './auth/authMiddleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
//agregamos la ruta de autenticacion
app.use('/api', routerAuth);
// agregamos la ruta de productos
app.use('/api', authMiddleware, productRoutes);

// middle para rutas desconocidas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

//ruta error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
