const Discord = require('discord.js');

const b = "2"

module.exports.run = async (client, message, args) =>
{
  const low = require("lowdb");
  const FileSync = require('lowdb/adapters/FileSync');
  const adapter = new FileSync('raca.json');
  const db = low(adapter);
  const adapterPlayer = new FileSync('banco.json');
  const db2 = low(adapterPlayer);

  const NOME = db.get(b ).find({id: b}).value().nome;
  const ATK = db.get(b ).find({id: b}).value().atk;
  const DEF = db.get(b ).find({id: b}).value().def;
  const FOR = db.get(b ).find({id: b}).value().foc;
  const DES = db.get(b ).find({id: b}).value().des;
  const COS = db.get(b ).find({id: b}).value().cos;
  const SAB = db.get(b ).find({id: b}).value().sab;
  const INT = db.get(b ).find({id: b}).value().int;
  const CAR = db.get(b ).find({id: b}).value().car;
  const VIDA = db.get(b ).find({id: b}).value().vida;
  const MANA= db.get(b ).find({id: b}).value().mana;

  const VIDAMAXP = db2.get(message.author.id).find({id:message.author.id}).value().maxVida;
  const DEFP = db2.get(message.author.id).find({id:message.author.id}).value().def;
  const ATKP = db2.get(message.author.id).find({id:message.author.id}).value().atk;
  const MANAP = db2.get(message.author.id).find({id:message.author.id}).value().mana;
  const MAXMANAP = db2.get(message.author.id).find({id:message.author.id}).value().maxMana;
  const RACAP = db2.get(message.author.id).find({id:message.author.id}).value().raca;
  const FORP = db2.get(message.author.id).find({id:message.author.id}).value().foc;
  const DESP = db2.get(message.author.id).find({id:message.author.id}).value().des;
  const COSP = db2.get(message.author.id).find({id:message.author.id}).value().cos;
  const INTP = db2.get(message.author.id).find({id:message.author.id}).value().int;
  const SABP = db2.get(message.author.id).find({id:message.author.id}).value().sab;
  const CARP = db2.get(message.author.id).find({id:message.author.id}).value().car;
  
  if (RACAP === "default")
  {
    let NEWRACA = NOME;
    let NEWVIDA = VIDA + VIDAMAXP;
    let NEWMANA = MANA + MAXMANAP;
    let NEWDEF = DEF + DEFP;
    let NEWATK = ATK + ATKP;
    let NEWFOR = FOR + FORP;
    let NEWDES = DES + DESP;
    let NEWCOS = COS + COSP;
    let NEWINT = INT + INTP;
    let NEWSAB = SAB + SABP;
    let NEWCAR = CAR + CARP;

    db2.get(message.author.id).find({id:message.author.id}).assign({maxVida: NEWVIDA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({vidaAtual: NEWVIDA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({mana: NEWMANA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({maxMana: NEWMANA}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({def: NEWDEF}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({atk: NEWATK}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({foc: NEWFOR}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({des: NEWDES}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({cos: NEWCOS}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({int: NEWINT}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({sab: NEWSAB}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({car: NEWCAR}).write()
    db2.get(message.author.id).find({id:message.author.id}).assign({raca: NEWRACA}).write()
  
    return message.channel.send("Você selecionou a RAÇA: "+ NEWRACA + ". Uma boa aventura! ");
  }
 
  return message.channel.send("Você ja tem uma RAÇA selecionada. Caso queira resetar use `str start`  !");

   message.delete().catch(O_o => {});
};  
