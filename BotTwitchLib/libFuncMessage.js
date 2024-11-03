
module.exports = {
	
    //import lib commande.
    libCommandesBot: require('./libCommandesBot.js'),
    
    //when a viewer say a message in chat.
    message: function(target, context, msg, self, client){
    
        //skip self message and message empty.
        if(self || msg==undefined)
    		return;
    	
    	//skip if message don't start by char '!'.
    	if(!this.stringStartBy(msg, '!'))
    		return;
    
    	//search and execute commande match.
    	const commendeFind = this.libCommandesBot.listCommandes()
    	    .find(e => this.compareMsgToCmd(msg.substring(1), e.name));
		
		//execut commande (if find one).
		if(commendeFind != undefined)
    	    commendeFind.exec(target, context, msg, client);
    	
    },
    
    //function return true if str start by startBy.
    stringStartBy: function(str, startBy){
    	return (
    	    str.substring(0, Math.min(startBy.length, str.length)) == startBy
    	);
    },

    //function to return true if msgStr start by the cmd (first word).
    compareMsgToCmd: function(msgStr, cmdStr){

		let msgFirstWord = (/^[a-zA-Z]{1,}/).exec(msgStr.toLowerCase())[0]; //get first word !... .
		let cmdStrLowerCase = cmdStr.toLowerCase(); //lower case.

    	return (msgFirstWord === cmdStrLowerCase);
    },

}