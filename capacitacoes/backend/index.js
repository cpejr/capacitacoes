//importando o express
const express = require('express');

//criar a nossa aplicação
const app = express();

app.use(express.json());

let objPlayers=[
  {
    id:1,
    name:"Neymar",
    age: 28
  },
  {
    id:2,
    name:"Ronaldinho",
    age:40
  },
  {
    id:3,
    name: "Neymar",
    age:19
  }
]


app.get('/allplayers',(request,response)=>{
    return response.json(objPlayers);
});

//retorna os jogadores com o filtro de idade
app.get('/players',(request,response)=>{
  let {age} = request.query;
  let players = new Array;
  for(let i = 0 ; i < objPlayers.length; i++){
    if(objPlayers[i].age <= age){
      players.push(objPlayers[i]);
    }
  }
  return response.send(players);  
});


//cadastra os jogadores
app.post('/players',(request,response)=>{
  let {name,age} = request.body;
  console.log(request.body);
  
  objPlayers.push(request.body);
  return response.send(`Ola ${name}, o seu cadastro foi realizado com sucesso`);
});

app.delete('/players/:id', (request,response)=>{
  let {id} = request.params;
 
  
  for(let i = 0 ; i < objPlayers.length; i++){
    if(objPlayers[i].id == id){
      objPlayers.splice(i,1);
    }
  }
  return response.send(`Operação finalizada`);
});


app.get('/',(request,response)=>{
  //
  return response.send('Lista de usuários');
});

app.post('/',(request,response)=>{
  //
  return response.send('Usuário criado');
});

app.listen(3333);
