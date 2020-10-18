const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')
  const adapter = new FileAsync('banco.json');
  const db = low(adapter);

  let player = db.get(message.author.id).push({}).value({});
  
  if (args) {
    let user = getUserFromMention(args[1]);

    if (user) {
      player = db.get(user.id).push({}).value({});
    }
  }

  let CONFIGUIVIDA = "  :heart: " + player[0].vidaAtual + " | " + player[0].maxVida;
  let CONFIGUIMANA = "  :cyclone: " + player[0].mana + " | " + player[0].maxMana;
  let CONFIGUIATKDEF = "  :crossed_swords:  " + player[0].atk + " | " + player[0].def + " :shield: ";
  let CONFIGUIXP = "  :sparkles:  " + player[0].xpatual + " | " + player[0].xpMaxLevel;

  let charSet = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(player[0].nick)
    .setURL('https://discord.gg/5cuQVX')
    .setImage(player[0].avatar)
    .addField('\u200b', '=========================================================')
    .addField('LEVEL', player[0].level, false)
    .addField('XP', CONFIGUIXP, true)
    .addField('T$ :moneybag:', player[0].coin, true)
    .addField('\u200b', '=========================================================')
    .addField('RAÇA', player[0].raca, true)
    .addField('CLASSE', player[0].classe, true)
    .addField('ORIGEM', player[0].origem, true)
    .addField('\u200b', '=========================================================')
    .addField('FOR :muscle_tone3: ', player[0].foc, true)
    .addField('DES :leg_tone3: ', player[0].des, true)
    .addField('SAB :book: ', player[0].sab, true)
    .addField('CON :heartbeat: ', player[0].cos, true)
    .addField('INT :writing_hand_tone3: ', player[0].int, true)
    .addField('CAR :speaking_head: ', player[0].car, true)
    .addField('\u200b', '=========================================================')
    .addField('VIDA', CONFIGUIVIDA, true)
    .addField('MANA', CONFIGUIMANA, true)
    .addField('STATUS', CONFIGUIATKDEF, true)
    .setTimestamp()
    .setFooter('DEV: GUSTAVO CARDOSO', ' ');
  message.channel.send(charSet);

  message.delete().catch(O_o => { });

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
};
