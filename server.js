const express = require("express");

const app = express();

const Pizza = require('./models/pizzaModel') 
const db = require('./config/db')


app.use(express.json());

app.get("/", (req, res) =>{
    res.send('Server running succesful')
});

app.get("/getpizzas", (req, res) =>{
    Pizza.find({}, (err , docs) =>{

        if(err){
            console.log(err)
        }
        else{
            res.send(docs)
        }
    })
})

const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log(`Server started on port 8000`)
})

