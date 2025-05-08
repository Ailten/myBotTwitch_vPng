

module.exports = {
    //lib bot discord.
    libBotDiscord: require('./../../BotDiscord/libBotDiscord.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){
	
        this.asyncFunc(target, context, msg, client)
            .catch((error) => {
                throw error;
            });

	},

    asyncFunc: async function(target, context, msg, client){

        //launch the ping discord.
        await this.libBotDiscord.sendPingStartStream()
            .catch((error) => {
                throw error;
            });

        //reponce.
        client.say(target, 'le ping discord à été envoyé :> (je croi)');

    },
}