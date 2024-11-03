
module.exports = {
	
    //geter listCommandes
    listRewardCommandes: function(){
		if(this.listRewardCommandesArray.length==0){

            //add commande in array.
			this.rewardCommande('youtube');

		}
    	return this.listCommandesArray;
    },
    
    //var stock all commande obj.
    listRewardCommandesArray: [],

    //obj commande.
    rewardCommande: function(name){
		this.listRewardCommandesArray.push({
			name: name,
			requiredScript: require('./rewardCommandes/'+name+'.js'),
			
    	    //call exec for filtre permissions befor launch func.
			exec: function(channel, username, rewardType, tags, client){
    			this.requiredScript.func(channel, username, rewardType, tags, client);
    		}
		});
    }

}