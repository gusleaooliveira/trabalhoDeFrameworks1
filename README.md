# Trabalho de frameworks 01

## Descrição

Será criado uma loja de aplicativos voltado para linux, onde:

* Será cadastrado usuários administradores
* Os administradores poderão cadastrar os programas linux

> As **funcionalidades de negócio** estarão lincadas com a usabilidade do usuário do sistema e com o cadastro dos programas.  Essas funcionalidades poderão ser com a doação que os usuários poderão fazer para a loja de aplicativos. Dachboard de logs. Os usuários padrão, que usarão loja, também terão de se cadastrar.

## Técnologias

### Bibliotecas
- bcrypt
- body-parser
- cookie-parser
- cors
- dotenv-safe
- express
- jsonwebtoken
- mongoose
- nodemon
- express-react-views 
- react 
- react-dom 


## Tarefas
- [x] Inicializar o repositório
- [x] Instalar as bibliotecas básicas
- [x] Estrutura do Servidor
    - [x] Montar servidor básico
        - [x] Configurações do mongoose
        - [x] Configurações do react-view
    - [x] Montar as views
        - [x] View de login
            - [x] View de login
            - [x] View de logout
        - [x] View de tipo
            - [x] View de cadastro    tipo de usuário
            - [x] View de listagem    tipo de usuário
            - [x] View de listagem de tipo de usuário
            - [x] View de alteração   tipo de usuário
            - [x] View de apagar      tipo de usuário
        - [x] View de usuário
            - [x] View de cadastro  usuário
            - [x] View de listagem  usuário
            - [x] View de alteração usuário
            - [x] View de apagar    usuário
        - [x] View de categoria
            - [x] View de cadastro   categoria  
            - [x] View de listagem   categoria
            - [x] View de alteração  categoria
            - [x] View de apagar     categoria
        - [x] View de pacote
            - [x] View de cadastro   pacote  
            - [x] View de listagem   pacote
            - [x] View de alteração  pacote
            - [x] View de apagar     pacote
        - [x] View loja de aplicativos
    - [ ] Montar as rotas
        - [ ] Rota de view
        - [x] Rota de login
        - [x] Rota de tipo de usuário
        - [x] Rota de usuário
        - [x] Rota de categoria
        - [x] Rota de pacotes
    - [ ] Montar os controllers
        - [ ] Controller de view
        - [x] Controller de login **TODO:** alterar futuramente caso necessário
        - [x] Controller de tipo de usuário
        - [x] Controller de usuário
        - [x] Controller de categoria
        - [x] Controller de pacotes        
    - [x] Montar os models
        - [x] Model de tipo de usuário
        - [x] Model de usuário
        - [x] Model de categoria
        - [x] Model de pacotes  
- [x] Segurança
    - [x] Criptografar senha **TODO:** Testar senha
    - [x] Usar jwt 
    - [x] Usar cookies
- [x] Deploy
    - [x] Fazer o deploy para o **atlas** 
    - [x] Fazer o deploy para o **heroku**