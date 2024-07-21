import express from 'express';
import path from 'path';
import dir from './dir.js';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(dir.__root, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

const opts = {
    key: fs.readFileSync(path.join(process.env.CERT_LOCATION!, "privkey.pem")),
    cert: fs.readFileSync(path.join(process.env.CERT_LOCATION!, "fullchain.pem"))
};

https.createServer(opts, app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});