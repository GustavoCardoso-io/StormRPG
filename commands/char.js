  const Discord = require('discord.js');

  module.exports.run = async (client, message, args) => {  
  
  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync') 
  const adapter = new FileAsync('banco.json');
  const db = low(adapter);

   if(args)
    {
      let user = getUserFromMention(args[1]);

    if(!user)
    {  
      let NAME = db.get(message.author.id).find({id:message.author.id}).value().nick;
      let AVATAR = db.get(message.author.id).find({id:message.author.id}).value().avatar;
      let LEVELATUAL  = db.get(message.author.id).find({id:message.author.id}).value().level;
      let XPATUAL = db.get(message.author.id).find({id:message.author.id}).value().xpatual;
      let COIN = db.get(message.author.id).find({id:message.author.id}).value().coin;
      let XPMAXNEXTLEVEL = db.get(message.author.id).find({id:message.author.id}).value().xpMaxLevel;
      let VIDA = db.get(message.author.id).find({id:message.author.id}).value().vidaAtual;
      let VIDAMAX = db.get(message.author.id).find({id:message.author.id}).value().maxVida;
      let DEF = db.get(message.author.id).find({id:message.author.id}).value().def;
      let ATK = db.get(message.author.id).find({id:message.author.id}).value().atk;
      let MANA = db.get(message.author.id).find({id:message.author.id}).value().mana;
      let MAXMANA = db.get(message.author.id).find({id:message.author.id}).value().maxMana;
      let CLASSE = db.get(message.author.id).find({id:message.author.id}).value().classe;
      let RACA = db.get(message.author.id).find({id:message.author.id}).value().raca;
      let ORIGEM = db.get(message.author.id).find({id:message.author.id}).value().origem;
      let FOR = db.get(message.author.id).find({id:message.author.id}).value().foc;
      let DES = db.get(message.author.id).find({id:message.author.id}).value().des;
      let COS = db.get(message.author.id).find({id:message.author.id}).value().cos;
      let INT = db.get(message.author.id).find({id:message.author.id}).value().int;
      let SAB = db.get(message.author.id).find({id:message.author.id}).value().sab;
      let CAR = db.get(message.author.id).find({id:message.author.id}).value().car;

      let CONFIGUIVIDA = "  :heart: " + VIDA + " | " + VIDAMAX;
      let CONFIGUIMANA = "  :cyclone: " + MANA + " | " + MAXMANA;
      let CONFIGUIATKDEF = "  :crossed_swords:  " + ATK + " | " + DEF + " :shield: ";
      let CONFIGUIXP = "  :sparkles:  " + XPATUAL + " | " + XPMAXNEXTLEVEL;
      
      let charSet = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(NAME)
        .setURL('https://discord.gg/5cuQVX')
        .setImage(AVATAR)
        .addField('\u200b', '=========================================================')
        .addField('LEVEL', LEVELATUAL, false)
        .addField('XP', CONFIGUIXP, true)
        .addField('T$ :moneybag:', COIN, true)
        .addField('\u200b', '=========================================================')
        .addField('RAÇA', RACA, true)
        .addField('CLASSE', CLASSE, true)
        .addField('ORIGEM', ORIGEM, true)
        .addField('\u200b', '=========================================================')
        .addField('FOR :muscle_tone3: ', FOR, true)
        .addField('DES :leg_tone3: ', DES, true)
        .addField('SAB :book: ', SAB, true)
        .addField('CON :heartbeat: ',COS, true)
        .addField('INT :writing_hand_tone3: ', INT, true)
        .addField('CAR :speaking_head: ', CAR, true)
        .addField('\u200b', '=========================================================')
        .addField('VIDA', CONFIGUIVIDA, true)
        .addField('MANA', CONFIGUIMANA, true)
        .addField('STATUS', CONFIGUIATKDEF, true)
        .setTimestamp()
        .setFooter('DEV: GUSTAVO CARDOSO', ' ');
      message.channel.send(charSet);
      }else
      {
      
      let NAME = db.get(user.id).find({id:user.id}).value().nick;
      let AVATAR = db.get(user.id).find({id:user.id}).value().avatar;
      let LEVELATUAL  = db.get(user.id).find({id:user.id}).value().level;
      let XPATUAL = db.get(user.id).find({id:user.id}).value().xpatual;
      let XPMAXNEXTLEVEL = db.get(user.id).find({id:user.id}).value().xpMaxLevel;
      let VIDA = db.get(user.id).find({id:user.id}).value().vidaAtual;
      let COIN = db.get(user.id).find({id:user.id}).value().coin;
      let VIDAMAX = db.get(user.id).find({id:user.id}).value().maxVida;
      let DEF = db.get(user.id).find({id:user.id}).value().def;
      let ATK = db.get(user.id).find({id:user.id}).value().atk;
      let MANA = db.get(user.id).find({id:user.id}).value().mana;
      let MAXMANA = db.get(user.id).find({id:user.id}).value().maxMana;
      let CLASSE = db.get(user.id).find({id:user.id}).value().classe;
      let RACA = db.get(user.id).find({id:user.id}).value().raca;
      let ORIGEM = db.get(user.id).find({id:user.id}).value().origem;
      let FOR = db.get(user.id).find({id:user.id}).value().foc;
      let DES = db.get(user.id).find({id:user.id}).value().des;
      let COS = db.get(user.id).find({id:user.id}).value().cos;
      let INT = db.get(user.id).find({id:user.id}).value().int;
      let SAB = db.get(user.id).find({id:user.id}).value().sab;
      let CAR = db.get(user.id).find({id:user.id}).value().car;

      let CONFIGUIVIDA = "  :heart: " + VIDA + " | " + VIDAMAX;
      let CONFIGUIMANA = "  :cyclone: " + MANA + " | " + MAXMANA;
      let CONFIGUIATKDEF = "  :crossed_swords:  " + ATK + " | " + DEF + " :shield: ";
      let CONFIGUIXP = "  :sparkles:  " + XPATUAL + " | " + XPMAXNEXTLEVEL;

      let charSet = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(NAME)
        .setURL('https://discord.gg/5cuQVX')
        .setImage(AVATAR)
        .addField('\u200b', '=========================================================')
        .addField('LEVEL', LEVELATUAL, false)
        .addField('XP', CONFIGUIXP, true)
        .addField('T$ :moneybag:', COIN, true)
        .addField('\u200b', '=========================================================')
        .addField('RAÇA', RACA, true)
        .addField('CLASSE', CLASSE, true)
        .addField('ORIGEM', ORIGEM, true)
        .addField('\u200b', '=========================================================')
        .addField('FOR :muscle_tone3: ', FOR, true)
        .addField('DES :leg_tone3: ', DES, true)
        .addField('SAB :book: ', SAB, true)
        .addField('CON :heartbeat: ',COS, true)
        .addField('INT :writing_hand_tone3: ', INT, true)
        .addField('CAR :speaking_head: ', CAR, true)
        .addField('\u200b', '=========================================================')
        .addField('VIDA', CONFIGUIVIDA, true)
        .addField('MANA', CONFIGUIMANA, true)
        .addField('STATUS', CONFIGUIATKDEF, true)
        .setTimestamp()
        .setFooter('DEV: GUSTAVO CARDOSO', ' ');
      message.channel.send(charSet);
       return;
    }
  }     

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
