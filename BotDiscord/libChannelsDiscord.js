
module.exports = {

    channels: [ //all channels name - id.
        { name: 'bot-log', id: '1223308295838761110' },
        { name: 'bot-params', id: '1223344325899845632' },
        { name: 'ping-live', id: '1140277384872984596' }
    ],

    //send a message in a discord channel.
    sendMessage: function (clientDiscord, message, channelName, isInBox=false) {

        //make a discord box message (for code or asci).
        if(isInBox){
            message = '```'+message+'```';
        }

        //get channel by id.
        let channel = this.getChannelByName(clientDiscord, channelName);
        if(channel === null)
            return false;

        //send message to channel.
        channel.send(message);

        //success.
        return true;
    },

    //get an obj channel by name.
    getChannelByName: function(clientDiscord, channelName){

        //get channel obj (name - id).
        let channelFind = this.channels.find((c) => c.name === channelName);
        if(channelFind === undefined)
            return null;

        //get channel by id.
        let channel = clientDiscord.channels.cache.get(channelFind.id);
        if(channel === undefined)
            return null;

        return channel;

    }

}