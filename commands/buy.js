const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

  const low = require("lowdb");
  const FileAsync = require('lowdb/adapters/FileSync')

  const dbInvPlayer = new FileAsync('invplayers.json');
  const invPlayer = low(dbInvPlayer);

  const dbItemShop = new FileAsync('items.json');
  const itemShop = low(dbItemShop);

  const dbPlayerStatus = new FileAsync('banco.json');
  const playerStatus = low(dbPlayerStatus);

  let _newQuantidade = 1;
  let _quant = 0;
  let _IDplayer = message.author.id;
  let _itemIsExist = false;

  let item = itemShop.get(args[1]).push().value();

  let _moneyPlayer = playerStatus.get(_IDplayer).find({ id: _IDplayer }).value().coin;
  let moneyToPay = 0;

  console.log(_moneyPlayer);

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

  let charSet = new Discord.MessageEmbed();

  _quant = args[2];
  if (typeof _quant === 'undefined') {
    _quant = 1;
  }

  if (typeof itemsInvPlayer[0] === 'undefined') {
    invPlayer.get(_IDplayer).push(newItem).write();
  }

  _quant = parseInt(_quant);

  moneyToPay = _quant * newItem.buyvalor;
  console.log(moneyToPay);

  for (i = 0; i < itemsInvPlayer.length; i++) {

    if (itemsInvPlayer[i].id === item[0].id) {
      if (_quant === 0) {
        if (_moneyPlayer >= moneyToPay) {
          _newQuantidade = itemsInvPlayer[i].quantidade += _quant;
          invPlayer.get(_IDplayer).find({ id: i }).assign({ quantidade: _newQuantidade }).write();

          _moneyPlayer -= moneyToPay;

          playerStatus.get(_IDplayer).find({ id: _IDplayer }).assign({ coin: _moneyPlayer }).write()

          charSet.setColor('#0099ff')
            .setTitle('INFO: ' + message.author.username)
            .addField('VOCÊ GASTOU :moneybag: ' + '     ' + moneyToPay + '     POR: ' + '    ' + _quant + '   ' + newItem.nome, ':shopping_cart: ', false)

          message.channel.send(charSet);

          return;
        } else {
          charSet.setColor('#0099ff')
            .setTitle('INFO: ' + message.author.username)
            .addField('VOCÊ NÃO TEM  :moneybag: SUFICIENTE PARA ISSO.');
        }
      } else {
        if (_moneyPlayer >= moneyToPay) {
          _newQuantidade = itemsInvPlayer[i].quantidade += _quant;
          invPlayer.get(_IDplayer).find({ id: i }).assign({ quantidade: _newQuantidade }).write();

          _moneyPlayer -= moneyToPay;

          playerStatus.get(_IDplayer).find({ id: _IDplayer }).assign({ coin: _moneyPlayer }).write()

          charSet.setColor('#0099ff')
            .setTitle('INFO: ' + message.author.username)
            .addField('VOCÊ GASTOU :moneybag: ' + '     ' + moneyToPay + '     POR: ' + '    ' + _quant + '   ' + newItem.nome, ':shopping_cart: ', false)

          message.channel.send(charSet);

          return;
        } else {
          charSet.setColor('#0099ff')
            .setTitle('INFO: ' + message.author.username)
            .addField('VOCÊ NÃO TEM  :moneybag: SUFICIENTE PARA ISSO.');
        }
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
