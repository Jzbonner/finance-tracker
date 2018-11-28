import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';

const app = express();
const router = express.Router(); 

const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri')); 
var db = mongoose.connection; 
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev')); 

router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
}); 

router.get('/stocks', (req, res) => {
    res.json({ message: 'Test Stock Data'})
}); 

app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`)); 

/* 
    You can write the data that you receive in the api request to your MongoDB schema 
    and then use th "models" folder to select the data that you want to display on 
    the App.js file or subsequent components. In your App.js file or subsequent 
    component files you can use a fetch request to pull that data out of your MongoDB
*/