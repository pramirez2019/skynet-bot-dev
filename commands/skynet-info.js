const { prefix } = require('../config.json'); // config.json is one folfer up ..

module.exports = {
 //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

	name: 'skynet-info',
	cooldown: 5,
	description: 'skynet-info!',
	//whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
	args: true,
	usage: '+ <ARGUMENT>',
	arguments: '<dbd>, <tags>, <info>',
	execute(msg, args) {
		if (args[0] === 'dbd') {
							return msg.reply('Commands available for "!dbd": play, lup, ldown, ping');
					} else if (args[0] === 'tags') {
							return msg.reply('Commands available for "!tags": gamertags, pcgames, switchgames');
					} else if (args[0] === 'info') {
							return msg.reply('Commands available for "!info": user, discord, server');
					}
	},
};
