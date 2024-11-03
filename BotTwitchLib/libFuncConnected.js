
module.exports = {
	
	//function call when bot is launch.
    connected: function(addr, port, client){

		//light info.
		console.log("bot twitch is connected.");
		
	
	    //array messages random when bot connected.
	    const arrayMessageConnected = [
	        "je suis pret :3",
	        "au raport capitaine :>",
	        "encore du travaille ? :'o",
	        "c'est reparti x3",
	        "okaerinasai, goshujin sama uwu"
	    ];
	    
	    //say a random message in chat twitch.
	    client.say("#ailten", arrayMessageConnected[
	        Math.floor(
	    	    Math.random() * arrayMessageConnected.length
	    	)
	    ]);
	
    }
}