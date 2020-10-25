const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync');
  const adapter = new FileAsync('raca.json');
  const db = low(adapter);

   

  for (let i = 0; i < 3; i++) {
    let b = i.toString();

    let races = db.get(b).push({}).value({});

    const CONFIGUIVIDA = " + " + races[0].vida + " :heart:  + CON  :heartbeat: !";
    const CONFIGUIMANA = " + " + races[0].mana + ":cyclone:! INT + :writing_hand_tone3: ";
    const CONFIGUIATKDEF = "  :crossed_swords: " + races[0].atk + " | " + races[0].def + " :shield: ";

 const charSet = new Discord.MessageEmbed()
          .setColor('#0099ff')
          .addField('***RAÇA: ***','**'+ races[0].nome +'**')
          .addField('FOR :muscle_tone3: ', races[0].foc, true)
          .addField('DES :leg_tone3: ', races[0].des, true)
          .addField('SAB :book: ', races[0].sab, true)
          .addField('CON :heartbeat: ', races[0].cos, true)
          .addField('INT :writing_hand_tone3: ', races[0].int, true)
          .addField('CAR :speaking_head: ', races[0].car, true)
          .addField('\u200b', '===========================')
          .addField('VIDA', CONFIGUIVIDA, true)
          .addField('MANA', CONFIGUIMANA, true)
          .addField('STATUS', CONFIGUIATKDEF, false)
          .setTimestamp()
          .setFooter('DEV: GUSTAVO CARDOSO', ' ');
            message.author.send(charSet);  
  }

};
