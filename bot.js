//THIS IS TEST
const { prefix } = require('./config.json');//Using prefixes({prefix})stored on config.json file. configuration files come in for storing static data that can be easily updated in a single place
const Discord = require('discord.js'); // require the discord.js module
const client = new Discord.Client(); // create a new Discord client
client.commands = new Discord.Collection();
//const auth = require('./auth.json');  // Enable this for local testing
const channel = new Discord.Channel();
const fs = require('fs'); // fs is Node's native file system module.
const cooldowns = new Discord.Collection(); //Collection for cooldowns
const util = require('util')
const extralifeapi = require('extra-life-api');
//const greatings = require('./commands/greetings.js'); //Calling the greetings.js module. and assigning to variable Testing only
//const pong = require('./commands/pong.js');

 /*The fs.readdirSync() method will return an ARRAY of all the file names in that directory,
 e.g. ['ping.js', 'beep.js']. The filter is there to make sure any non-JS files are left out of the array.
 With that array, you can loop over it and dynamically */
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

console.log(`Command read:  ${commandFiles}`);
//Loading using for all my .js command from commandFiles to file.
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


// when the client is ready, run this code
// this event will only trigger one time after logging in

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//client.on means the bot is listening

client.on('message', msg => {
	  //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
    let args = msg.content.slice(prefix.length).split(/ +/);
    //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).
	  const commandName = args.shift().toLowerCase();


    /*If there isn't a command with that name, exit early. If there is, .get() the command and call its .execute() method while passing
		in your msg and args variables as the method arguments.
		In case something goes wrong, log the error and report back to the member to let them know.
		Whenever you want to add a new command, you simply make a new file in your commands directory, name it what you want, and
		then do what you did for the other commands.*/
		if (!client.commands.has(commandName)) return;

		 //Loading the commands on command variable using get and later execute
		const command = client.commands.get(commandName);

		if (!msg.content.startsWith(prefix) || !msg.author.bot) {  // ||or && and ! not

			 //Remember command.name is a property of the object. You need to declare it in the module to avoid undefined
				if (!cooldowns.has(command.name)) {
						cooldowns.set(command.name, new Discord.Collection());
				}
				// Now variable with the current time
				const now = Date.now();
				// .Get()s The Collection for the triggered command.
				const timestamps = cooldowns.get(command.name);
				//CooldownAmount variable that gets the necessary cooldown amount. 3*1000 = 3000 ms = 3 segs
				const cooldownAmount = (command.cooldown || 5) * 1000;
				//If statement to check if the timestamps Collection has the author ID in it yet.
				if (timestamps.has(msg.author.id)) {
						/*Since the timestamps Collection has the author ID in it,
						 you .get() it and then sum it up with the cooldownAmount variable,
						 in order to get the correct expiration timestamp*/
						const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;
						/*If the expirationTime has not passed, return a message letting the user know
						 how much time is left until they can use that command again*/
						if (now < expirationTime) {
								//TimeLeft variable time with the remaining time to use the command again
								const timeLeft = (expirationTime - now) / 1000;
								return msg.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing \`${command.name}\` the command.`);
						}
				}
				/*if the timestamps Collection doesn't have the message author's ID (or if the author ID
				 did not get deleted as planned), .set() the author ID with the current timestamp and create a setTimeout()
				 to automatically delete it after the cooldown period has passed
				*/

				timestamps.set(msg.author.id, now);
				setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);
				}

    try {
				command.execute(msg, args, client);
    } catch (error) {
           console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }

		if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${msg.author}!`;

        /*Use an if statement to check if the usage property exists (and is truthy) first,
				so that you don't accidentally end up with undefined in the reply string (in the case that you forget to properly supply the property in your command file,
				or some similar incident). */

				if (command.usage) {
					reply += `\nHuman the proper usage would be: \`${prefix}${command.name} ${command.usage}\`\nARGUMENTS: ${command.arguments}\n`;
				}
				return msg.channel.send(reply);
			}

})

//ENABLE THIS FOR WEB SERVICE ONLY!!!
// THIS  MUST  BE  THIS  WAY
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot


