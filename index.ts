import express, {Express, Request, Response} from 'express';
import morgan from 'morgan';
import apiRouter from './src/routes';
import connectionDB from './src/connection/connection';

const app: Express = express(); 
const port: number = 3000; 

app.use(morgan('dev'))
app.use(express.json());
app.use(apiRouter);

connectionDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*
app.get('/', (rreq:Request, res:Response) => {
    res.send('Up and running!')
})

app.get('/products', (req:Request, res:Response) => {
    res.send('Hello Productos!')
})

app.get('/products:id', (req:Request, res:Response) => {
    res.send(req.params.id)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

*/

