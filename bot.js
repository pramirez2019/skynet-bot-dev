//THIS IS TEST
const { prefix } = require('./config.json');//Using prefixes({prefix})stored on config.json file. configuration files come in for storing static data that can be easily updated in a single place
const Discord = require('discord.js'); // require the discord.js module
const client = new Discord.Client(); // create a new Discord client
//const auth = require('./auth.json');  // Enable this for local testing
const channel = new Discord.Channel();

// when the client is ready, run this code
// this event will only trigger one time after logging in

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//ENABLE THIS FOR LOCAL TEST ONLY!!!
//client.login(auth.token);

//client.on means the bot is listening
client.on('message', msg => {
    let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
    const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).
    let ps4games = ["Patricio's PS4 games: RB6 Siege ", " Dead by daylight ", " Overwatch ", " MK11 ", " MK10 ", "and more"];
    let pcgames = ["Patricio's PC games: Dead by daylight ", " Overwatch ", " Dragon Ball figther Z ", " Hollow knight ", "and more"];
    let switchgames = ["Patricio's Nintendo games: Fallout Shelter ", " Super Smash Bros Ultimate ", " Mario Kart 8 ", " Just Dance 2019 ", "and more"];

    if (!msg.content.startsWith(prefix) || !msg.author.bot) {  // ||or && and ! not
        //Command variable only have the word 'skynet-info' because we shift.
        if (command === 'skynet-info') {
            //args  variable only have the word ! because we split
            if (!args.length) {  
                return msg.channel.send(`Please provide any arguments... ${msg.author}\nArguments: dbd, tags, info\nExample: !dbd, !tags, !info`);
            }
            msg.channel.send(`Human this argument is incorrect for skynet-info command, try again human: ${args[0]}`);
        }
        //Command variable only have the word 'dbd' because we shift.
        if (command === 'dbd') { 
            //args  variable only have the word ! because we split
            if (!args.length) {  
                return msg.channel.send(`Please provide any arguments ${msg.author}!\nArguments: play, lup, ping\nExample: !dbd + ARGUMENT. `);
            } else if (args[0] === 'play') {
                return msg.reply('Lets play! <:eymario:558854493567975435>');
            } else if (args[0] === 'lup') {
                return msg.channel.send(`You leveled up, hype!!!  :sunglasses:  ${msg.author}!`);
            } else if (args[0] === 'ping') {
                const taggedUser = msg.mentions.users.first();
                if (!msg.mentions.users.size) {
                    return msg.reply('you need to tag a user in order to kick them!');
                }
                return msg.channel.send(`Do you want to play some rounds? ${taggedUser.username}`);
            }
            msg.channel.send(`This argument is incorrect for dbd command, try again human: ${args[0]}`);
        }
        //Command variable only have the word 'arg-info' because we shift.
        if (command === 'tags') {
            //args  variable only have the word ! because we split
            if (!args.length) {  
                return msg.channel.send(`Please provide any arguments ${msg.author}!\nArguments: gamertags, pcgames, ps4games, switchgames\nExample: !tags + ARGUMENT.`);
            } else if (args[0] === 'gamertags') {
                return msg.reply('PSN:patricio_tv, Steam: reloadedantrax, Nintendo Switch: SW-0279-1159-3994 <:eymario:558854493567975435>');
            } else if (args[0] === 'pcgames') {
                return msg.reply(pcgames.toString() + ":joystick:");
            } else if (args[0] === 'ps4games') {
                return msg.reply(ps4games.toString() + ":joystick:");
            } else if (args[0] === 'switchgames') {
                return msg.reply(switchgames.toString() + ":joystick:");
            }

            msg.channel.send(`This argument is incorrect for tags command, try again human: ${args[0]}`);
        }
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
                return client.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'])
                    .then(link => msg.channel.send(`Skynet bot invite link: ${link}`))
                    .catch(console.error);
            }
            msg.channel.send(`This argument is incorrect for admin command, try again human: ${args[0]}`);
        }

    }        
})
//ENABLE THIS FOR WEB SERVICE ONLY!!!
// THIS  MUST  BE  THIS  WAY
// login to Discord with your app's token
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot


