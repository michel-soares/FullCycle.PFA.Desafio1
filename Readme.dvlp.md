1. Criar a Rede
    docker network create michelgsoares-pfa1-dvlp
2. Build Image da nginx
    docker build -t michelgsoares/nginx:pfa_desafio1.dvlp .\nginx\. -f .\nginx\Dockerfile.dvlp
3. Build Image da Banco de dados
    docker build -t michelgsoares/mysql:pfa_desafio1.dvlp .\mysql\. -f .\mysql\Dockerfile.dvlp
4. Build Image da Aplicação
    docker build -t michelgsoares/nodejs:pfa_desafio1.dvlp .\nodejs\. -f .\nodejs\Dockerfile.dvlp
5. iniciar a Banco de dados    
    Apenas o drive C:\users poder ser mapeado no docer
    docker run -d --rm --network michelgsoares-pfa1-dvlp --name pfa1-db-dvlp -v E:\FullCycle\pfa\desafio1\mysql\data:/var/lib/mysql  michelgsoares/mysql:pfa_desafio1.dvlp

    Entrar no docker banco:
    docker exec -it pfa1-db-dvlp bash

6. iniciar a aplicação    
    docker run -d --rm --network michelgsoares-pfa1-dvlp --name pfa1-app-dvlp -p 8082:3000 -v E:\FullCycle\pfa\desafio1\nodejs:/usr/src/app  michelgsoares/nodejs:pfa_desafio1.dvlp

7. iniciar nginx
    docker run -d --rm --network michelgsoares-pfa1-dvlp --name pfa1-nginx-dvlp -p 8083:80  michelgsoares/nginx:pfa_desafio1.dvlp
    

    Entrar no docker app:
    docker exec -it pfa1-app-dvlp bash
