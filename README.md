`Bem vindos a API do....`

![Logo The Simpsons ](./src/img/2logo_simpsons.png)

> Essa API juntou duas grandes paixoēs que tenho, programação e Os Simpsons! Nela utilizo nodeJs + mongoDB para poder criar rotas, CRUD completo com tratamentos de erros nas rotas passando para o cliente (front) todos erros que o back pode enviar. 

Esse projeto faz parte do modulo3 da BlueEdtech!! 

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador (a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

Você precisa criar o arquivo .env com a url do seu banco, *Estou usando o Atlas para manter o banco em nuvem, lembre-se que no link tem que estar configurado a senha e o nome do banco corretamente*.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```

## Testando a API

Eu testei a API usando o Thunder Client (Plugin do VScode)


Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/simpsons
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/simpsons/
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/simpsonsfilter?nome=Bart

> Nesse site você consegue encontrar informações de personagens para testar os end-points: https://codesandbox.io/s/1zko6

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "nome": "Bart Simpsons",
    "caracteristica": "Anda de skate , cria confusão",
    "genero": "Masculino",
    "imagem": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"

}
```
Espero que se divirta com a familia mais famosa do mundo! e aguarde que em breve irei integrar com um pagina front!

Até mais!!!