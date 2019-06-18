const { prefix } = require('../config.json'); // config.json is one folfer up ..

module.exports.admincommands = function (msg, client) { 

let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).	      
		  
		       //Command variable only have the word 'arg-info' because we shift.
        if (command === 'admin') {
            //args  variable only have the word ! because we split
            if (!args.length) {
                return msg.channel.send(`Please provide any arguments ${msg.author}!\nArguments: ping, delete, bulk, botinvite\nExample: !admin + ARGUMENT.`);
            } else if (args[0] === 'ping') {
                return msg.channel.send('Im here human, what do you need?');
            } else if (args[0] === 'delete') {
                return msg.channel.delete();
            } else if (args[0] === 'bulk') {
                return msg.channel.bulkDelete(50)
                    .then(message => msg.channel.send(`Bulk deleted ${message.size} messages`))
                    .catch(console.error);
            } else if (args[0] === 'botinvite') {
                client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
                    .then(link => msg.channel.send(`Skynet bot invite link: ${link}`))
                    .catch(console.error);
            }
            msg.channel.send(`This argument is incorrect for admin command, try again human: ${command}`);
        }
         
};
