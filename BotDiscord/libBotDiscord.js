
module.exports = {

    discord: require('discord.js-v11'), //lib for using bot discord. //FIXME lib don't work. //-v11 because v14 need TS. (i guess)
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

    //func for init the bot (but wait until connected).
    awaitInit: async function(){

        this.init();

        let loopCount = 0;
        const loopCountMax = 300;

        while(true){

            //wait.
            await (new Promise(resolve => {
                setTimeout(()=>{
                    resolve();
                }, 200);
            }));

            if(this.clientDiscord === undefined)
                continue;

            if(this.clientDiscord.presence.status === 'online'){ // bot discord is ready.
                break;
            }

            loopCount++;
            if(loopCount > loopCountMax){
                throw new Error("max loop connection client bot discord reach !");
            }

        }

    },

    //shut down the client bot discord.
    deinit: function(){
        this.clientDiscord.destroy();
    },

    sendPingStartStream: async function(){

        await this.awaitInit() //init the bot.
            .catch((error) => {
                throw error;
            });

        console.log(this.clientDiscord);

        await this.allChannels.sendMessage(
            this.clientDiscord, //clientDiscord.
            'coucou, ceci est un message pour signaler que je suis en stream :0 (j\'ais pas mi de ping parceque c relou)', //message.
            'bot-log', //'ping-live',  //channelName.
            true //isInBox.
        ).catch((error) => {
            throw error;
        });

        this.deinit(); //deinit the bot.

    }

}
