import express from 'express';
import cors from 'cors';
//import { json } from 'body-parser';
import { networkInterfaces } from 'os';
import info from "./info.json" with {type : "json"};
import jwt from 'jsonwebtoken';
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

async function handleLogin(req, res) {
  const { name, password } = req.body;
  console.log("Login received: ", name, password);
  const user = info.keys.find((data) => {
    if ( data.name == name && data.password == password) return true;
  });
  console.log(user);
  if (user) {
    console.log("Loged in");
    const token = jwt.sign({name: name}, info.jwt.key, { expiresIn: '48h' });
    return res.status(201).json({success: true, token: token});
  } else {
    console.log("Error")
    return res.status(404).json({success: false});
  }
}

async function acess(req, res) {
  const {token} = req.body; 
    
  if (!token) {
    console.log("Nope");
    return res.status(403).json({ message: "No token sent" });
  }

  try {
    jwt.verify(token, info.jwt.key);
    console.log("Allowed");
    return res.status(200).json({ content: info.anomalies})
  }
  catch {
    console.log("Error");
    return res.status(500).json({ message: "Error" });
  }
}


app.post('/login', handleLogin);
app.post('/acess', acess);

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
  //console.log(results['Ethernet'][0]);
}
//wlo1 for linux and Wi-Fi for windows
else if (Object.hasOwn(results, 'wlo1')) {
  nets['adress'] = results['wlo1'][0];
  //console.log(results['Wi-Fi'][0]);
}
// Iniciar o servidor
app.listen(port, () => console.log(`Running on ${nets['adress']}:${port}`));