1. Criar a Rede 

    docker network create michelgsoares-pfa1

2. Iniciar a imagem de banco de dados

    docker run -d --network michelgsoares-pfa1 --name pfa1-db  michelgsoares/mysql:pfa_desafio1 

    * Se a imagem não estiver mais disponivel no docker hub usar os passos abaixo para "buildar"
        a. build: 
            docker build -t michelgsoares/mysql:pfa_desafio1 .\mysql\. -f .\mysql\Dockerfile.prod 
        b. Executar o comando anterior para iniciar

2. Iniciar a imagem da aplicação

    PS. Aguardar o banco entrar. A melhorar fazer o app ficar tentando até o banco da dados entrar.

    docker run -d --network michelgsoares-pfa1 --name pfa1-app  michelgsoares/nodejs:pfa_desafio1

    * Se a imagem não estiver mais disponivel no docker hub usar os passos abaixo para "buildar"
        a. build: 
            docker build -t michelgsoares/nodejs:pfa_desafio1 .\nodejs\. -f .\nodejs\Dockerfile.prod 
        b. Executar o comando anterior para iniciar

3. Iniciar a imagem do nginx

    docker run -d --network michelgsoares-pfa1 --name pfa1-nginx -p 8080:80 michelgsoares/nginx:pfa_desafio1

    * Se a imagem não estiver mais disponivel no docker hub usar os passos abaixo para "buildar"
        a. build: 
            docker build -t michelgsoares/nginx:pfa_desafio1 .\nginx\. -f .\nginx\Dockerfile.prod
        b. Executar o comando anterior para iniciar
    
4. Acessar o site:

    http://localhost:8080
    
        

