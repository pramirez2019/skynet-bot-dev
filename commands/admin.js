const { prefix } = require('../config.json'); // config.json is one folfer up ..

module.exports = {
 //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

	name: 'admin',
	cooldown: 5,
	description: 'admin command for administration',
	//whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
	args: true,
	usage: '+ <ARGUMENT>',
	arguments: '<botinvite>, <?secret>, <?secret>, <?secret>',

  execute(msg, args, client) {

		if (args[0] === 'delete') {
						 return msg.channel.delete();
					}  else if (args[0] === 'bulk') {
						return msg.channel.bulkDelete(50)
								.then(message => msg.channel.send(`Bulk deleted ${message.size} messages`))
								.catch(console.error);
					}else if (args[0] === 'botinvite'){
						client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
								.then(link => msg.channel.send(`Skynet bot invite link: ${link}`))
								.catch(console.error);
          }
	},
};
