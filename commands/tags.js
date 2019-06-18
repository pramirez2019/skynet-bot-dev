const { prefix } = require('../config.json'); // config.json is one folfer up ..

module.exports.tagscommands = function (msg) { 

let args = msg.content.slice(prefix.length).split(/ +/); //Slices off the prefix entirely and then splits it into an array by spaces. / +/ to avoid issues with spaces
const command = args.shift().toLowerCase(); //Variable by calling args.shift(), which will take the first element in array and return it while also removing it from the original array(so that you dont have the command name string inside the args array).

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

};
