const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {  
  
  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync') 
  const inventory = new FileAsync('invplayers.json');
  const inv = low(inventory);

   let itemInv = 
   {
      id: 1,
      name: 'POÇÃO DE CURA',
      quantidade: 1
   }

   let items = inv.get(message.author.id).push({}).value();

  for (i= 0; i< items.length -1 ; i++)
  {
     if(items[i].id === 1)
     {
        items[i].name = "POÇÃO DE CURA!";
        items[i].quantidade += 1;
     }else
     {
      inv.get(message.author.id).push({itemInv}).write();
     }
  }
};  
