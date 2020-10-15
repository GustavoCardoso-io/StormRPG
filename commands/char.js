const Discord = require('discord.js');

const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('banco.json');
const db = low(adapter);

module.exports.run = async (client, message, args) => {  

  if(args[0])
  {
    const user = getUserFromMention(args[0]);

    if(!user)
    {
        return message.reply('Use uma menção apropriada se quiser ver o avatar de outra pessoa!');
    }

    const NAME = db.get(user.id).find({id:user.id}).value().nick;
    const AVATAR = db.get(user.id).find({id:user.id}).value().avatar;
    const ID = db.get(user.id).find({id:user.id}).value().id;
    const LEVELATUAL  = db.get(user.id).find({id:user.id}).value().level;
    const XPATUAL = db.get(user.id).find({id:user.id}).value().xpatual;
    const XPMAXLEVEL = db.get(user.id).find({id:user.id}).value().xpMaxLevel;
    const VIDA = db.get(user.id).find({id:user.id}).value().vidaAtual;
    const VIDAMAX = db.get(user.id).find({id:user.id}).value().maxVida;
    const DEF = db.get(user.id).find({id:user.id}).value().armo;
    const ATK = db.get(user.id).find({id:user.id}).value().atk;
    const MANA = db.get(user.id).find({id:user.id}).value().mana;
    const MAXMANA = db.get(user.id).find({id:user.id}).value().maxMana;
    const CLASSE = db.get(user.id).find({id:user.id}).value().classe;
    const RACA = db.get(user.id).find({id:user.id}).value().raca;
    const ORIGEM = db.get(user.id).find({id:user.id}).value().origem;


    const CONFIGUIVIDA = "  :heart: " + VIDA + " | " + VIDAMAX;
    const CONFIGUIMANA = "  :cyclone: " + MANA + " | " + MAXMANA;
    const CONFIGUIATKDEF = "  :crossed_swords:  " + ATK + " | " + DEF + " :shield: ";
    const charSet = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(NAME)
      .setURL('https://discord.gg/5cuQVX')
      .setImage(AVATAR)
      .addField('\u200b', '===========================')
      .addField('RAÇA', RACA, true)
      .addField('CLASSE', CLASSE, true)
      .addField('ORIGEM', ORIGEM, true)
      .addField('\u200b', '===========================')
      .addField('FOR :muscle_tone3: ', ATK, true)
      .addField('DES :leg_tone3: ', ATK, true)
      .addField('SAB :book: ', ATK, true)
      .addField('COS :heartbeat: ',ATK, true)
      .addField('INT :writing_hand_tone3: ', DEF, true)
      .addField('CAR :speaking_head: ', DEF, true)
      .addField('\u200b', '===========================')
      .addField('VIDA', CONFIGUIVIDA, true)
      .addField('MANA', CONFIGUIMANA, true)
      .addField('STATUS', CONFIGUIATKDEF, true)
      .setTimestamp()
      .setFooter('DEV: GUSTAVO CARDOSO', ' ');
    message.channel.send(charSet);

    return;
  }

    const NAME = db.get(message.author.id).find({id:message.author.id}).value().nick;
    const AVATAR = db.get(message.author.id).find({id:message.author.id}).value().avatar;
    const ID = db.get(message.author.id).find({id:message.author.id}).value().id;
    const LEVELATUAL  = db.get(message.author.id).find({id:message.author.id}).value().level;
    const XPATUAL = db.get(message.author.id).find({id:message.author.id}).value().xpatual;
    const XPMAXLEVEL = db.get(message.author.id).find({id:message.author.id}).value().xpMaxLevel;
    const VIDA = db.get(message.author.id).find({id:message.author.id}).value().vidaAtual;
    const VIDAMAX = db.get(message.author.id).find({id:message.author.id}).value().maxVida;
    const DEF = db.get(message.author.id).find({id:message.author.id}).value().armo;
    const ATK = db.get(message.author.id).find({id:message.author.id}).value().atk;
    const MANA = db.get(message.author.id).find({id:message.author.id}).value().mana;
    const MAXMANA = db.get(message.author.id).find({id:message.author.id}).value().maxMana;
    const CLASSE = db.get(message.author.id).find({id:message.author.id}).value().classe;
    const RACA = db.get(message.author.id).find({id:message.author.id}).value().raca;
    const ORIGEM = db.get(message.author.id).find({id:message.author.id}).value().origem;


    const CONFIGUIVIDA = "  :heart: " + VIDA + " | " + VIDAMAX;
    const CONFIGUIMANA = "  :cyclone: " + MANA + " | " + MAXMANA;
    const CONFIGUIATKDEF = "  :crossed_swords:  " + ATK + " | " + DEF + " :shield: ";
    const charSet = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(NAME)
      .setURL('https://discord.gg/5cuQVX')
      .setImage(AVATAR)
      .addField('\u200b', '===========================')
      .addField('RAÇA', RACA, true)
      .addField('CLASSE', CLASSE, true)
      .addField('ORIGEM', ORIGEM, true)
      .addField('\u200b', '===========================')
      .addField('FOR :muscle_tone3: ', ATK, true)
      .addField('DES :leg_tone3: ', ATK, true)
      .addField('SAB :book: ', ATK, true)
      .addField('COS :heartbeat: ',ATK, true)
      .addField('INT :writing_hand_tone3: ', DEF, true)
      .addField('CAR :speaking_head: ', DEF, true)
      .addField('\u200b', '===========================')
      .addField('VIDA', CONFIGUIVIDA, true)
      .addField('MANA', CONFIGUIMANA, true)
      .addField('STATUS', CONFIGUIATKDEF, true)
      .setTimestamp()
      .setFooter('DEV: GUSTAVO CARDOSO', ' ');
    message.channel.send(charSet);

  message.delete().catch(O_o => {});


  function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')){
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}
};
