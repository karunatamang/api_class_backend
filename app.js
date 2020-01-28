const express= require('express');
const cors= require('cors');
const bodyParser= require('body-parser');
require('./db/mongoose');
const userRouter= require('./routers/routing');
const clothesRouter= require('./routers/clothes_router');
const app= express();
app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(userRouter);
app.use(clothesRouter);


app.listen(3030);