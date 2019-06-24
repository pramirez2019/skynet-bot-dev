module.exports = {
 //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

	name: 'ping',
	cooldown: 5,
	description: 'Pong!',
	//whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
	args: true,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
