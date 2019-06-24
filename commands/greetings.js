/*
//Exporting annonymous function
module.exports = function (msg) {
    console.log(msg);
};
*/

/*
module.exports.ping = function (msg) { 
	console.log(msg);
};
*/

module.exports.ping = function (msg) { 
	console.log(msg);
	return msg.channel.send(`this is a super ping`);
};

module.exports.pong = function (msg) { 
	console.log(msg);
	return msg.channel.send(`this is a pong`);
};

