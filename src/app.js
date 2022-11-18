import express from 'express';
import exphbs from 'express-handlebars';
import indexRoutes from './routes/index.routes';
import path from 'path';
import { create } from 'express-handlebars';

const app = express();

app.set("views", path.join(__dirname, "/views"));

const hbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: "main",
    extname: ".hbs",
});
app.engine(".hbs", hbs.engine);

app.set('view engine', '.hbs');

// Routes
app.use(indexRoutes);

export default app;