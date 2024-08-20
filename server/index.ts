import express , {Express,Request,Response} from 'express';
import 'dotenv/config';
const app:Express = express() 
const PORT = process.env.PORT || 3000;
app.get('/',(req:Request,res:Response) => { 
    res.send('Dashboard Backend')
}) 
app.get('/home',(req:Request,res:Response) => { 
    res.send('Homeboard')
})
app.listen(PORT,() => { 
    console.log(`Server is started & running on this ${PORT}`);
    
}) 