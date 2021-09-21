require('dotenv').config();
const express=require('express');

const app=express();
const router=require('./routes');

const PORT=process.env.PORT || 8000;
app.use(express.json());



app.use(router);
app.get('/',(req,res)=>{
    res.send("hello from exores");
})



app.listen(PORT,()=>console.log(`listening on port ${PORT}`));

