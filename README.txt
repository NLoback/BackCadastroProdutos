 show = exibe dado especifico 
 index = exibe todos os dados 
 create = cria um novo dado 
 update = atualiza um dado 
 delete = deleta um dado 

request = requisicao pro backend 
services => componentes que fazem alguma coisa 
controllers => componentes que recebem requisições e retornam respostas 




#para iniciar servidor usar comando npm start
#toda vez que for gerar migration executar 
npm run migration:generate src/migrations/*.ts
#para rodar banco de dados usar comando sudo docker compose up -d toda vez que reiniciar a maquina 
#rodar este comando npm run migration:up sempre que fizer alteração no banco de dados do projeto 