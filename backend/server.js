import express from 'express';
import cors from 'cors';
//import { json } from 'body-parser';
import { networkInterfaces } from 'os';
import info from "./info.json" with {type : "json"};
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

async function handleLogin() {

}

app.get('/login', handleLogin);

let nets = networkInterfaces();
console.log(nets);
const results = {};

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
      const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
      if (net.family === familyV4Value && !net.internal) {
          if (!results[name]) {
              results[name] = [];
          }
          results[name].push(net.address);
      }
  }
}
nets = {
  'connection-type' : '',
  adress: '',
};
if (Object.hasOwn(results, 'Ethernet')) {
  nets['adress'] = results['Ethernet'][0];
  nets['connection-type'] = 'Ethernet';
  //console.log(results['Ethernet'][0]);
}
else if (Object.hasOwn(results, 'wlo1')) {
  nets['adress'] = results['wlo1'][0];
  nets['connection-type'] = 'wlo1';
  //console.log(results['Wi-Fi'][0]);
}
// Iniciar o servidor
app.listen(port, () => console.log(`Servidor rodando no endereço ${nets['adress']}:${port}, usando ${nets['connection-type']}`));