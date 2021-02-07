 const express =require("express")
 const routes=require("./routes")
const cors =require("cors")



 const app =express();


 app.use(cors())
 app.use("/",routes())

 const port =process.env.PORT || 5000
 app.listen(port, '0.0.0.0',()=>
 {
     console.log(process.env.HOST);
     console.log(process.env.PORT);
 
 })
