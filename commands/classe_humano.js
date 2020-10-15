const Discord = require('discord.js');

const DEF = 0;
const ATK = 0;
const VIDA = 0;
const FOR = 0;
const DES = 0;
const SAB = 0;


module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);
};