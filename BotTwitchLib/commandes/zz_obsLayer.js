
module.exports = {
	
	//get parameters in commande.
	paramsManager: require('./../libFuncMessageParams.js'),
	
	//send call.
	http: require('./../libHttp.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        //get params.
        let arrayParams = this.paramsManager.func(msg);
        if(arrayParams.length == 0){
            client.say(target, 'sowwy, cette commande a besoin de parametres :x');
            return;
        }
        
        //send param to obs layer.
        if(arrayParams.length == 1){

            //split first param by dot.
            let paramOneSplit = arrayParams[0].split('.');
            if(paramOneSplit.length != 2){
                console.log('parametre {'+arrayParams[0]+'} cant be split properly.');
                return;
            }

            this.http.sendToReplObsLayer(paramOneSplit[0], paramOneSplit[1]);
        }else if(arrayParams.length == 2){
            this.http.sendToReplObsLayer(arrayParams[0], arrayParams[1]);
        }
	
	}
}