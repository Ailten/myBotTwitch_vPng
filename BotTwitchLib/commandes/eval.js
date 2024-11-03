
module.exports = {
	
	//get parameters in commande.
	paramsManager: require('./../libFuncMessageParams.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){
	
	    let param = this.paramsManager.getRestParam(msg);
		
		if(param.length == 0){
	        client.say(target, "aucun parametre reconnu :'o");
			return;
		}
	
	    let result = eval(param).toString();
	    client.say(target, result);
	
	}
}