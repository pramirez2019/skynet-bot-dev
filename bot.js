const Discord = require('discord.js');
const client = new Discord.Client();
const channel = new Discord.Channel();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//client.on means the bot is listening
client.on('message', msg => {
    var args = msg.content;
    var ps4games = ["My PS4 games: RB6 Siege ", " Dead by daylight ", " Overwatch ", " MK11 ", " MK10 "];
    switch (args) {
        case '!dbd':
            msg.reply('Lets play! <:eymario:558854493567975435>');
        break;
        case '!gamesid':
            msg.reply('PSN:patricio_tv, steam: reloadedantrax <:eymario:558854493567975435>');
            break;
        case '!ps4games':
            msg.reply(ps4games.toString()+":joystick:");
            break;
        case '!ping':
            msg.channel.send('pong dev');
            break;
        case '!delete':
            msg.channel.delete();
            break;
        case '!bulk':
            msg.channel.bulkDelete(50)
                .then(message => console.log(`Bulk deleted ${message.size} messages`))
                .catch(console.error);
       break;
       case '!user':
            msg.channel.send(`Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`);
            break;
       case '!server':
            msg.channel.send(`This server's name is: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
       break;
       case '!helpmeskynet':
            msg.channel.send(`Human here commands for you:\n\n!dbd - Confirm to play Day by daylight\n!gamesid' - Patricio_tv gamer ids\n!ps4games - Patricio's games\n!ping - check if the bot is listening`);
       break;
    }
})
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
