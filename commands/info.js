const { prefix } = require('../config.json'); // config.json is one folfer up ..
const Discord = require('discord.js');

module.exports = {
 //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

	name: 'info',
	cooldown: 5,
	description: 'Information about ',
	//whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
	args: true,
	usage: '+ <ARGUMENT>',
	arguments: '<user>, <discord>, <server>',
	execute(msg, args, client) {

		if (args[0]  === 'info') {
				//args  variable only have the word ! because we split
		}else if (args[0] === 'user') {
						return msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
		} else if(args[0] === 'userembed'){
			const userembed = new Discord.RichEmbed()
	      .setColor('#0099ff')
	      .setTitle(`${msg.author.username} information`)
	      .setAuthor(`User name: ${msg.author.username}`)
      	.setDescription(`User id: ${msg.author.id}`)
	      .setThumbnail(`${msg.author.displayAvatarURL}`)
				.addBlankField()
				.setTimestamp()
	      .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
				return msg.channel.send(userembed);
		}	else if (args[0] === 'discord') {
						client.fetchInvite('https://discord.gg/5FTJFDt');
						return msg.channel.send(`Join our machines army with this invitation: https://discord.gg/5FTJFDt \nCode: `);
		} else if (args[0] === 'server') {
						return msg.channel.send(`Server's name is: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
		}
			//	msg.channel.send(`This argument is incorrect for info command, try again human: ${args[0]}`);

	}
};

/*
module.exports.infocommands = function (msg, client) {

let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).

   //Command variable only have the word 'arg-info' because we shift.
        if (command === 'info') {
            //args  variable only have the word ! because we split
            if (!args.length) {
                return msg.channel.send(`Please provide any arguments ${msg.author}!\nArguments: user, discord, server\nExample: !info + ARGUMENT.`);
            } else if (args[0] === 'user') {
                return msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
            } else if (args[0] === 'discord') {
                client.fetchInvite('https://discord.gg/5FTJFDt');
                return msg.channel.send(`Join our machines army with this invitation: https://discord.gg/5FTJFDt \nCode: `);
            } else if (args[0] === 'server') {
                return msg.channel.send(`Server's name is: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
            }
            msg.channel.send(`This argument is incorrect for info command, try again human: ${args[0]}`);
        }

};
*/
