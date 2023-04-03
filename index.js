const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('초천재 신종욱')
})

app.get('/:name', function(req, res) {
    const  {name}  = req.params
    console.log(name)

    if(name =="dog"){
        res.json({"sound":"멍멍"
        })
    } else if(name =="cat"){
        res.json({"sound":"야옹"
        })
    }
    else if(name =="consil"){
        res.json({"sound":"초천재 신종욱"
        })
    }
    else{
        res.json({"sound":"없떠용"
        })
    }
   
})

// app.get('/:id', function (req, res) {
//     const q = req.params
//     console.log(q.id)
//     res.send({"user id":q.id})
// })

// app.get('/:id', function (req, res) {
//     const q = req.query
//     console.log(q.q)
//     console.log(q.name)
//     res.send({"user id":q})
// })

app.listen(3000)