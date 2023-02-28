const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require("cors");
app.use(cors());
app.use(express.json())
const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"employeesystem",
})
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})
app.post("/create",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    const country = req.body.country;
    const position = req.body.position;
    const wage = req.body.wage;
    db.query(
        "insert into employees (name, age, country, position,wage) values (?,?,?,?,?)",
        [name, age, country, position, wage],
        (err,result)=>{
            if (err){
                console.log(err)
            } else {
                res.send("values inserted")
            }
        } 
    )
})


app.get("/get",(req,res)=>{
    db.query('SELECT * FROM employees', (error, results, fields)=> {
        if (error) throw error;
        res.send(results);
      });
})



port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server is running at port number ${port}`))