

module.exports = {

    //lib for make call https.
    https: require('../libHttp.js'),
    //param for connect bot twitch.
    paramTwitchBot: require('../paramTwitchBot.js'),
    //list of pseudo twitch to ask.
    join: require('./join.js'),


	//function call when commande say in chat.
	func: function(target, context, msg, client){
        
        this.join.allPseudo.map((pseudoTwitch) => { //get pseudo array and rempa for set on all string cel.

            if(typeof pseudoTwitch === 'string')
                return pseudoTwitch;
            return pseudoTwitch.pseudoTwitch;

        }).forEach((pseudoTwitch) => { //loop on all pseudo string.
            
            this.https.sendHeader(
                `https://api.twitch.tv/helix/users?login=${pseudoTwitch}`,
                {
                    method: 'GET',
                    headers: {
                        'Client-ID': this.paramTwitchBot.getParamApp['Client-ID'], //make a client id in app twitch (current invalide).
                        'Authorization': `Bearer ${this.paramTwitchBot.getParam.identity.password}`
                        //'Accept': 'application/vnd.twitchtv.v5+json'
                    }
                },
                (data) => { 

                    if(data.data && data.data.length > 0){ //the data say this pseudo is living.
                        
                        console.log(`[${pseudoTwitch}] (V) est en live !`);

                    }else{

                        console.log(`[${pseudoTwitch}] (X) n'est pas en live.`);

                    }

                },
                (error) => { //already debug function in send.
                    
                    console.log(error);
                    if(error.reponce){
                        console.log(error.reponce);
                        if(error.reponce.headers)
                            console.log(error.reponce.headers);
                    }

                }
            );

        });
	
	}
}