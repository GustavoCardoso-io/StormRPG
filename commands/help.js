const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = "Para você utilizar o bot é bem simples.\n" + 
  " Primeiro de tudo temos que iniciar o nosso jogo com `str start`\n"+
  " Logo em seguida temos que selecionar nossa classe usand `str [nome da classe]` voce econtro os nome e os atributos da classe em `str classe` \n"+
  " `str char`  Mostra os status atual do seu personagem!"

  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};
