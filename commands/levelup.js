const Discord = require('discord.js');

const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('banco.json');
const db = low(adapter);

module.exports.run = async (client, message, args) => {


db.get(message.author.id)
    .find({id: message.author.id}).assign({level: 2}).write()
    message.channel.send('Perfil evoluido!')
  
  message.delete().catch(O_o => {});
};