const Discord = require('discord.js');

const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('banco.json');
const db = low(adapter);

module.exports.run = async (client, message, args) =>{
     
    db.set(message.author.id,[]).write()

      db.get(message.author.id)
      .push({
        id: message.author.id,
        nick: message.author.username,
        avatar: message.author.displayAvatarURL(),
        level: 1,
        xpatual: 0,
        xpMaxLevel: 1000,
        vidaAtual: 0,
        maxVida:0,
        mana: 0,
        maxMana: 0,
        def: 0,
        atk: 0,
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
 

    message.channel.send("Bem vindo ao melhor RPG, já jogado! Aqui você vai viver grandes aventuras, e viver uma experiência incrivel.");

    
    message.delete().catch(O_o => {});
};