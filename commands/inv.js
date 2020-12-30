const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')
  const inventory = new FileAsync('invplayers.json');
  const inv = low(inventory);

  let _IDPlayer = message.author.id;
  let items = inv.get(_IDPlayer).push().value({});

   let charSet = new Discord.MessageEmbed();

  for (i = 0; i < items.length; i++)
  {
    console.log(items[i].nome);
    charSet
      .setColor('#7B241C')
      .setTitle('INVENTARIO '+ message.author.username +'.\n' )
      .addField('***'+ items[i].nome + ' ***', '**' + items[i].quantidade + '**',true)
      .setTimestamp()
      .setFooter('DEV: GUSTAVO CARDOSO', ' ');

  }
  
  message.channel.send(charSet);

  //console.log(items);
};