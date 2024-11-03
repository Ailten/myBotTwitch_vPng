
module.exports = {

    //import lib rewards.
    libRewardCommandes: require('./libRewardCommandes.js'),
    
    //when a viewer get a reward with channel points.
    message: function(channel, username, rewardType, tags, client){
    
    	//search a reward.
    	let rewardCommandeFind = this.libRewardCommandes.listRewardCommandes()
    	    .find(e => e.name == rewardType);
			
		if(rewardCommandeFind != undefined)
            rewardCommandeFind.exec(channel, username, rewardType, tags, client);
    	
    },

}