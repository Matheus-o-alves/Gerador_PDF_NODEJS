var pdf = require("html-pdf");

var ejs = require("ejs");

ejs.renderFile('./pdf.ejs', (err, html)=>{
    if(err){
        console.log("Erro  :(")
    }else{
       
       
        pdf.create(html, {}).toFile("./pdfapp.pdf",(err, res)=>{
            if(err){
                console.log("Erro  :(")
            }else{
                console.log(res);
            }
        })
    }

})




