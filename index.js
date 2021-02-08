 const express =require("express")
 const routes=require("./routes")
const cors =require("cors")
const bodyParser=require("body-parser")




 const app =express();

 app.use(bodyParser.json());
 app.use(cors())
 app.use("/",routes())

 const port =process.env.PORT || 5000
 app.listen(port, '0.0.0.0',()=>
 {
     console.log(process.env.HOST);
     console.log(process.env.PORT);
 
 })
