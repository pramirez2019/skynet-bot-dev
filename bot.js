//THIS IS TEST
//const config = require('./config.json'); //configuration files come in for storing static data that can be easily updated in a single place
const {prefix} = require('./config.json');//Using prefixes({prefix})stored on config.json file
const Discord = require('discord.js'); // require the discord.js module
const client = new Discord.Client(); // create a new Discord client
const channel = new Discord.Channel();

// when the client is ready, run this code
// this event "on" will multiple times after logging in. client.once to trigger one time
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//client.on means the bot is listening
client.on('message', msg => {
    let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
    const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).
    let ps4games = ["Patricio's PS4 games: RB6 Siege ", " Dead by daylight ", " Overwatch ", " MK11 ", " MK10 ", "and more"];
    let pcgames = ["Patricio's PC games: Dead by daylight ", " Overwatch ", " Dragon Ball figther Z ", " Hollow knight ", "and more"];
    let switchgames = ["Patricio's Nintendo games: Fallout Shelter ", " Super Smash Bros Ultimate ", " Mario Kart 8 ", " Just Dance 2019 ", "and more"];

    if (!msg.content.startsWith(prefix) || !msg.author.bot) {  // ||or && and ! not
       
            if (command === 'skynet-info') {  //Command variable only have the word 'arg-info' because we shift.
              if (!args.length) {  //args  variable only have the word ! because we split
                  return msg.channel.send(`Please provide any arguments... ${msg.author}!`);
              } else if (args[0] === 'dbd') {
                  return msg.channel.send('Command name: !dbd\nArguments: play, lup, ping');
              }
                msg.channel.send(`This argument is incorrect for skynet-info command, try again human: ${args[0]}`);
            }
      
           if (command === 'dbd') {  //Command variable only have the word 'arg-info' because we shift.
              if (!args.length) {  //args  variable only have the word ! because we split
                  return msg.channel.send(`Please provide any arguments, ask Skynet !skynet-info... ${msg.author}!`);
              } else if (args[0] === 'play') {
                 return msg.reply('Lets play! <:eymario:558854493567975435>');
              } else if (args[0] === 'lup') {
                return msg.channel.send(`You leveled up, hype!!! ${msg.author}!`);
              } else if (args[0] === 'ping' ) {
                  const taggedUser = msg.mentions.users.first();
                  if (!msg.mentions.users.size) {
                    return msg.reply('you need to tag a user in order to kick them!');
                   }
                  return msg.channel.send(`Do you want to play some rounds? ${taggedUser.username}`);
            }
               msg.channel.send(`This argument is incorrect for dbd command, try again human: ${args[0]}`);
           }
	    
	    if (command === 'tags') {  //Command variable only have the word 'arg-info' because we shift.
              if (!args.length) {  //args  variable only have the word ! because we split
                  return msg.channel.send(`Please provide any arguments, ask Skynet !skynet-info... ${msg.author}!`);
              } else if (args[0] === 'gamertags') {
                  return msg.reply('PSN:patricio_tv, Steam: reloadedantrax, Nintendo Switch: SW-0279-1159-3994 <:eymario:558854493567975435>');
              } else if (args[0] === 'pcgames') {
                  return msg.reply(pcgames.toString() + ":joystick:");
              } else if (args[0] === 'ps4games' ) {
                   return msg.reply(ps4games.toString()+":joystick:");                   
            }else if (args[0] === 'switchgames' ) {
                   return msg.reply(switchgames.toString() + ":joystick:");                 
            }
		    
               msg.channel.send(`This argument is incorrect for tags command, try again human: ${args[0]}`);
           }
	    
    }
	
    
    switch (args) {
        case '!ping':
            msg.channel.send('pong dev');
            break;
        case '!delete':
            msg.channel.delete();
            break;
        case '!bulk':
            msg.channel.bulkDelete(50)
            .then(message => msg.channel.send(`Bulk deleted ${message.size} messages`))
            .catch(console.error);
       break;
       case '!user':
            msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
            break;
       case '!server':
            msg.channel.send(`Server's name is: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
       break;
       case '!helpmeskynet':
            msg.channel.send(`Human here commands for you ` + ":sunglasses:" +
                `\n\n!dbd - Let's play Day by daylight\n!server - Skynet will post server name and count members\n!gamertags - Patricio_tv gamer ids\n!ps4games - Patricio's PS4 games\n!pcgames - Patricio's PC games\n!switchgames - Patricio's PC games\n!ping - check if the bot is listening\n!invite - Discord server invitation\n!helpmeskynet - Skynet bot help`);
             break;
       break;
       case '!botinvite':
	          client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
              .then(link => msg.channel.send(`Skynet bot invite link: ${link}`))
              .catch(console.error);
            break;
        case `${prefix}invite`: //Using prefixes for first time
            client.fetchInvite('https://discord.gg/5FTJFDt')
                .then(invite => msg.channel.send(`Join our machines army with this invitation: https://discord.gg/5FTJFDt \nCode: ${invite.code}`))
                .catch(console.error);
        break;
    }
})
 

// THIS  MUST  BE  THIS  WAY
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
