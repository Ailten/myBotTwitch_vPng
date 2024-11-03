
module.exports = {

	//get parameters in commande.
	paramsManager: require('./../libFuncMessageParams.js'),
	
	//crud in file local.
	fileCRUD: require('./../libFileCRUD.js'),
	
	//function call when commande say in chat.
	func: function(target, context, msg, client){

		let params = this.paramsManager.func(msg);

		if(params.length == 0){ //no parameters.
	        client.say(target, "aucun parametre reconnu :'o");
			return;
		}

		if(!(/^[a-zA-Z0-9_-]{1,25}$/).test(params[0])){ //format security.
	        client.say(target, "parametre suspect >:o");
			return;
		}

        this.fileCRUD.writeBufferPngTuber(
			params[0], //name_layer.
			"activ_layer" //cmd.
		);

    }

}