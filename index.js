let express = require('express');
let app = express();
let Discord = require("discord.js"); //Conexão com a livraria Discord.js
let client = new Discord.Client(); //Criação de um novo Client
let config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandoslet 
app.get("/", (request, response) =>
{



  let ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

client.on('message', message => {

  if (message.author.bot) return;
  
  if (message.channel.type == 'dm') return;

  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;

  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith
  
  (`<@${client.user.id}>`)) return;

  let args = message.content
    .trim().slice(config.prefix.length)
    .split(/ +/g);

  let user = getUserFromMention(args[1]);

  console.log(args);

  let arg1 = args.slice(0).shift();

  let arg2 = args.slice(1).shift();

  if(typeof  arg2 === 'undefined')
  {
      arg2 = 'vazio'
  }
  
  arg1 = arg1.toLowerCase();
  arg2 = arg2.toLowerCase();

  console.log(arg2 + "   " + arg1);
  try {
    if (!user) {
      if (arg2 === 'vazio'|| arg1 === 'buy')
      {
        let command = arg1;
        let commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
        return;
      }
      else
      {
        let command2 = arg2
        let command = arg1;
        let commandFile = require(`./commands/${command}/${command2}.js`);
        commandFile.run(client, message, args);
      }
    }
    else
    {
      let command = arg1;
      let commandFile = require(`./commands/${command}.js`)
      commandFile.run(client, message, args);
    }
  }
  catch (err)
  {
    console.error('Erro:' + err);
  }

  function getUserFromMention(mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
      mention = mention.slice(2, -1);

      if (mention.startsWith('!')) {
        mention = mention.slice(1);
      }
      return client.users.cache.get(mention);
    }
  }
});

app.listen(process.env.PORT); // Recebe solicitações que o deixa online

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
