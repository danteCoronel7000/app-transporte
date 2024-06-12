import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'

//instanciamos expres
const app = express();
//aqui decimos que utile el module morgan y quiero su propiedad dev del modulo
app.use(morgan('dev'));
//tambien que utilice el modulo cors
app.use(cors());
app.use(express.json())
app.use(userRoutes)

export default app;