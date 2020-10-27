const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')
  const dbInvPlayer = new FileAsync('invplayers.json');
  const invPlayer = low(dbInvPlayer);

  const dbItemShop = new FileAsync('items.json');
  const itemShop = low(dbItemShop);

  let _newQuantidade = 1;
  let _quant = 0;
  let _IDplayer = message.author.id;
  let _itemIsExist = false;

  let item = itemShop.get(args[1]).push().value();

  let newItem =
  {
    id: item[0].id,
    nome: item[0].nome,
    buyvalor: item[0].buyvalor,
    sellvalor: item[0].sellvalor,
    maxliferestore: item[0].maxliferestore,
    quantidade: item[0].quantidade
  }

  let itemsInvPlayer = invPlayer.get(message.author.id).push().value();

  _quant = args[2];
  if (typeof _quant === 'undefined') {
    _quant = 0;
  }

  if (typeof itemsInvPlayer[0] === 'undefined') {
    invPlayer.get(_IDplayer).push(newItem).write();
  }

  _quant = parseInt(_quant);


  for (i = 0; i < itemsInvPlayer.length; i++) {

    if (itemsInvPlayer[i].id === item[0].id) {
      if (_quant === 0) {

        _newQuantidade = itemsInvPlayer[i].quantidade += 1;
        invPlayer.get(_IDplayer).find({ id: i }).assign({ quantidade: _newQuantidade }).write();
        return;

      } else {
        _newQuantidade = itemsInvPlayer[i].quantidade += _quant;
        invPlayer.get(_IDplayer).find({ id: i }).assign({ quantidade: _newQuantidade }).write();
        return;
      }
    }
    else {
      _itemIsExist = false;
    }
  }

  if (_itemIsExist === false) {
    invPlayer.get(_IDplayer).push(newItem).write();
  }
};  
