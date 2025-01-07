const express = require('express')
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 5000;
require('dotenv').config()


async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    })
}


main().then(() => console.log("Mongodb connect successfully !")).catch(err => console.log(err));

// app.get('/',(req,res)=>{
//     res.send('Hello world');
// })

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
})