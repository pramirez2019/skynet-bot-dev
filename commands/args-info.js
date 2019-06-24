module.exports = {
    //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.
	name: 'args-info',
	description: 'Information about the arguments provided.',
	//whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`First argument: ${args[0]}`);
	},
};
