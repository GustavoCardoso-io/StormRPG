const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')
  const inventory = new FileAsync('invplayers.json');
  const inv = low(inventory);

  let _newQuantidade = 1;
  let _quant = 0;
  let _IDplayer = message.author.id;
  let _itemIsExist = false;

  let item =
  {
    id: 2,
    nome: ":droplet: POÇÃO DE MANA",
    quantidade: 1
  }

  let items = inv.get(message.author.id).push().value({});

  if (typeof _quant === 'undefined') {
    _quant = 0;
  }

  if (typeof items[0] === 'undefined')
  {
    inv.get(_IDplayer).push(item).write();
  }

  _quant = parseInt(args[2]);

  for (i = 0; i < items.length; i++)
  {

    if (items[i].id === 2)
    {
      _itemIsExist = true;
      if (_quant === 0)
      {
        _newQuantidade = items[i].quantidade += _newQuantidade;

        console.log(_newQuantidade);
        inv.get(_IDplayer).find({ id: item.id }).assign({ quantidade: _newQuantidade }).write();
        return;

      } else {
        _newQuantidade = items[i].quantidade += _quant;
        inv.get(_IDplayer).find({ id: item.id }).assign({ quantidade: _newQuantidade }).write();
        return;
      }
    }else
    {
      _itemIsExist = false;
    }


  }

  if(_itemIsExist === false)
  {
     inv.get(_IDplayer).push(item).write();
  }
};  