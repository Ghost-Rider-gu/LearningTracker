import express from 'express';
import bodyParser from 'body-parser';
import categoryRoutes from './routes/CategoryRoutes';

const app = express();

app.use(bodyParser.json());
app.use(categoryRoutes);

app.listen(3000);
