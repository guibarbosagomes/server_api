const express = require('express')

const app = express()

const data = require('./data.json')

app.use(express.json());

app.get('/users', function(req,res){
    res.json(data);
});


app.get('/users/:id', function(req,res){
    
    const { id } = req.params

    const client = data.find(cli => cli.id == id)

    if(!client) res.status(204)

    res.json(client)

});


app.post('/users', function(req,res){
    const { name, username } = req.body;

    res.json( {name, username});
});


app.put('/users/:id', function(req,res){

    const { id } = req.params

    const client = data.find(cli => cli.id == id)

    res.json(client.name = 'Guilherme The Best');
});


app.delete('/users/:id', function(req,res){
    const { id } = req.params

    const clientsFiltered = data.find(client => client.id != id);

    res.json(clientsFiltered);
});


app.listen(8000,
    () =>{
        console.log('Server is running !')
    }
);