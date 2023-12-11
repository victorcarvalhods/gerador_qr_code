import express from 'express'
import path from 'path';
import {dirname} from 'path'
import { fileURLToPath } from 'url';
import qr from 'qr-image'
import fs from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3000;


function  gerarQrCode(url){
    let qr_image = qr.image(url, {type:'svg'});
    let nome_arquivo = `qr_code.svg`;
    qr_image.pipe(fs.createWriteStream(nome_arquivo));

    return nome_arquivo;
}

app.use(express.urlencoded({extended:true}))

app.use('/submit', (req, res, next)=>{
    let option = {
        root: path.join(__dirname)
    };
    let url = req.body['url'];
    let nome_arquivo = gerarQrCode(url);


    res.sendFile(nome_arquivo, option, (err)=>{
        if (err) next(err);
        else {
            console.log(`Enviou: ${nome_arquivo}`);
            next();
        }
    })
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/submit', (req,res)=>{
    console.log('foto enviada');
    res.send();
})

app.listen(port, (err)=>{
    if (err) throw err;
    console.log('runing');
})