const { prefix } = require('../config.json'); // config.json is one folfer up ..

module.exports.skynethelper = function (msg) { 

let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).	      
		  
		  if (command === 'skynet-info') {
            //args  variable only have the word ! because we split
            if (!args.length) {
                return msg.channel.send(`Please provide any arguments ${msg.author}\nArguments: dbd, tags, info\nExample: !skynet-info dbd`);
             //args[0] is array. It has "dbd" now for the next condition
			} else if (args[0] === 'dbd') {
                return msg.reply('Commands available for "!dbd": play, lup, ldown, ping');
            } else if (args[0] === 'tags') {
                return msg.reply('Commands available for "!tags": gamertags, pcgames, switchgames');
            } else if (args[0] === 'info') {
                return msg.reply('Commands available for "!info": user, discord, server');
            }
          msg.channel.send(`Human this argument is incorrect for skynet-info command, try again human: ${args[0]}`);
        }

};
