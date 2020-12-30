const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')

  const dbItemShop = new FileAsync('items.json');
  const itemShop = low(dbItemShop);

  let itemSet = new Discord.MessageEmbed();

  let _IDAuthor = message.author.id;

  for (i = 0; i < 1; i++) {

    let b = i.toString();


    console.log(item); 

    if (item[0].id === i)
    {
      itemSet
        .setTitle('SHOP: :shopping_cart: ')
        .addField(item[i].nome + '  ', ':shopping_cart: ', true)
        return;
    }

  }

  message.channel.send(itemSet);


}