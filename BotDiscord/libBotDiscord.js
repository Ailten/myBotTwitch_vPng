
module.exports = {

    discord: require('discord.js-v11'), //lib for using bot discord. //FIXME lib don't work.
    clientDiscord: null, //the client connected.
    tokenBotDiscord: require('./paramDiscordBot.js'), //token for connect acount bot discord.

    allChannels: require('./libChannelsDiscord.js'), //block for all channels management.

    //func for init the bot.
    init: function(){

        //instantie client.
        this.clientDiscord = new this.discord.Client();

        //set events ready.
        //this.clientDiscord.on('ready', () => {
        //    console.log('bot discord connected with success !');
        //});

        //set events message.
        //this.clientDiscord.on('message', () => {});
        
        //connect token.
        this.clientDiscord.login(this.tokenBotDiscord.getParam());

    },

    //shut down the client bot discord.
    deinit: function(){
        this.clientDiscord.destroy();
    },

    sendPingStartStream: function(){

        this.init(); //init the bot.

        setTimeout((lib) => {

            lib.allChannels.sendMessage(
                lib.clientDiscord, //clientDiscord.
                'coucou, ceci est un message pour signaler que je suis en stream :0 (j\'ais pas mi de ping parceque c relou)', //message.
                'ping-live',  //channelName.
                true //isInBox.
            );

            setTimeout((lib) => { //deinit the bot.
                lib.deinit();
            }, 1000, lib);

        }, 1000, this);

    }

}