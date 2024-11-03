
module.exports = {

    //get params of a cmd.
    messageParams: require('./../libFuncMessageParams.js'),

	//function call when commande say in chat.
	func: function(target, context, msg, client){

        let allParamsCmd = this.messageParams.func(msg); //get all word after cmd.

        let targetOfCmd = ((allParamsCmd.length > 0)? allParamsCmd[0]: context.username); //placeholder if no target.

        targetOfCmd = targetOfCmd.replace(/^[@]/, ''); //erase if it's a tag.

        let reponces = [ //all patern responce.
            `${targetOfCmd} est pipou aujord'hui ! :3`,
            `${targetOfCmd} n'est pas pipou ! èwé`
        ];

        //reponce.
        client.say(target, reponces[ Math.floor(Math.random() * reponces.length) ]);
	
	}
}