const express = require('express');

const app=express();

app.get('/', (req, res) => {
    
    const user = {
        name : "Sally",
        hobby : "coding"
    }

    res.send(user)
});

app.listen(3000);