
module.exports = {
	
	//get parameters in commande.
	paramsManager: require('./../libFuncMessageParams.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        //get params.
        let arrayParams = this.paramsManager.func(msg);
        if(arrayParams.length == 0){
            console.log('commande debug call with no parameters.');
            return;
        }

        //write obj from API twitch in console.
        switch(arrayParams[0]){
            case('target'):
                console.log('commande debug writh obj target');
                console.log(target);
                break;
            case('context'):
                console.log('commande debug writh obj context');
                console.log(context);
                break;
            case('msg'):
                console.log('commande debug writh obj msg');
                console.log(msg);
                break;
            case('client'):
                console.log('commande debug writh obj client');
                console.log(client);
                break;
        }
	
	}
}