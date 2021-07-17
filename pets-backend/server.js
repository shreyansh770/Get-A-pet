let express = require("express");
let data = require("./data.json")

let app = express();


app.get("/animals", (req, res) => {


    let arr = []
    let allAnimals = data.map((ele) => {
        let obj = {
            kind: ele.animal,
            breed: ele.breed
        }
        arr.push(obj)
        
        return obj
    })



    res.json(arr)
})




app.listen(4000);