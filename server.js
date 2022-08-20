const express = require('express');
const cors = require('cors');

const app =express()
app.use(express.json());

var corOptions ={
    origin:'https://localhost:8081'
}

// routers

const router = require('./routes/productRouter.js');
app.use('/api/products', router);
 
// middleware   

app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
 

//testing Apir

app.get('/', (req, res) => {
    res.json({message:'hello from api'});
});


const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{

    console.log('server is running on Port ' + PORT);
});