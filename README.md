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
- [ ] Estrutura do Servidor
    - [x] Montar servidor básico
        - [x] Configurações do mongoose
        - [x] Configurações do react-view
    - [ ] Montar as views
        - [ ] View de login
            - [ ] View de login
            - [ ] View de logout
        - [x] View de tipo
            - [x] View de cadastro    tipo de usuário
            - [x] View de listagem    tipo de usuário
            - [x] View de listagem de tipo de usuário
            - [x] View de alteração   tipo de usuário
            - [x] View de apagar      tipo de usuário
        - [ ] View de usuário
            - [ ] View de cadastro  usuário
            - [ ] View de listagem  usuário
            - [ ] View de alteração usuário
            - [ ] View de apagar    usuário
        - [ ] View de categoria
            - [ ] View de cadastro   categoria  
            - [ ] View de listagem   categoria
            - [ ] View de alteração  categoria
            - [ ] View de apagar     categoria
        - [ ] View de pacote
            - [ ] View de cadastro   pacote  
            - [ ] View de listagem   pacote
            - [ ] View de alteração  pacote
            - [ ] View de apagar     pacote
        - [ ] View loja de aplicativos
    - [ ] Montar as rotas
        - [ ] Rota de view
        - [ ] Rota de login
        - [x] Rota de tipo de usuário
        - [ ] Rota de usuário
        - [ ] Rota de categoria
        - [ ] Rota de pacotes
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
- [ ] Segurança
    - [x] Criptografar senha
    - [x] Usar jwt **TODO:** alterar futuramente caso necessário
    - [ ] Usar cookies
- [ ] Deploy
    - [ ] Fazer o deploy para o atlas
    - [ ] Fazer o deploy para o heroku