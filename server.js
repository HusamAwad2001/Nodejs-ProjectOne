const express = require('express');

// inhereted all functionality on express
const app = express();

app.listen(3000, ()=>{
    console.log('Server is running!');
});