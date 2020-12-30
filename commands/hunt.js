const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')
  const criatura = new FileAsync('criaturas.json');
  const dbC = low(criatura);

  const char = new FileAsync('banco.json');
  const dbChar = low(char);

  // Pega as inforções do CHAR no banco.
  let ATKP = dbChar.get(message.author.id).find({ id: message.author.id }).value().atk;
  let DEFP = dbChar.get(message.author.id).find({ id: message.author.id }).value().def;
  let VIDAP = dbChar.get(message.author.id).find({ id: message.author.id }).value().vidaAtual;
  let MANAP = dbChar.get(message.author.id).find({ id: message.author.id }).value().mana;
  let NICK = dbChar.get(message.author.id).find({ id: message.author.id }).value().nick;
  let XPATUALP = dbChar.get(message.author.id).find({ id: message.author.id }).value().xpatual;
  let COINP = dbChar.get(message.author.id).find({ id: message.author.id }).value().coin;

  //SELECIONA A CRIATURA DO ENCONTRO
  let IDCRIATURA = Math.floor(Math.random() * 1).toString();

  //PEGA as informações do MONSTRO no banco
  let ATKC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().atk;
  let DEFC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().def;
  let VIDAC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().vida;
  let DESCRICAOC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().descricao;
  let NOMEC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().nome;
  let XPC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().xp;
  let COINC = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().coin;
  let LEVEL = dbC.get(IDCRIATURA).find({ id: IDCRIATURA }).value().level;

  let CONFIGSTATUS = ":crossed_swords: ATK: " + ATKC + " :shield: DEF: " + DEFC;

  //Coloca a mana atual do player.
  MANAP -= 1;
  dbChar.get(message.author.id).find({ id: message.author.id }).assign({ mana: MANAP }).write()

  // Mostra as informações do combate.
  const charSet = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(NICK + 'VOCÊ ENCONTROU UMA CRIATURA!')
    .setDescription(' Um **' + NOMEC + '**   ' + DESCRICAOC)
    .addField('STATUS', CONFIGSTATUS, true)
    .addField('\u200b', '===============================')
    .addField(' a', Batalha(), true)
    .setTimestamp()
    .setFooter('DEV: GUSTAVO CARDOSO', ' ');

  message.channel.send(charSet);

  function Batalha() {
    let _VIDAPERDIDA = 0;

    for (i = 1000; i >= 0; i--) {
      let _ATKC = Math.floor(Math.random() * 20 + 1 + ATKC).toString();
      let _ATKP = Math.floor(Math.random() * 20 + 1 + ATKP).toString();

      let MENSSAGEC = "CRIATURA : " + _ATKC + "   " + _ATKP + " VOCÊ.";
      let MENSSAEV = "CRIATURA VIDA: " + VIDAC + "   " + VIDAP + "  VIDA VOCÊ.";


      console.log(MENSSAGEC);
      console.log(MENSSAEV);

      if (VIDAP >= 0) {
        if (_ATKP >= DEFC) {
          if (VIDAC > 0) {
            VIDAC -= _ATKP = Math.floor(Math.random() * ATKP + 1).toString();
            console.log("ATK P: " + _ATKP);
            console.log("VIDA DO CRIATURA: " + VIDAC);
          }
          else {
            XPATUALP += XPC;
            COINP += COINC;
            dbChar.get(message.author.id).find({ id: message.author.id }).assign({ xpatual: XPATUALP }).write()
            dbChar.get(message.author.id).find({ id: message.author.id }).assign({ coin: COINP }).write()
            dbChar.get(message.author.id).find({ id: message.author.id }).assign({ vidaAtual: VIDAP }).write()

            return "O jogador **" + NICK + "  ** e ganhou: ** " + XPC + " ** XP e **" + COINC + "  ** coin  " + "  e perdeu:  ** " + _VIDAPERDIDA + " ** vida.";
          }

          if (VIDAC > 0) {
            if (_ATKC >= DEFP) {
              if (VIDAP > 0) {
                VIDAP -= _ATKC = Math.floor(Math.random() * ATKC + 1);
                _VIDAPERDIDA = _VIDAPERDIDA + _ATKC;
              }
            }
          }
        }
        else {
          console.log("VOCÊ EROU!!");

          if (VIDAC > 0) {
            if (_ATKC >= DEFP) {
              if (VIDAP > 0) {
                VIDAP -= _ATKC = Math.floor(Math.random() * ATKC + 1).toString();
                _VIDAPERDIDA += _ATKC;
              }
            }
          }
        }
      }
      else {
        return "PLAYER M0RREU E PERDEU  xx XP E x COIN"
      }
    }
    return MENSSAGEC;
  }
};