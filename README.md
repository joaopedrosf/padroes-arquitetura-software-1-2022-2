# Nvidia Omniverse 🚀

Na pasta do Omniverse temos todos os assets utilizados para a construção do consultório em 3D na ferramenta **"Nvidia Omniverse Create"**. 

## Como executar
Para executar o modelo 3D na ferramenta é necessário baixar todos os arquivos e abrir o arquivo principal *"uploads_files_3910300_Consulting+Room+-+01+-+3D+Model.usd"*, que se encontra <a href="https://github.com/joaopedrosf/padroes-arquitetura-software-1-2022-2/tree/main/Nvidia%20Omniverse/uploads_files_3910300_Consulting%2BRoom%2B-%2B01%2B-%2B3D%2BModel">aqui</a>

## Imagens do modelo 🖼️

![Foto1](./Nvidia%20Omniverse/Foto1.jpeg)
![Foto2](./Nvidia%20Omniverse/Foto2.jpeg)
![Foto3](./Nvidia%20Omniverse/Foto3.jpeg)
![Foto4](./Nvidia%20Omniverse/Foto4.jpeg)
![Foto5](./Nvidia%20Omniverse/Foto5.jpeg)

## Para rodar a Api

É necessário possuir o docker e o composer https://getcomposer.org/ e rodar os comandos: cp .env.example .env (para criar o arquivo .env), composer update (para atualizar as dependências) e composer install (para instalar as dependências base). Após isso basta rodar ./vendor/bin/sail up  para subir o container pré configurado do laravel. Caso haja algum erro ao rodar esse comando, basta rodar (caso esteja em um ambiente linux) o comando sudo systemctl stop apache2. E tentar rodar o comando novamente.As informações de conexão estão no .env o host é localhost o user é sail o banco é laravel e a senha é password.

## Para rodar o front end

É necessário possuir o node instalado, e algum gerenciador de dependências como npm que já vem com o node, yarn ou npx https://yarnpkg.com/, https://www.npmjs.com/package/npx,https://nodejs.org/en/download/. Após ter o node e o yarn basta rodar o comando "yarn" para instalar as dependencias e após isso o comando "yarn start" para subir o projeto.


