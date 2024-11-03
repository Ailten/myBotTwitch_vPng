

module.exports = {
    //lib bot discord.
    libBotDiscord: require('./../../BotDiscord/libBotDiscord.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){
        
        //launch the ping discord.
        this.libBotDiscord.sendPingStartStream();

        //reponce.
        client.say(target, 'le ping discord à été envoyé :> (je croi)');
	
	}
}