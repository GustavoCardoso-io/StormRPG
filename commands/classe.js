const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync');
  const adapter = new FileAsync('classe.json');
  const cDB = low(adapter);

  const charSet = new Discord.MessageEmbed();

  for (i = 0; i < 3; i++) {
    let b = i.toString();

    let classes = cDB.get(b).push({}).value({});

    const CONFIGUIVIDA = " + " + classes[0].vida + " :heart: por level!" + " +  :heartbeat: ";
    const CONFIGUIMANA = " + " + classes[0].mana + ":cyclone: por level! " + "+ :writing_hand_tone3:";
    
    charSet
      .setColor('#7B241C')
      .setTitle('CLASSES')
      .addField('\u200b', '===============================')
      .addField('***CLASSE: ***', '**' + classes[0].nome + '**')
      .addField('VIDA', CONFIGUIVIDA, true)
      .addField('MANA', CONFIGUIMANA, true)
      .setTimestamp()
      .setFooter('DEV: GUSTAVO CARDOSO', ' ');
  }
  message.author.send(charSet);
};
