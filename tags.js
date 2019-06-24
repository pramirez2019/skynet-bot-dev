const { prefix } = require('../config.json'); // config.json is one folfer up ..

module.exports = {
 //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

	name: 'tags',
	cooldown: 5,
	description: 'Gamer ids',
	//whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
	args: true,
	usage: '+ <ARGUMENT>',
	arguments: '<gamertags>, <pcgames>, <ps4games>, <switchgames>',

  execute(msg, args) {

    let ps4games = ["Patricio's PS4 games: RB6 Siege ", " Dead by daylight ", " Overwatch ", " MK11 ", " MK10 ", "and more"];
    let pcgames = ["Patricio's PC games: Dead by daylight ", " Overwatch ", " Dragon Ball figther Z ", " Hollow knight ", "and more"];
    let switchgames = ["Patricio's Nintendo games: Fallout Shelter ", " Super Smash Bros Ultimate ", " Mario Kart 8 ", " Just Dance 2019 ", "and more"];

		if (args[0] === 'gamertags') {
							return msg.reply('PSN:patricio_tv, Steam: reloadedantrax, Nintendo Switch: SW-0279-1159-3994 <:eymario:558854493567975435>');
					} else if (args[0] === 'pcgames') {
							return msg.reply(pcgames.toString() + ":joystick:");
					} else if (args[0] === 'ps4games') {
							return msg.reply(ps4games.toString() + ":joystick:");
					}else if (args[0] === 'switchgames'){
              return msg.reply(switchgames.toString() + ":joystick:");
          }
	},
};
