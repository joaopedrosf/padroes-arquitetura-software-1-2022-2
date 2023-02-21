# Para rodar o projeto 

É necessário possuir o docker e o composer https://getcomposer.org/ e rodar os comandos: cp .env.example .env (para criar o arquivo .env), composer update (para atualizar as dependências) e composer install (para instalar as dependências base). Após isso basta rodar ./vendor/bin/sail up  para subir o container pré configurado do laravel. Caso haja algum erro ao rodar esse comando, basta rodar (caso esteja em um ambiente linux) o comando sudo systemctl stop apache2. E tentar rodar o comando novamente.As informações de conexão estão no .env o host é localhost o user é sail o banco é laravel e a senha é password.


