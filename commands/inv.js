  const Discord = require('discord.js');

  module.exports.run = async (client, message, args) => {  
  
    const low = require("lowdb");
    const FileAsync = require('lowdb/adapters/FileSync') 
    const inventory = new FileAsync('invplayers.json');
    const inv = low(inventory);

    let IDPLAYER =  message.author.id;

    let items = inv.get(IDPLAYER).push({}).value();

    for(i = 0; i < items.length -1 ; i++)
    {
        message.channel.send("Item: " + items[i].name + "Quantidade: " + items[i].quantidade );  
    }

    //console.log(items);
  };