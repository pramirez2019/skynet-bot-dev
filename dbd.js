  const { prefix } = require('../config.json'); // config.json is one folfer up ..

  module.exports = {
   //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

  	name: 'dbd',
  	cooldown: 5,
  	description: 'dbd!',
    //whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
    args: true,
    usage: '+ <ARGUMENT>',
    arguments: '<play>, <lup>,<ldown>, <ping + username>',
  	execute(msg, args) {
      if (args[0] === 'play') {
          return msg.reply('Lets play! <:eymario:558854493567975435>');
      } else if (args[0] === 'lup') {
          return msg.channel.send(`You leveled up, hype!!!  :sunglasses:  ${msg.author}!`);
      } else if (args[0] === 'ldown') {
          return msg.channel.send(`Rank down, why!!!  :worried:  ${msg.author}!`);
      } else if (args[0] === 'ping') {
          const taggedUser = msg.mentions.users.first();
          if (!msg.mentions.users.size) {
              return msg.reply('Human you need to tag a user in order to use this command');
          }
          return msg.channel.send(`Do you want to play some rounds? ${taggedUser.username}`);
      }
       //msg.channel.send(`This argument is incorrect for this command, try again human: ${args[0]}`);
  	},
  };
