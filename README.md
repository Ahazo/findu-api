NODE VERSION --- 16.14.2

nvm install 16.14.2
yarn && yarn server

# ahazo-api
Ahazo backend service

### Para inicar o servidor
yarn server

### Para criar as tabelas no banco
yarn typeorm migration:run

### Para apagar as tabelas no banco local
ir para a pasta da ahazo /config

apagar a pasta db/
(talvez seja necessario realziar a acao como sudo)
(sudo su -)
*rm -rf db/

parar o banco local
*sudo docker-compose -f ahazo-startup.yml stop

iniciar novamente o banco local
*sudo docker-compose -f ahazo-startup.yml up -d

realizar a migracao
*yarn typeorm migration:run

