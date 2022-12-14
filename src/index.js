import 'dotenv/config'

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.post('/jogadores', (req, resp) => {
     
    try{
       
        let {jogador: jogador, clube: time, numero: numero} = req.body;

       //let j = req.body.j;
       //let t = req.body.t;
       //let n = req.body.n;


       const x = jogador;
       const y = time;
       const z = numero; 

       resp.send({
            Jogador: x,
            Clube: y,
                   Numero: z
           
        })

    }
    
    catch(err) {
        resp.status(404).send({
           erro: err.message
        })
    }

})


server.listen(process.env.PORT,
             () => console.log(`API online na porta ${process.env.PORT}`))