const Discord = require('discord.js');

const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('banco.json');
const db = low(adapter);

module.exports.run = async (client, message, args) =>{
    
    message.channel.send("Parabéns você acaba de fazer update nos seus dados do jogo.");
    message.delete().catch(O_o => {});
};