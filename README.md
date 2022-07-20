# <p align = "center"> DrivenPass </p>

<p align="center">
   <img width="150" src="https://user-images.githubusercontent.com/98189571/179160172-7039b844-99f4-473e-b21b-1405b2dfb9af.svg"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Victor Hugo Fonseca-4dae71?style=flat-square" />
</p>


##  :clipboard: Descrição

Navegar na internet pode ser uma atividade muito divertida, mas ao mesmo tempo, muito perigosa. Inúmeros estudos e levantamentos (nacionais e internacionais) mostram que o número de golpes virtuais não para de crescer. Uma forma de nos protegermos é através de senhas diferentes e seguras. Com intuíto de atender essa necessidade, neste projeto foi desemvolvido um gerenciador de senhas.

***

## :computer:	 Tecnologias e Ferramentas usadas

- Node.js
- Express.js
- Node.js
- TypeScript
- PostgreSql
- Prisma
- JWTs & refresh tokens

***

## :rocket: Rotas

```yml
POST /signup
    - Rota para cadastrar um novo usuário
    - headers: {}
    - body:{
    "email": "victor@gmail.com",
    "password": "1234567891"
}
```
    
```yml 
POST /signin
    - Rota para fazer login
    - headers: {}
    - body: {
    "email": "victor@gmail.com",
    "senha": "1234567891"
    }
```
    
```yml 
POST /create/credential (autenticada)
    - Rota para criar uma nova credencial 
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "tittle": "Mercado Livre",
    "url": "https://www.mercadolivre.com.br/",
    "userName": "victorhfonseca",
    "password": "1234"
    }
```

```yml
GET /credential/:infoId (autenticada)
    - Rota para retornar uma credencial específica do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /credentials (autenticada)
    - Rota para retornar todas as credenciais do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /credential/delete/:infoId (autenticada)
    - Rota para deletar uma credencial específica do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
POST /create/note (autenticada)
    - Rota para criar uma nova anotação 
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "tittle": "Internet de casa",
    "note": "123456"
}
```

```yml
GET /note/:infoId (autenticada)
    - Rota para retornar uma anotação específica do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /notes (autenticada)
    - Rota para retornar todas as anotações do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /note/delete/:infoId (autenticada)
    - Rota para deletar uma anotação específica do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
POST /create/card (autenticada)
    - Rota para registrar um novo cartão 
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "tittle": "NUBANK",
    "cardNumber": "1234123412341234",
    "name": "VICTOR H F SILVA",
    "securityCode": "187",
    "expirationDate": "01/24",
    "password": "1234",
    "isVirtual": true,
    "type": "credit_debit"
}
```

```yml
GET /card/:infoId (autenticada)
    - Rota para retornar informações de um cartão específica do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /cards (autenticada)
    - Rota para retornar todas as informações dos cartões do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /card/delete/:infoId (autenticada)
    - Rota para deletar um cartão específica do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```

```yml 
POST /create/wifiInfo (autenticada)
    - Rota para registrar dados de acesso a uma rede de internet do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {
    "tittle": "Internet da vó",
    "wifiNetwork": "vó375",
    "password": "123456"
}
```

```yml
GET /wifiInfo/:infoId (autenticada)
    - Rota para retornar dados de acesso a uma rede específica de internet do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
``` 

```yml
GET /wifiInfos (autenticada)
    - Rota para retornar dados de acesso a todas as redes de internet do usuário.
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
 
```yml
DELETE /wifiInfo/delete/:infoId (autenticada)
    - Rota para deletar um dado específico de acesso a internet do usuário
    - headers: { "Authorization": "Bearer $token" }
    - body: {}
```
***

## 🏁 Rodando a aplicação

Certifique-se que voce tem a ultima versão estável do Node.js e npm rodando localmente.

Primeiro, faça o clone desse repositório na sua maquina:

```
git clone https://github.com/vvictorfonseca/projeto-backend.git
```

Depois, dentro da pasta, rode o seguinte comando para instalar as dependencias.

```
npm install
```

Finalizado o processo, é só inicializar o servidor
```
npm start
```
