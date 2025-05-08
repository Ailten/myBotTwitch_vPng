
module.exports = {

    channels: [ //all channels name - id.
        { name: 'bot-log', id: '1223308295838761110' },
        { name: 'bot-params', id: '1223344325899845632' },
        { name: 'ping-live', id: '1140277384872984596' }
    ],

    //send a message in a discord channel.
    sendMessage: async function (clientDiscord, message, channelName, isInBox=false) {

        //make a discord box message (for code or asci).
        if(isInBox){
            message = '```'+message+'```';
        }

        //get channel by id.
        let channel = undefined;
        await this.getChannelByName(clientDiscord, channelName)
            .then((result) => {
                channel = result;
            })
            .catch((error) => {
                throw error;
            });

        //send message to channel.
        await channel.send(message)
            .catch((error) => {
                throw error;
            });

    },

    //get an obj channel by name.
    getChannelByName: async function(clientDiscord, channelName){

        //get channel obj (name - id).
        let channelFind = this.channels.find((c) => c.name === channelName);
        if(channelFind === undefined)
            return null;

        //get channel by id.
        let channel = undefined;
        await clientDiscord.channels.fetch(channelFind.id)
            .then((result) => {
                console.log(result); // fixeme: channels is empty, for unknow reason.
                channel = result;
            })
            .catch((error) => {
                throw error;
            });

        return channel;

    }

}