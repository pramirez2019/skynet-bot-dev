const { prefix } = require('../config.json'); // config.json is one folfer up ..
const extralifeapi = require('extra-life-api');

module.exports = {
    //name:, cooldown:, args: and description: are properties of the object. They are important to use on the main file.

    name: 'extralife',
    cooldown: 5,
    description: 'extralife!',
    //whenever you set args to true in one of your command files, it'll perform this check and supply feedback if necessary.
    args: true,
    usage: '+ <ARGUMENT>',
    arguments: '<info>, <team + teamID>, <teamdonors + teamID>, <donors + participantID>, <participant + participantID>',
    execute(msg, args) {
        if (args[0] === 'info') {
            extralifeapi.getUserInfo('349069').then(userinfo => {
                return msg.channel.send(`Participant name: ${userinfo.displayName}\nExtra Life team is: ${userinfo.teamName}\nFunraising Goal: ${userinfo.fundraisingGoal}`);
            });
        } else if (args[0] === 'team') {
            let args1 = msg.content.slice(prefix.length).split(/ +/);
            const extralifTeamid = args1[2]
            extralifeapi.getTeamInfo(`${extralifTeamid}`).then(teaminfo => {
                return msg.channel.send(`Team name: ${teaminfo.name}\nTeam Captain: ${teaminfo.captainDisplayName}\nFunraising Goal: ${teaminfo.fundraisingGoal}\nFunraising Page: ${teaminfo.links.page}\n`);
            });
        } else if (args[0] === 'schedule') {
            return msg.reply('Extra Life stream team schedule: https://community.extra-life.org/forums/topic/4508-the-official-extra-life-stream-team-weekly-schedule/');
        }else if (args[0] === 'donors') {
            let args1 = msg.content.slice(prefix.length).split(/ +/);
            const extralifeid = args1[2]
            extralifeapi.getUserDonations(`${extralifeid}`).then(Donations => {
                return msg.channel.send(`Total participant donations raised: ${Donations.countDonations}\n`);
            });
        } else if (args[0] === 'teamdonors') {
            let args1 = msg.content.slice(prefix.length).split(/ +/);
            const extralifeid = args1[2]
            extralifeapi.getTeamDonations(`${extralifeid}`).then(Donations => {
                return msg.channel.send(`Total team donations raised: ${Donations.countDonations}\nTeam ID: ${Donations.donations[0].teamID}\n`);
            });
        } else if (args[0] === 'participant') {
            let args1 = msg.content.slice(prefix.length).split(/ +/);
            const extralifeid = args1[2]
            extralifeapi.getUserInfo(`${extralifeid}`).then(userinfo => {
                return msg.channel.send(`Participant name: ${userinfo.displayName}\nExtra Life team is: ${userinfo.teamName}\nExtra Life Team ID: ${userinfo.teamID}\nFunraising Goal: ${userinfo.fundraisingGoal}\nFunraising Page: ${userinfo.links.donate}\nStream Page: ${userinfo.links.stream} `); 
            });
            if (!args[0] === '') {
                return msg.reply('Human you need an Extra Life id in order to use this command');
            }
            //return msg.channel.send(`Do you want to play some rounds? ${taggedUser.username}`);
        }
        //msg.channel.send(`This argument is incorrect for this command, try again human: ${args[0]}`);
    },
};