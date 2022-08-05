import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
res.send(`Soccer app is runnig  ${PORT}`)
);

app.listen(PORT, () => 
console.log(`Your soccer is runnig ${PORT}`)
);


