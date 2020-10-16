let express = require('express');
let app = express();
let Discord = require("discord.js"); //Conexão com a livraria Discord.js
let client = new Discord.Client(); //Criação de um novo Client
let config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandoslet 

app.get("/", (request, response) => {
  let ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    let args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    let command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);

    } catch (err) {
    console.error('Erro:' + err);
  }
});

app.listen(process.env.PORT); // Recebe solicitações que o deixa online

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
