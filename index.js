const express = require('express');
const categories = require('./categories.json')
const bookings = require('./bookings.json')
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
 res.send('Server is running')
})

//All Category
app.get('/categories', (req,res)=>{
    res.send(categories)
})


//Single category
app.get('/category/details/:id',(req,res)=>{
    const category_id = req.params.id;
    const data = categories.find(result=> result.id == category_id) || [];
    res.send(data);
})


// All bookings
app.get('/bookings',(req,res)=>{
    res.send(bookings)
})


// search bookings
app.get('/search/:key',(req,res)=>{
    const term = req.params.key.toLocaleLowerCase();
    const result = bookings.filter(res => res.category_name.toLocaleLowerCase() == term) || [];
    res.send(result);
})



app.listen(port, ()=>{
    console.log('Server is running at port ', port)
})