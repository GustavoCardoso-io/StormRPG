const Discord = require('discord.js');

const b = "0"

module.exports.run = async (client, message, args) =>
{
  const low = require("lowdb");
  const FileSync = require('lowdb/adapters/FileSync');
  const adapter = new FileSync('classe.json');
  const db = low(adapter);
  const adapterPlayer = new FileSync('banco.json');
  const db2 = low(adapterPlayer);

  const NOME = db.get(b ).find({id: b}).value().nome;
  const VIDA = db.get(b ).find({id: b}).value().vida;
  const MANA= db.get(b ).find({id: b}).value().mana;
  const CLASSE = db.get(b).find({id: b}).value().nome

  const VIDAMAXP = db2.get(message.author.id).find({id:message.author.id}).value().maxVida;
  const MANAP = db2.get(message.author.id).find({id:message.author.id}).value().mana;
  const MAXMANAP = db2.get(message.author.id).find({id:message.author.id}).value().maxMana;
  const RACAP = db2.get(message.author.id).find({id:message.author.id}).value().classe;
 

   console.log(args.slice(1).join(''));
  if (RACAP === "default")
  {
    let NEWRACA = NOME;
    let NEWVIDA = VIDA + VIDAMAXP;
    let NEWMANA = MANA + MAXMANAP;

    db2.get(message.author.id).find({id:message.author.id}).assign({maxVida: NEWVIDA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({vidaAtual: NEWVIDA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({mana: NEWMANA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({maxMana: NEWMANA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({classe: NEWRACA}).write()
  
    return message.channel.send("Você selecionou a classe: "+ NEWRACA + ". Uma boa aventura! ");
}
    return message.channel.send("Você ja tem uma classe selecionada. Caso queira resetar use `str start`  !");

 message.delete().catch(O_o => {});

};  
