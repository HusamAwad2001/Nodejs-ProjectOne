const express = require('express');

// inhereted all functionality on express
const app = express();



app.get('/getall', ()=>{
    console.log('Get work');
});

app.post('/add', ()=>{
    console.log('Add work');
});

app.put('/update', ()=>{
    console.log('Update work');
});

app.delete('/delete', ()=>{
    console.log('Delete work');
});


app.listen(3000, ()=>{
    console.log('Server is running!');
});