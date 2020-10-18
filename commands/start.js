let Discord = require('discord.js');

let low = require("lowdb");
let FileAsync = require('lowdb/adapters/FileSync');
let adapter = new FileAsync('banco.json');
let db = low(adapter);

let adapterp = new FileAsync('invplayers.json');
let inv = low(adapterp);

module.exports.run = async (client, message, args) =>{

    db.set(message.author.id, []).write();

    db.get(message.author.id)
    .push({
      id: message.author.id,
      nick: message.author.username,
      avatar: message.author.displayAvatarURL(),
      level: 1,
      xpatual: 0,
      xpMaxLevel: 1000,
      coin: 200,
      vidaAtual: 0,
      maxVida:0,
      mana: 0,
      maxMana: 0,
      def: 10,
      atk: 1,
      foc: 0,
      sab: 0,
      int: 0,
      des: 0,
      cos: 0,
      car: 0,
      raca: "default",
      classe: "default",
      origem: "default"
    }).write(); 

  inv.set(message.author.id,[ ]).write();  
 
  message.channel.send("Bem vindo ao melhor RPG, já jogado! Aqui você vai viver grandes aventuras, e viver uma experiência incrivel.");

    message.delete().catch(O_o => {});
};