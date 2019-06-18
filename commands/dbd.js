  const { prefix } = require('../config.json'); // config.json is one folfer up ..

  module.exports.dbdcommands = function (msg) { 

let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).	      
		  
		    //Command variable only have the word 'dbd' because we shift.
        if (command === 'dbd') {
            //args  variable only have the word ! because we split
            if (!args.length) {
                return msg.channel.send(`Please provide any arguments ${msg.author}!\nArguments: play, lup, ping\nExample: !dbd + ARGUMENT. `);
            } else if (args[0] === 'play') {
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
            msg.channel.send(`This argument is incorrect for dbd command, try again human: ${args[0]}`);
        }

};