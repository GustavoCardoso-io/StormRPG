const Discord = require('discord.js');

module.exports.run = async (client, message, args) => { 
   
const low = require("lowdb");
const FileAsync = require('lowdb/adapters/FileSync');
const adapter = new FileAsync('raca.json');
const db = low(adapter);

  for (let i =0; i<3;  i++)
  {
       
    let b =  i.toString();
    
    const NOME = db.get(b).find({id: b}).value().nome;
    const ATK = db.get(b).find({id: b}).value().atk;
    const DEF = db.get(b).find({id: b}).value().def;
    const FOR = db.get(b).find({id: b}).value().foc;
    const DES = db.get(b).find({id: b}).value().des;
    const COS = db.get(b).find({id: b}).value().cos;
    const SAB = db.get(b).find({id: b}).value().sab;
    const INT = db.get(b).find({id: b}).value().int;
    const CAR = db.get(b).find({id: b}).value().car;
    const VIDA = db.get(b).find({id: b}).value().vida;
    const MANA= db.get(b).find({id: b}).value().mana;

    const CONFIGUIVIDA = " + " + VIDA + " :heart: por level!" + " +  :heartbeat: ";
    const CONFIGUIMANA = " + "+ MANA + ":cyclone: por level! " + "+ :writing_hand_tone3:";
    const CONFIGUIATKDEF = "  :crossed_swords: " + ATK + " | " + DEF + " :shield: ";

    const charSet = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(NOME)
      .addField('\u200b', '===========================')
      .addField('FOR :muscle_tone3: ', FOR, true)
      .addField('DES :leg_tone3: ', DES, true)
      .addField('SAB :book: ', SAB, true)
      .addField('CON :heartbeat: ',COS, true)
      .addField('INT :writing_hand_tone3: ', INT, true)
      .addField('CAR :speaking_head: ', CAR, true)
      .addField('\u200b', '===========================')
      .addField('VIDA', CONFIGUIVIDA, true)
      .addField('MANA', CONFIGUIMANA,true)
      .addField('STATUS', CONFIGUIATKDEF, false)
      .setTimestamp()
      .setFooter('DEV: GUSTAVO CARDOSO', ' ');
       message.author.send(charSet);
  }

};
