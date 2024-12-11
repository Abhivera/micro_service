import express from "express";
import cors from "cors";

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors())

const PORT = process.env.PORT||5001

app.get('/',(req,res)=>{
    return res.json({message:"it is working ..."})
})

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))