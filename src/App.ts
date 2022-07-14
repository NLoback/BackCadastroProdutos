import Express from "express";
import Routes from "./routes";
import "reflect-metadata";
import cors from "cors";

const App = Express();
/* Ordem de uso deve seguir a ordem a baixo 
chamando o express.json primeiro */

App.use(cors({ origin: '*' }));
App.use(Express.json());
App.use(Routes);

App.listen(3333, () => console.log('Server started 🔥 at http://localhost:3333'));


