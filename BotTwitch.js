
//Define configuration options (for connection compte twitch bot).
const paramTwitchBot = require('./BotTwitchLib/paramTwitchBot.js');
const opts = paramTwitchBot.getParam;

//Create a client twitch with our options.
const tmi = require('tmi.js');
const client = new tmi.client(opts);
client.connect();


//Add events listener when bot start (init bot).
const libFuncConnected = require('./BotTwitchLib/libFuncConnected.js');
const pngTuber = require('./PngTuber/libPngTuber.js'); //Import for PNGtuber.
client.on('connected', (addr, port) => {
	
	//change color name (FIXME : cmd / don't work when all by a bot).
	//client.say('#ailten', '/color BlueViolet');

	//say something in chat (or cmd window).
	libFuncConnected.connected(addr, port, client);

	(async () => {
		await pngTuber.init(); //launch pngtuber window.
	})();

});


//Add events listener when viewer send message (commande).
const libFuncMessage = require('./BotTwitchLib/libFuncMessage.js');
client.on('message', (target, context, msg, self) => {

	//verify if is a cmd to execute.
	libFuncMessage.message(target, context, msg, self, client);

});


//make a shotout when get raid by someone.
client.on('raided', (channel, username, viewers) => {

    try{

	    //do a thanks message (in announce box).
	    client.say('#ailten', `merci beaucoup à ${username} qui vien de raid avec ${viewers} viewers !`);

	    //do a shoutout. (FIXME : cmd / not usable by bot).
	    //client.say('#ailten', `/shootout ${username}`);

    }catch(error){
        console.log(`error in raided event : ${error}`);
    }

});

//event when a viewer join the chat.
const libJoin = require('./BotTwitchLib/commandes/join.js');
client.on('join', (ashtagPseudo, pseudo, boolUnknow) => {

    try{

		//write in console when a viewer targeted join the chat.
		libJoin.func(pseudo);

	}catch(error){
		console.log(`error in join event : ${error}`);
	}
});



//Add events listener when viewer use channel point (commande with cost).
//const libFuncChannelPoint = require('./BotTwitchLib/libFuncChannelPoints.js');
//client.on('rewardGift', (channel, username, rewardType, tags) => {
//    //if (rewardType === 'your_reward_type') { // Remplacez 'your_reward_type' par le type de récompense que vous souhaitez écouter
//    //    // Exécuter votre fonction ici
//    //    // Par exemple :
//    //    console.log(`${username} a récupéré un gift avec ses points de chaîne Twitch.`);
//    //}
//
//    console.log('reward take : '+rewardType);
//
//	libFuncChannelPoints.reward(channel, username, rewardType, tags, client);
//});

