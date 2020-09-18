const port = 9000 ;

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));




app.get('/', function(req, res){
    
    
    res.sendFile(__dirname + "/index.html");
    

});


app.post('/', function(req,res){
    
    //Number transforma type of strin in type of numare
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var rezultat = num1 + num2;

    res.send("Rezultatul adunari este: "+ rezultat);
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname+ "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    
    //parseFloat trasforma data type strin to float
    var weight = parseFloat(req.body.num1);
    var height = parseFloat(req.body.num2);
    var rezultat = weight /(height * height); 

    res.send("Your BMI is: " +rezultat)
});


app.listen(port,function(){
    console.log("Servar start at port "+port);
});

