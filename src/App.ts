import Express from "express";
import Routes from "./routes";
import "reflect-metadata";

const App = Express();
/* Ordem de uso deve seguir a ordem a baixo 
chamando o express.json primeiro */

App.use(Express.json());
App.use(Routes);

App.listen(3000, () => console.log('Server started 🔥 at http://localhost:3000'));


/*para iniciar servidor usar comando npm run dev*/
/*toda vez que for gerar migration executar 
npm run migration:generate src/<caminho onde deve ser criado>/<nome do arquivo> */
/* para rodar banco de dados usar comando sudo docker compose up -d toda vez que reiniciar a maquina */
/*rodar este comando npm run migration:up sempre que fizer alteração no banco de dados do projeto */
