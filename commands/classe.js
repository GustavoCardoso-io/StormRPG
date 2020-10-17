const Discord = require('discord.js');

module.exports.run = async (client, message, args) => { 
   
const low = require("lowdb");
const FileAsync = require('lowdb/adapters/FileSync');
const adapter = new FileAsync('classe.json');
const db = low(adapter);

  for (let i =0; i<3;  i++)
  {
    let b =  i.toString();
    
    const NOME = db.get(b ).find({id: b}).value().nome;
    const VIDA = db.get(b ).find({id: b}).value().vida;
    const MANA= db.get(b ).find({id: b}).value().mana;

    const CONFIGUIVIDA = " + " + VIDA + " :heart: por level!" + " +  :heartbeat: ";
    const CONFIGUIMANA = " + "+ MANA + ":cyclone: por level! " + "+ :writing_hand_tone3:";

    const charSet = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(NOME)
      .addField('\u200b', '===============================')
      .addField('VIDA', CONFIGUIVIDA, true)
      .addField('MANA', CONFIGUIMANA,true)
      .setTimestamp()
      .setFooter('DEV: GUSTAVO CARDOSO', ' ');
       message.author.send(charSet);
  }
};
