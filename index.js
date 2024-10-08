import 'dotenv/config';
import express from 'express';
import initApp from './src/app.router.js';


const app = express();
const PORT = process.env.PORT || 5000;

initApp(app,express);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
