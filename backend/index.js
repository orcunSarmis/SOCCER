import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';


const app = express();
const PORT = 3000;

// mongo db conection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// body parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => 
res.send(`Soccer app is runnig  ${PORT}`)
);

app.listen(PORT, () => 
console.log(`Your soccer is runnig ${PORT}`)
);


