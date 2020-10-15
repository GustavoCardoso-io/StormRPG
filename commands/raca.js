const Discord = require('discord.js');

module.exports.run = async (client, message, args) =>
{
  const classeEmbend = new Discord.MessageEmbed()
  .setColor('#FF0000')
  .setTitle('RAÇA')
  .setDescription('Lembreçe ao escolher sua CLASSE escolha com sabedoria porque será uma vez somente!, use o comando `str classe [CLASSE]` para selecionar sua classe!')
  .addField('\u200b', '===========================')
  .addField('HUMANO','Humanos estão por todo o mundo, sendo bons ou mals, entre ladrões e reis!!',false)  
  .addField('FOR :muscle_tone3: ', '+ 2', true)
  .addField('INT :writing_hand_tone3: ', '+ 2', true)
  .addField('COS  :heartbeat: ', '- 1 ', true)
  .addField('\u200b', '===========================')
  .addField(':heart: VIDA', '+ 2 de :heart: pontos iniciais!', true)
  .addField(':crossed_swords: STATUS :shield:', '  :muscle_tone3: + 2 ATK | +1 DEF + :leg_tone3: pontos iniciais! ', true)
  .addField('\u200b', '----------------------------------------' , '\u200b')
  .addField('ANÃO','Os anões grandes trabalhadores das minas e super confiaveis!!',false)  
  .addField('COS :heartbeat: ', '+ 4', true)
  .addField('SAB :book: ', '+ 2', true)
  .addField('CAR :speaking_head: ', '- 1', true)
  .addField('\u200b', '===========================')
  .addField(':heart: VIDA', '+ 4 de :heart: pontos iniciais!', true)
  .addField(':crossed_swords: STATUS :shield:', '  :muscle_tone3: + 3 ATK | -1 DEF + :leg_tone3: pontos iniciais! ', true)
  .addField('\u200b', '----------------------------------------' , '\u200b')
  .addField('ELFO','Orelhas pontudas são seu charme principal, ou não!!',false)  
  .addField('INT :writing_hand_tone3: ', '+ 4', true)
  .addField('DES :leg_tone3: ', '+ 2', true)
  .addField('COS :heartbeat: ', '- 1', true)
  .addField('\u200b', '===========================')
  .addField(':cyclone: MANA', '  4 de :cyclone: pontos iniciais!', true)
  .addField(':crossed_swords: STATUS :shield:', '  :muscle_tone3: +2 ATK | -1 DEF + :leg_tone3: pontos iniciais! ', true)
  .addField('\u200b', '===========================')
  .setFooter('DEV: GUSTAVO CARDOSO', ' ');

   message.channel.send(classeEmbend);

   message.delete().catch(O_o => {});
};