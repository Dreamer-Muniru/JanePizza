const express = require("express");

const app = express();

const Pizza = require('./models/pizzaModel') ;
const db = require('./config/db')
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");

app.use('/api/pizzas/', pizzasRoute)

app.get("/", (req, res) =>{
    res.send('Server running succesful');
});


const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log(`Server started on port 8000`)
})

