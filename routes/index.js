 const express=require("express")
 const router=express.Router();
 const nodemailer=require("nodemailer") 
 const fetch=require("node-fetch")
const request=require("request")

 module.exports=function(){


// Mandar Correo 

    router.post('/mandarcorreo',(req,res)=>{
        
        const state={correo:"fmicheam@gmail.com",asunto:"Primera Prueba",mensaje:"este es un mensaje"}



         // primera parte 
        let transporter=nodemailer.createTransport({

            service:"gmail",
            auth:{
                user:  'contacto@ecomusichotel.com', // TODO: your gmail account
                pass:  'bpyelhpxoohhigfs' // TODO: your gmail password
            }

        })

        //segunda parte 

        let mailOptions={

            from:`${state.correo}`,
            to:"contacto@ecomusichotel.com",
            subject:`Contacto Clinica Almendral:${state.asunto}`,
            text:`${state.asunto}`

        }




            //paso 3 
            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
            
                    console.log(err);
                    
                    //return err('Error occurs ');
                }else{
                    console.log("correo enviado")
                    res.send("correo enviado")
                }
            
                })








    })



router.get("/comentarios",(req,res)=>{


    const key="AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc" 
       // let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=${key}`

    let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc`

    // Replace ./data.json with your JSON feed
fetch(url)
.then((resultado) => {
    console.log(resultado)
})
.then((data) => {
  // Work with JSON data here
  console.log(data)
})
.catch((err) => {
  // Do something for an error here
})




})


router.get("/comentariosdos",(req,res)=>{


   const key="AIzaSyCE-9odbKyIEJykp0KazN_qtZbFyaNPQtc" 
   let url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=reviews&key=${key}`

    request({
        method: 'GET',
        uri: url,
        json:true
      
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          res.json(body);
        }
      })
})




router.get("/comentariostres",(req,res)=>{
    console.log("paso por aca")
    const comentarios =[
        {nombre:"Cristian Brittoo",
         stars:5,
         comentario:"Excelente clínica,  el trato es personalizado y a buenos precios. ",
         imagen:"https://lh3.googleusercontent.com/a-/AOh14GjRD5oMJNaBlgcJ2kLSlvxenfZ32954tufq97Bz=w36-h36-p-c0x00000000-rp-br100"

    }
    ,
        {nombre:"Marisol Guzman ",
        comentario:"Excelente Atención, se nota la dedicación y compromiso con los pacientes, 100% recomendable"
        ,stars:5,
        imagen:"https://lh6.googleusercontent.com/-AinlNshLlkI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucm07qUmgkxZ565Q59ymaqHMrZAy7g/w36-h36-p-c0x00000000-rp-br100/photo.jpg"

    
    },
        {nombre:"Patricio Rojas Carter  ",
        comentario:"Muy buena atencion"
        ,stars:5,
        imagen:"https://lh3.googleusercontent.com/a-/AOh14Gg87TCsdfNH0VaZ9UkcnD8BTfSscwJb6vcQiIuoEQ=w36-h36-p-c0x00000000-rp-br100"

    
    },
    
        {nombre:"Claudio Torres  ",
        comentario:"Muy buena atencion y excelente"
        ,stars:5,
        imagen:"https://lh6.googleusercontent.com/-IlEuNNsskZE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckMO70n-WKYzZc4N9_H5GrZp0OPdQ/w36-h36-p-c0x00000000-rp-br100/photo.jpg"

    
    },
    {nombre:"Chiqui Linda",
    comentario:"Excelente atención, además de ser profesionales son empaticos con sus pacientes y arancel al alcance de mi bolsillo."
    ,stars:5,
    imagen:"https://lh6.googleusercontent.com/-Qb0h_ZWDXUk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclmMPjWU1hH1Zeo_8nXz7F4upiR_g/w36-h36-p-c0x00000000-rp-br100/photo.jpg"


},
    ]


    console.log(comentarios)
    res.json(comentarios)
    

})



    return router

 }