const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

const PORT = 4040

app.use(cors())

app.listen(PORT, () => {
    console.log(`El servidor se está escuchando en http://localhost:${PORT}`)
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'crud_ecommerce_tn_miercoles'
})

db.connect((err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Conexion exitosa con mysql')
    }
})

app.get('/api/products', (req, res)=>{
    const query ='SELECT * FROM products'
    db.query(query, (err, result) => {
        if(err){
            res.status(500).json({content: 'DB error', ok:false})
        } else{
            res.status(200).json({products:result, ok:true})
        }
    })
})