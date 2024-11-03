
module.exports = {
	
	//connection to DB.
	fileCRUD: require('./../libFileCRUD.js'),
	
	//function call when commande say in chat.
	func: function(channel, username, rewardType, tags, client){

        this.fileCRUD.writeBufferPngTuber('Eyes_Smug');

        //TODO: send function error in param for re-buy viewer channel points.

    }

}