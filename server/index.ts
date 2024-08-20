import express , {Express,Request,Response} from 'express';

const app:Express = express() 
const PORT = 3000;
app.get('/',(req:Request,res:Response) => { 
    res.send('Dashboard Backend')
}) 
app.listen(PORT,() => { 
    console.log(`Server is started & running on this ${PORT}`);
    
}) 